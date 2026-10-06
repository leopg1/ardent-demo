import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import { formatArticleDate, readingMinutes, sortedArticles } from '../lib/blog'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'

/** Metadata unui articol (dată + minute de citit), refolosită pe carduri. */
function ArticleMeta({ date, minutes, className = '' }: { date: string; minutes: number; className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-plum-900/70 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
        <time dateTime={date}>{formatArticleDate(date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
        {minutes} min de citit
      </span>
    </p>
  )
}

export default function Blog() {
  usePageMeta(
    'Blog — Sfaturi de la medicii ARdental proSmile Arad',
    'Ghiduri scrise de echipa clinicii ARdental din Arad: frica de dentist, tartru, implanturi, gingii, copii la stomatolog. Explicate pe înțeles, fără jargon.',
  )

  const list = sortedArticles()
  const [featured, ...rest] = list

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          {/* initialVisible: hero-ul e deasupra pliului — fără el pornea la opacity 0. */}
          <Reveal initialVisible>
            <p className="eyebrow justify-center">Blog</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">Sfaturi care țin de-adevăratelea</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Răspundem în scris la întrebările pe care le primim cel mai des la telefon și în
              cabinet — fără jargon și fără sperietori. Scrise de echipa clinicii, pe îndelete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articolul recent, la vedere */}
      {featured && (
        <section className="pt-16 md:pt-24">
          <div className="container-site">
            {/* initialVisible: cardul principal e deasupra pliului, cu imaginea LCP. */}
            <Reveal initialVisible>
              {/* Două coloane abia de la lg: la 768–1023px coloana de text rămânea la ~264px
                  pentru un titlu serif de 36px, iar imaginea panoramică era întinsă în portret. */}
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100 transition hover:shadow-lift lg:grid-cols-[1.1fr_1fr]"
              >
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className={`aspect-[16/10] h-full w-full object-cover lg:aspect-auto ${
                    featured.imageFocus === 'top' ? 'object-top' : ''
                  }`}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="flex flex-col justify-center card-pad-lg">
                  <p className="inline-flex w-fit items-center rounded-full border border-coral-100 bg-coral-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-coral-600 sm:px-3.5 sm:text-xs sm:tracking-[0.14em]">
                    {featured.category}
                  </p>
                  <h2 className="h-display mt-4 text-3xl transition group-hover:text-coral-700 lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">{featured.excerpt}</p>
                  <ArticleMeta date={featured.date} minutes={readingMinutes(featured)} className="mt-5" />
                  <span className="mt-6 inline-flex items-center gap-2 text-base font-bold text-plum-700 transition group-hover:gap-3 group-hover:text-coral-700">
                    Citește articolul <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Restul articolelor */}
      <section className="pb-16 pt-6 md:pb-24 lg:pt-8">
        <div className="container-site">
          <h2 className="sr-only">Toate articolele</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  to={`/blog/${a.slug}`}
                  className="group card-surface card-hover flex h-full flex-col overflow-hidden"
                >
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    className={`aspect-[16/10] w-full object-cover ${
                      a.imageFocus === 'top' ? 'object-top' : ''
                    }`}
                  />
                  <div className="flex flex-1 flex-col card-pad">
                    <p className="inline-flex w-fit items-center rounded-full border border-plum-100 bg-plum-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-plum-700 sm:text-xs sm:tracking-[0.14em]">
                      {a.category}
                    </p>
                    <h3 className="card-title mt-3.5 transition group-hover:text-coral-700">{a.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{a.excerpt}</p>
                    <ArticleMeta date={a.date} minutes={readingMinutes(a)} className="mt-auto pt-5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ai o întrebare care nu e în blog?"
        text="Scurtătura e telefonul: ne găsești de luni până vineri, între 10:00 și 20:00."
      />
    </>
  )
}
