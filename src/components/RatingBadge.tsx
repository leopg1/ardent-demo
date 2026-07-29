import { site } from '../lib/site'
import Stars from './Stars'

type Props = {
  /** true = text alb pentru fundal închis. */
  light?: boolean
  /** 'stars' = 5 stele + text; 'star' = o stea + text (compact, pentru rânduri de tip meta). */
  variant?: 'stars' | 'star'
  className?: string
}

/**
 * Insignă unică de rating Google — folosită peste tot în locul celor 5 variante
 * ad-hoc de dinainte. Trage valorile din site.ts (4,8 / 129 recenzii).
 */
export default function RatingBadge({ light = false, variant = 'stars', className = '' }: Props) {
  const ratingValue = Number.parseFloat(site.rating.replace(',', '.'))
  const text = `${site.rating}/5 · ${site.reviewCount} de recenzii Google`
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white/85' : 'text-plum-900/80'} ${className}`}
    >
      {variant === 'stars' ? (
        <Stars
          starClassName="h-4 w-4"
          value={ratingValue}
          ariaLabel={`Evaluare: ${site.rating} din 5 stele`}
        />
      ) : (
        <span className="text-gold-400" aria-hidden="true">
          ★
        </span>
      )}
      {text}
    </span>
  )
}
