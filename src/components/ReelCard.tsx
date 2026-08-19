import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
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
 */
export default function ReelCard({ reel, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const idRef = useRef(Symbol('reel'))
  const [muted, setMuted] = useState(true)

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
      return () => {
        muteListeners.delete(onOtherUnmuted)
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay refuzat de browser — rămâne posterul */
          })
        } else {
          el.pause()
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

  function toggleSound() {
    const el = videoRef.current
    if (!el) return
    const nextMuted = !muted
    if (!nextMuted) {
      for (const notify of muteListeners) notify(idRef.current)
      // cu sunet pornit, clipul trebuie să și ruleze
      el.play().catch(() => {})
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
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? `Pornește sunetul — ${reel.title}` : `Oprește sunetul — ${reel.title}`}
        aria-pressed={!muted}
        className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-plum-950/60 text-white backdrop-blur transition hover:bg-plum-950/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
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
