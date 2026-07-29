import { Star } from 'lucide-react'

type Props = {
  /** Rating între 0 și 5 — a cincea stea se umple fracționat (ex. 4,8). */
  value?: number
  /** Etichetă pentru cititoarele de ecran. */
  ariaLabel?: string
  /** Clase pentru fiecare stea (dimensiune). */
  starClassName?: string
  className?: string
}

/** Rând de 5 stele aurii — ratingul Google al clinicii. Sursa unică pentru stele. */
export default function Stars({
  value = 5,
  ariaLabel,
  starClassName = 'h-4 w-4',
  className = '',
}: Props) {
  const label = ariaLabel ?? `Evaluare: ${String(value).replace('.', ',')} din 5 stele`
  return (
    <div className={`flex items-center gap-1 ${className}`} role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        if (fill >= 1) {
          return (
            <Star key={i} className={`${starClassName} fill-gold-400 text-gold-400`} aria-hidden="true" />
          )
        }
        return (
          <span key={i} className="relative inline-flex shrink-0" aria-hidden="true">
            <Star className={`${starClassName} fill-gold-400/25 text-gold-400`} />
            {fill > 0 && (
              <span
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className={`${starClassName} fill-gold-400 text-gold-400`} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
