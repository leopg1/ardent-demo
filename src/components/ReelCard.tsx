import { useEffect, useRef, useState } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'
import type { Reel } from '../lib/site'

/**
 * Coordonare între toate clipurile montate (indiferent de pagină): când un clip
 * primește sunet, celelalte se taie singure — o singură sursă de sunet o dată.
 * Registrul trăiește la nivel de modul, deci supraviețuiește navigării SPA.
 */
type MuteListener = (source: symbol) => void
const muteListeners = new Set<MuteListener>()

type Props = {
  reel: Reel
  className?: string
}

/**
 * Clip din clinică, integrat în card, fără controale native:
 *  - pornește singur (mut) când intră în viewport și se oprește când iese —
 *    nimic nu se descarcă și nu se mișcă pentru clipuri pe care nu le vezi;
 *  - sunetul se activează DOAR din butonul de volum, suprapus discret pe card;
 *  - respectă prefers-reduced-motion: rămâne pe poster, fără autoplay.
 *
 * Oprirea se face apăsând pe clip (suprafața întreagă e un buton transparent,
 * accesibil și de la tastatură). Am ales varianta asta în locul unui buton de
 * play vizibil: WCAG 2.2.2 cere o cale de oprire pentru mișcarea automată mai
 * lungă de 5 secunde, iar aici cardul arată exact ca înainte — iconița apare
 * doar cât timp clipul chiar stă pe loc (oprit de utilizator, autoplay refuzat
 * de browser sau prefers-reduced-motion), ca omul să știe că poate reporni.
 */
export default function ReelCard({ reel, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const idRef = useRef(Symbol('reel'))
  const [muted, setMuted] = useState(true)
  // „oprit” = clipul nu trebuie să ruleze; ieșirea din viewport NU îl setează,
  // altfel iconița ar clipi pe card de fiecare dată când derulezi înapoi la el.
  const [paused, setPaused] = useState(false)
  const pausedRef = useRef(false)

  function setPausedState(next: boolean) {
    pausedRef.current = next
    setPaused(next)
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // alt clip a primit sunet → acesta tace (element + stare, ca iconița să fie corectă)
    const onOtherUnmuted: MuteListener = (source) => {
      if (source !== idRef.current) {
        el.muted = true
        setMuted(true)
      }
    }
    muteListeners.add(onOtherUnmuted)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // fără autoplay: rămâne posterul, dar apăsarea pe clip îl poate porni
      setPausedState(true)
      return () => {
        muteListeners.delete(onOtherUnmuted)
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pausedRef.current) return
          el.play().catch(() => {
            // autoplay refuzat de browser — rămâne posterul, cu reper de pornire
            setPausedState(true)
          })
        } else {
          el.pause()
          // sunetul pornește doar la apăsare: la revenirea în viewport nu are
          // voie să se audă singur, deci clipul se întoarce pe mut
          el.muted = true
          setMuted(true)
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      muteListeners.delete(onOtherUnmuted)
    }
  }, [])

  function togglePlayback() {
    const el = videoRef.current
    if (!el) return
    if (pausedRef.current || el.paused) {
      setPausedState(false)
      el.play().catch(() => {
        setPausedState(true)
      })
    } else {
      setPausedState(true)
      el.pause()
    }
  }

  function toggleSound() {
    const el = videoRef.current
    if (!el) return
    const nextMuted = !muted
    if (!nextMuted) {
      for (const notify of muteListeners) notify(idRef.current)
      // cu sunet pornit, clipul trebuie să și ruleze
      setPausedState(false)
      el.play().catch(() => {
        setPausedState(true)
      })
    }
    el.muted = nextMuted
    setMuted(nextMuted)
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-plum-950 shadow-lift ring-1 ring-plum-100 ${className}`.trim()}>
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        preload="none"
        muted
        loop
        playsInline
        aria-label={reel.title}
        className={`${reel.aspectClass} w-full object-cover`}
      />
      {/* Umbră fină jos, ca butonul de volum să rămână lizibil pe orice cadru */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-plum-950/45 to-transparent"
        aria-hidden="true"
      />
      {/* Toată suprafața clipului oprește/pornește redarea — buton real, deci
          merge și cu Tab + Enter, fără să adauge vreun control vizibil peste cadru */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? `Pornește clipul — ${reel.title}` : `Oprește clipul — ${reel.title}`}
        className="absolute inset-0 flex cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
      >
        <span
          aria-hidden="true"
          className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-plum-950/55 text-white backdrop-blur transition-opacity duration-200 ${
            paused ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Play className="h-6 w-6" />
        </span>
      </button>
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? `Pornește sunetul — ${reel.title}` : `Oprește sunetul — ${reel.title}`}
        aria-pressed={!muted}
        className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum-950/60 text-white backdrop-blur transition hover:bg-plum-950/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
      >
        {muted ? (
          <VolumeX className="h-4.5 w-4.5" aria-hidden="true" />
        ) : (
          <Volume2 className="h-4.5 w-4.5" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
