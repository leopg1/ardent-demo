import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight, Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from './CTABand'
import RatingBadge from './RatingBadge'
import Reveal from './Reveal'

type Props = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: ReactNode
  intro: string
  heroImage: string
  heroImageAlt: string
  /** Conținutul principal al paginii (secțiuni libere). */
  children: ReactNode
  /** Beneficii scurte afișate sub intro, în hero. */
  highlights?: string[]
  ctaTitle?: string
  /** Text specific serviciului pentru banda CTA de final (altfel se folosește textul implicit). */
  ctaText?: string
  /** Text specific serviciului pentru cardul plutitor de sub imaginea hero; fără badge se afișează ratingul. */
  badge?: string
  /** Clase suplimentare pentru imaginea hero (ex. object-position, ca fețele să nu fie tăiate). */
  heroImageClassName?: string
}

/**
 * Layout comun pentru paginile de servicii: hero + conținut + sidebar + CTA.
 * Paginile de serviciu NU trebuie să re-implementeze structura — doar children.
 */
export default function ServiceLayout({
  slug,
  metaTitle,
  metaDescription,
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  children,
  highlights,
  ctaTitle,
  ctaText,
  badge,
  heroImageClassName,
}: Props) {
  usePageMeta(metaTitle, metaDescription)

  return (
    <>
      {/* Hero serviciu */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative grid items-center gap-12 hero-pad lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-xs font-semibold text-plum-900/60" aria-label="Breadcrumb">
              <Link to="/" className="transition hover:text-coral-700">Acasă</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/servicii" className="transition hover:text-coral-700">Servicii</Link>
            </nav>
            <p className="eyebrow mt-6">{eyebrow}</p>
            <h1 className="h-display mt-3 text-4xl md:text-[52px]">{title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-900/75">{intro}</p>
            {highlights && (
              <ul className="mt-6 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-base font-medium text-plum-900/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to={`/contact?serviciu=${slug}#formular`} className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-lift ${heroImageClassName ?? ''}`.trim()}
              loading="eager"
            />
            <div className="card-surface absolute -bottom-5 left-5 hidden items-center gap-3 px-5 py-3.5 sm:flex">
              {badge ? (
                <p className="text-xs font-bold text-plum-900">{badge}</p>
              ) : (
                <RatingBadge variant="star" />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conținut + sidebar */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0 space-y-14">{children}</div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface card-pad">
              <h2 className="card-title">Alte servicii</h2>
              <ul className="mt-4 space-y-1">
                {services
                  .filter((s) => s.slug !== slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/servicii/${s.slug}`}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-plum-900/80 transition hover:bg-plum-50 hover:text-coral-700"
                      >
                        {s.menuTitle}
                        <ChevronRight className="h-4 w-4 text-plum-300" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="card-pad rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <h2 className="card-title">Ai o întrebare?</h2>
              <p className="mt-2 text-sm leading-relaxed text-plum-900/75">
                Sună-ne și îți răspundem pe loc, sau scrie-ne și te contactăm noi.
              </p>
              <a href={site.phoneHref} className="btn-primary mt-5 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <Link to={`/contact?serviciu=${slug}#formular`} className="btn-secondary mt-3 w-full">
                Scrie-ne online
              </Link>
              <p className="mt-3 text-center text-xs text-plum-900/60">{site.schedule}</p>
            </div>
          </aside>
        </div>
      </section>

      <CTABand title={ctaTitle} text={ctaText} />
    </>
  )
}
