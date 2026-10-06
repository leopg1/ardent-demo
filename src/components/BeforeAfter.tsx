import { useCallback, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { MoveHorizontal } from 'lucide-react'

type Props = {
  beforeSrc: string
  afterSrc: string
  alt: string
  className?: string
  /** Raportul de aspect al cadrului (clasă Tailwind). */
  ratioClass?: string
  /** id-ul textului care explică folosirea sliderului (legendă de sub imagine). */
  describedById?: string
}

/**
 * Slider interactiv Înainte/După (drag / touch / tastatură).
 * Imaginile trebuie să aibă același cadru pentru efect corect.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  alt,
  className = '',
  ratioClass = 'aspect-[4/3]',
  describedById,
}: Props) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onHandleKeyDown = useCallback((e: ReactKeyboardEvent<HTMLSpanElement>) => {
    const step = e.shiftKey ? 10 : 5
    const actions: Record<string, () => void> = {
      ArrowLeft: () => setPos((p) => Math.max(0, p - step)),
      ArrowDown: () => setPos((p) => Math.max(0, p - step)),
      ArrowRight: () => setPos((p) => Math.min(100, p + step)),
      ArrowUp: () => setPos((p) => Math.min(100, p + step)),
      Home: () => setPos(0),
      End: () => setPos(100),
    }
    const run = actions[e.key]
    if (!run) return
    // Fără asta, Home/End/săgețile derulează pagina în loc să miște cursorul.
    e.preventDefault()
    run()
  }, [])

  const value = Math.round(pos)

  return (
    // Containerul rămâne un simplu <div>: `role="slider"` stă pe mâner, nu aici.
    // Un rol de widget pe container ar fi ascuns din arborele de accesibilitate
    // cele două <img> dinăuntru, deci alt-urile cazului clinic n-ar fi fost citite
    // niciodată de cititoarele de ecran.
    <div
      ref={ref}
      // `touch-pan-y`, nu `touch-none`: scroll-ul vertical rămâne la browser (altfel
      // degetul se „înțepenea" pe slider), iar drag-ul orizontal acționează cursorul.
      className={`group relative ${ratioClass} w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-3xl select-none ${className}`}
      onPointerDown={(e) => {
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        updateFromClientX(e.clientX)
      }}
      onPointerMove={(e) => {
        if (e.buttons > 0) updateFromClientX(e.clientX)
      }}
    >
      {/* Ambele straturi sunt sub pliu pe toate paginile care folosesc sliderul,
          deci se încarcă leneș: două fotografii de ~1600px nu trebuie să concureze
          cu imaginea din hero la prima afișare. */}
      <img
        src={afterSrc}
        alt={`După — ${alt}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      {/* Stratul „înainte", tăiat cu clip-path — complet responsiv, fără măsurare în px */}
      <img
        src={beforeSrc}
        alt={`Înainte — ${alt}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      {/* Linia de separare — fără aria-hidden, fiindcă poartă mânerul focusabil */}
      <div className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lift" style={{ left: `${pos}%` }}>
        <span
          role="slider"
          tabIndex={0}
          aria-orientation="horizontal"
          aria-label={`Comparație înainte și după: ${alt}`}
          aria-describedby={describedById}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          // Fără valuetext, cititoarele anunță doar un „50" fără sens.
          aria-valuetext={`${value}% din imaginea „înainte” vizibilă`}
          onKeyDown={onHandleKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-plum-800 shadow-lift"
        >
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <span className="absolute left-3 top-3 z-10 rounded-full bg-plum-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
        Înainte
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-coral-600/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
        După
      </span>
    </div>
  )
}
