import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

type Props = {
  beforeSrc: string
  afterSrc: string
  alt: string
  className?: string
  /** Raportul de aspect al cadrului (clasă Tailwind). */
  ratioClass?: string
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

  return (
    <div
      ref={ref}
      className={`group relative ${ratioClass} w-full cursor-ew-resize touch-none overflow-hidden rounded-3xl select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-500 ${className}`}
      aria-orientation="horizontal"
      onPointerDown={(e) => {
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        updateFromClientX(e.clientX)
      }}
      onPointerMove={(e) => {
        if (e.buttons > 0) updateFromClientX(e.clientX)
      }}
      role="slider"
      aria-label={`Comparație înainte și după: ${alt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
      }}
    >
      <img src={afterSrc} alt={`După — ${alt}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      {/* Stratul „înainte", tăiat cu clip-path — complet responsiv, fără măsurare în px */}
      <img
        src={beforeSrc}
        alt={`Înainte — ${alt}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      {/* Linia de separare */}
      <div className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lift" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-plum-800 shadow-lift">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
      <span className="absolute left-4 top-4 z-10 rounded-full bg-plum-950/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
        Înainte
      </span>
      <span className="absolute right-4 top-4 z-10 rounded-full bg-coral-600/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
        După
      </span>
    </div>
  )
}
