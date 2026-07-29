import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../lib/site'
import Reveal from './Reveal'

type Props = {
  service: Service
  delay?: number
}

/**
 * Cardul de serviciu — folosit în preview-ul de pe Home și în indexul de servicii.
 * Link întreg clicabil: imagine 4:3 cu zoom discret la hover, titlu, descriere
 * scurtă și îndemnul „Află mai mult”.
 */
export default function ServiceCard({ service, delay = 0 }: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/servicii/${service.slug}`}
        className="group card-surface card-hover flex h-full flex-col overflow-hidden"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col card-pad">
          <h3 className="card-title">{service.title}</h3>
          <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">{service.short}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-coral-600">
            Află mai mult
            <ArrowRight
              className="h-4 w-4 transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
