import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  name: string
  /** Ex.: „Medic stomatolog · Endodonție la microscop”. */
  role: string
  photo: string
  photoAlt: string
  eyebrow?: string
  /** Descrierea medicului pentru serviciul curent (unul sau mai multe <p>). */
  children: ReactNode
  quote?: string
  quoteAuthor?: string
}

/**
 * Blocul „Cine te tratează” de pe paginile de servicii: portret + medicul
 * responsabil de serviciul respectiv. Folosit identic pe toate paginile,
 * ca pacientul să știe de fiecare dată cine îl tratează.
 */
export default function MedicServiciu({
  name,
  role,
  photo,
  photoAlt,
  eyebrow = 'Cine te tratează',
  children,
  quote,
  quoteAuthor,
}: Props) {
  return (
    <section aria-label={`Medicul care se ocupă de acest serviciu: ${name}`} className="card-surface overflow-hidden">
      <div className="grid sm:grid-cols-[minmax(0,15rem)_1fr]">
        <img
          src={photo}
          alt={photoAlt}
          loading="lazy"
          className="h-64 w-full object-cover object-top sm:h-full"
        />
        <div className="card-pad-lg">
          <p className="eyebrow !text-teal-600">{eyebrow}</p>
          <h2 className="h-display mt-3 text-3xl">{name}</h2>
          <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-coral-600">{role}</p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-plum-900/75">{children}</div>
          {quote && (
            <figure className="mt-5 border-l-2 border-coral-300 pl-4">
              <blockquote className="quote-serif">„{quote}”</blockquote>
              {quoteAuthor && (
                <figcaption className="mt-2 text-xs font-semibold text-plum-900/70">
                  — {quoteAuthor}
                </figcaption>
              )}
            </figure>
          )}
          <Link to="/echipa" className="btn-secondary mt-6">
            Cunoaște echipa
          </Link>
        </div>
      </div>
    </section>
  )
}
