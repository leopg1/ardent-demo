import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, ChevronRight, Clock3, Phone } from 'lucide-react'
import {
  articleBySlug,
  formatArticleDate,
  readingMinutes,
} from '../lib/blog'
import { BASE_URL, breadcrumbJsonLd, faqJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
import { site } from '../lib/site'
import CTABand from '../components/CTABand'
import FaqItem from '../components/contact/FaqItem'
import Reveal from '../components/Reveal'
import RichParagraph from '../components/blog/RichParagraph'

export default function BlogArticol() {
  const { slug } = useParams()
  const article = articleBySlug(slug)

  // Hooks înainte de return-ul condiționat: la slug greșit trimitem datele „goale”.
  usePageMeta(article?.metaTitle ?? 'Articol negăsit', article?.metaDescription)
  useJsonLd(
    article
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.metaDescription,
          image: BASE_URL + article.image,
          datePublished: article.date,
          dateModified: article.date,
          inLanguage: 'ro',
          mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.name, url: BASE_URL },
        }
      : null,
  )
  useJsonLd(
    article
      ? breadcrumbJsonLd([
          { name: 'Acasă', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: article.title, path: `/blog/${article.slug}` },
        ])
      : null,
  )
  useJsonLd(article && article.faq.length > 0 ? faqJsonLd(article.faq) : null)

  if (!article) return <Navigate to="/blog" replace />

  const related = article.related
    .map((s) => articleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <>
      {/* Antet articol */}
      <article>
        <header className="bg-plum-50">
          <div className="container-site hero-pad">
            <Reveal className="mx-auto max-w-3xl">
              <nav
                className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-plum-900/70"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="-mx-1 -my-2.5 inline-flex items-center px-1 py-2.5 transition hover:text-coral-700">Acasă</Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <Link to="/blog" className="-mx-1 -my-2.5 inline-flex items-center px-1 py-2.5 transition hover:text-coral-700">Blog</Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span aria-current="page" className="text-plum-900/50">{article.category}</span>
              </nav>
              <p className="eyebrow mt-6">{article.category}</p>
              <h1 className="h1-page mt-3">{article.title}</h1>
              <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-semibold text-plum-900/70">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  {readingMinutes(article)} min de citit
                </span>
                <span>de echipa {site.name}</span>
              </p>
            </Reveal>
          </div>
        </header>

        {/* Corpul articolului */}
        <div className="section-pad">
          <div className="container-site">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lift"
                  loading="eager"
                  fetchPriority="high"
                />
              </Reveal>

              <Reveal className="mt-10">
                {article.intro.map((p, i) => (
                  <RichParagraph
                    key={i}
                    text={p}
                    className={`leading-relaxed text-plum-900/80 ${i === 0 ? 'text-lg font-medium text-plum-900' : 'mt-5 text-base'}`}
                  />
                ))}
              </Reveal>

              {article.sections.map((s) => (
                <Reveal key={s.heading} className="mt-12">
                  <section>
                    <h2 className="h-display text-3xl">{s.heading}</h2>
                    {s.paragraphs.map((p, i) => (
                      <RichParagraph key={i} text={p} className="mt-5 text-base leading-relaxed text-plum-900/80" />
                    ))}
                    {s.list && (
                      <ul className="mt-5 space-y-2.5">
                        {s.list.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-plum-900/80">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}

              {/* Întrebări frecvente */}
              <Reveal className="mt-14">
                <section aria-labelledby="articol-faq" className="rounded-3xl bg-plum-50 card-pad-lg">
                  <h2 id="articol-faq" className="h-display text-3xl">Întrebări pe scurt</h2>
                  <div className="mt-7 space-y-4">
                    {article.faq.map((f) => (
                      <FaqItem key={f.q} question={f.q}>
                        {f.a}
                      </FaqItem>
                    ))}
                  </div>
                </section>
              </Reveal>

              {/* CTA în text */}
              <Reveal className="mt-12">
                <div className="rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg text-center shadow-soft ring-1 ring-plum-100">
                  <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-plum-900">
                    {article.ctaText}
                  </p>
                  <div className="cta-row mt-7 justify-center">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                    </a>
                    <Link to="/contact#formular" className="btn-secondary">
                      Cere o programare online
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      {/* Articole înrudite */}
      {related.length > 0 && (
        <section className="section-pad bg-plum-50" aria-labelledby="articole-inrudite">
          <div className="container-site">
            <h2 id="articole-inrudite" className="h-display text-3xl md:text-4xl">Citește și</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.08} className="h-full">
                  <Link
                    to={`/blog/${a.slug}`}
                    className="group card-surface card-hover flex h-full items-stretch gap-0 overflow-hidden max-sm:flex-col"
                  >
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover sm:w-44 sm:shrink-0 sm:aspect-auto"
                    />
                    <div className="card-pad">
                      <p className="inline-flex w-fit items-center rounded-full border border-plum-100 bg-plum-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-plum-700">{a.category}</p>
                      <h3 className="card-title mt-3.5 transition group-hover:text-coral-700">{a.title}</h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-plum-700 transition group-hover:gap-2.5 group-hover:text-coral-700">
                        Citește <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Un articol bun nu înlocuiește un consult"
        text="Dacă ceva din ce ai citit ți se potrivește, hai să ne uităm împreună. Consultația lămurește în 30 de minute ce internetul nu poate."
      />
    </>
  )
}
