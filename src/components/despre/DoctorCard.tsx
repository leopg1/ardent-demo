import { Quote } from 'lucide-react'
import type { TeamMember } from '../../lib/site'
import Reveal from '../Reveal'

type Props = {
  doctor: TeamMember
  index?: number
}

/** Card de medic pentru pagina Echipa: portret, bio, arii de expertiză și citat din recenzii. */
export default function DoctorCard({ doctor, index = 0 }: Props) {
  return (
    <Reveal delay={(index % 2) * 0.12} className="h-full">
      <article className="card-surface flex h-full flex-col">
        <div className="card-pad-lg flex flex-1 flex-col">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum-100 ring-1 ring-plum-100">
            <img
              src={doctor.photo}
              alt={`${doctor.name} — medic la clinica ARdental proSmile din Arad`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <h3 className="card-title mt-6">{doctor.name}</h3>
          <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
            {doctor.role}
          </p>

          <p className="mt-4 text-base leading-relaxed text-plum-900/75">{doctor.bio}</p>

          {doctor.areas.length > 0 && (
            <ul
              className={`${doctor.quote ? 'mt-5' : 'mt-auto pt-5'} flex flex-wrap gap-2`}
              aria-label={`Arii de expertiză — ${doctor.name}`}
            >
              {doctor.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-plum-50 px-3.5 py-1.5 text-xs font-bold text-plum-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          )}

          {doctor.quote && (
            <div className="mt-auto pt-6">
              <figure className="border-l-2 border-coral-300 pl-4">
              <Quote className="h-4 w-4 text-coral-300" aria-hidden="true" />
              <blockquote className="quote-serif mt-1.5">
                „{doctor.quote}”
              </blockquote>
              {doctor.quoteAuthor && (
                <figcaption className="mt-2 text-xs font-semibold text-plum-900/70">
                  — {doctor.quoteAuthor}
                </figcaption>
              )}
              </figure>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}
