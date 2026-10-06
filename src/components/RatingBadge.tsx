import { Star } from 'lucide-react'
import { ratingValue, site } from '../lib/site'
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
 * ad-hoc de dinainte. Trage valorile din site.ts.
 */
export default function RatingBadge({ light = false, variant = 'stars', className = '' }: Props) {
  const text = `${site.rating}/5 · ${site.reviewCount} de recenzii Google`
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white/85' : 'text-plum-900/80'} ${className}`}
    >
      {/* aria-hidden pe stele: textul de alături spune deja „4,9/5 · … recenzii Google”,
          iar fără el cititorul de ecran anunța aceeași notă de două ori. */}
      {variant === 'stars' ? (
        <span aria-hidden="true" className="inline-flex">
          <Stars starClassName="h-4 w-4" value={ratingValue} />
        </span>
      ) : (
        <Star className="h-4 w-4 shrink-0 fill-gold-400 text-gold-600" aria-hidden="true" />
      )}
      {text}
    </span>
  )
}
