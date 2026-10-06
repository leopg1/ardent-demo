import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight, Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { breadcrumbJsonLd, faqJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
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
  /** Întrebările frecvente ale paginii — folosite DOAR pentru structured data FAQPage. */
  faq?: readonly { q: string; a: string }[]
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
  faq,
}: Props) {
  // Numele din firul Ariadnei vine din site.ts, nu din meta title: Google cere ca
  // BreadcrumbList-ul să repete exact traseul vizibil, iar meta title-ul e scris
  // pentru căutare („Aparat dentar & Ortodonție Arad”), nu ca nume de pagină.
  const crumb = services.find((s) => s.slug === slug)?.menuTitle ?? metaTitle.split(' — ')[0]

  // Fiecare serviciu are hero-ul lui — fără al treilea argument toate cele 9 pagini
  // ar fi partajat aceeași copertă la distribuirea pe social.
  usePageMeta(metaTitle, metaDescription, heroImage)
  useJsonLd(
    breadcrumbJsonLd([
      { name: 'Acasă', path: '/' },
      { name: 'Servicii', path: '/servicii' },
      { name: crumb, path: `/servicii/${slug}` },
    ]),
  )
  useJsonLd(faq && faq.length > 0 ? faqJsonLd(faq) : null)

  return (
    <>
      {/* Hero serviciu */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative grid items-center gap-12 hero-pad lg:grid-cols-[1.1fr_1fr]">
          {/* initialVisible: hero-ul e deasupra pliului — fără el pornea la opacity 0
              și amâna LCP-ul până la primul callback de IntersectionObserver. */}
          <Reveal initialVisible>
            <nav className="flex min-w-0 items-center gap-1.5 text-xs font-semibold text-plum-900/70" aria-label="Breadcrumb">
              <Link to="/" className="-mx-1 -my-2.5 inline-flex shrink-0 items-center px-1 py-2.5 transition hover:text-coral-700">Acasă</Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <Link to="/servicii" className="-mx-1 -my-2.5 inline-flex shrink-0 items-center px-1 py-2.5 transition hover:text-coral-700">Servicii</Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {/* Pe ecrane înguste numele se taie, ca firul să nu împingă rândul pe două linii. */}
              <span aria-current="page" className="truncate">{crumb}</span>
            </nav>
            <p className="eyebrow mt-6">{eyebrow}</p>
            <h1 className="h1-page mt-3">{title}</h1>
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
            <div className="cta-row mt-8">
              <a href={site.phoneHref} className="btn-primary w-full sm:w-auto">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te:{' '}
                <span className="whitespace-nowrap">{site.phone}</span>
              </a>
              <Link to={`/contact?serviciu=${slug}#formular`} className="btn-secondary w-full sm:w-auto">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
          <Reveal initialVisible className="relative">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-lift ${heroImageClassName ?? ''}`.trim()}
              loading="eager"
              fetchPriority="high"
            />
            {/* Sub 640px cardul stă în flux, sub imagine: poziționat absolut ar acoperi
                conținutul următor, iar ascuns (cum era) lăsa hero-ul de pe telefon
                fără dovada socială și fără legenda fotografiei. */}
            <div className="card-mini mt-4 flex items-center gap-3 !px-5 !py-3.5 sm:absolute sm:-bottom-5 sm:left-5 sm:mt-0">
              {badge ? (
                <p className="text-sm font-semibold text-plum-900/80">{badge}</p>
              ) : (
                <RatingBadge variant="star" />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conținut + sidebar */}
      <section className="section-pad">
        {/* Sidebar-ul trece pe coloană separată abia la xl. La lg (1024–1279px) lăsa
            conținutului doar ~570px, iar grilele interioare de 2–3 coloane ajungeau la
            100–170px de text pe coloană — câte două-trei cuvinte pe rând. */}
        <div className="container-site grid gap-14 xl:grid-cols-[1fr_340px] xl:gap-12">
          <div className="min-w-0 space-y-14">{children}</div>

          {/* Sidebar-ul are ~790px: pe laptopurile de 1280×720 / 1366×768 partea de jos
              (butonul de telefon, „Scrie-ne online”, programul) rămânea permanent sub
              pliu cât timp era lipit. max-h + scroll propriu îl fac accesibil oriunde.
              Marginea negativă compensează padding-ul, ca umbra cardurilor să nu fie
              tăiată de containerul cu overflow. */}
          <aside className="space-y-6 xl:sticky xl:top-28 xl:-mx-2 xl:max-h-[calc(100dvh-8rem)] xl:self-start xl:overflow-y-auto xl:overscroll-contain xl:px-2">
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
            <div className="card-pad rounded-3xl border border-plum-100 bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft">
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
              <p className="mt-3 text-center text-xs text-plum-900/70">{site.schedule}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* serviciu: banda de jos duce în formular cu serviciul deja preselectat,
          la fel ca butonul din hero — altfel pacientul care derulează până jos
          ajunge pe „Nu știu încă”. */}
      <CTABand title={ctaTitle} text={ctaText} serviciu={slug} />
    </>
  )
}
