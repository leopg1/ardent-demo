import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'

type Props = {
  /** Numărul cazului, ex. „01". */
  number: string
  /** Eticheta serviciului (chip). */
  chip: string
  title: string
  description: string
  /** Ruta serviciului aferent. */
  to: string
  linkLabel: string
  /** Media cazului: imagine, colaj sau video — element liber. */
  media: ReactNode
  /** true → media pe dreapta (desktop). */
  reverse?: boolean
}

/** Card mare de caz clinic „înainte / după", cu media și text alternate. */
export default function CaseCard({
  number,
  chip,
  title,
  description,
  to,
  linkLabel,
  media,
  reverse = false,
}: Props) {
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? 'lg:order-2' : ''}>{media}</div>
        <div className={`relative isolate ${reverse ? 'lg:order-1' : ''}`}>
          <span
            className="pointer-events-none absolute -left-1 -top-8 -z-10 select-none font-display text-[7rem] font-semibold leading-none text-plum-100 md:text-[9rem]"
            aria-hidden="true"
          >
            {number}
          </span>
          <p>
            <span className="inline-flex items-center rounded-full border border-coral-100 bg-coral-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-coral-600">
              {chip}
            </span>
          </p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-plum-900/75">{description}</p>
          <Link
            to={to}
            className="mt-6 inline-flex items-center gap-2 text-base font-bold text-plum-700 transition hover:gap-3 hover:text-coral-700"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}
