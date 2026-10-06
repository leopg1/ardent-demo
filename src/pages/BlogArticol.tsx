import { Link, useParams } from 'react-router-dom'
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
import NotFound from './NotFound'

export default function BlogArticol() {
  const { slug } = useParams()
  const article = articleBySlug(slug)

  // Hooks înainte de return-ul condiționat: la slug greșit trimitem datele „goale”.
  // noindex se cere chiar de aici, nu doar din <NotFound>: efectele copilului rulează
  // ÎNAINTEA celor ale părintelui, deci fără el canonical-ul ar fi rescris peste cel de 404.
  usePageMeta(
    article?.metaTitle ?? 'Pagină negăsită — ARdental proSmile',
    article?.metaDescription,
    // Imaginea articolului ajunge și în og:image — altfel orice share arată coperta generică.
    article?.image,
    { noindex: !article },
  )
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

  // Slug inexistent = pagină inexistentă. Un redirect spre /blog ar fi răspuns 200 pe un URL
  // greșit, adică soft-404 indexabil; aici arătăm 404-ul real, marcat noindex mai sus.
  if (!article) return <NotFound />

  const related = article.related
    .map((s) => articleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <>
      {/* Antet articol */}
      <article>
        <header className="bg-plum-50" aria-label="Antetul articolului">
          <div className="container-site hero-pad">
            {/* initialVisible: antetul e deasupra pliului — fără el titlul pornea la opacity 0
                și apărea abia după hidratare. */}
            <Reveal initialVisible className="mx-auto max-w-3xl">
              <nav
                className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-plum-900/70"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="-mx-1 -my-2.5 inline-flex items-center px-1 py-2.5 transition hover:text-coral-700">Acasă</Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <Link to="/blog" className="-mx-1 -my-2.5 inline-flex items-center px-1 py-2.5 transition hover:text-coral-700">Blog</Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {/* Ultimul crumb e titlul, nu categoria: trebuie să coincidă cu BreadcrumbList-ul
                    de mai sus (categoria n-are pagină proprie, deci nici aria-current n-avea ce căuta
                    pe ea). Tonul /70 trece pragul de contrast AA, /50 nu-l trecea. */}
                <span aria-current="page" className="min-w-0 truncate text-plum-900/70">{article.title}</span>
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
              {/* initialVisible: e imaginea LCP — fetchPriority nu ajută la nimic dacă
                  imaginea stă la opacity 0 până la hidratare. */}
              <Reveal initialVisible>
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className={`aspect-[16/9] w-full rounded-3xl object-cover shadow-lift ${
                    article.imageFocus === 'top' ? 'object-top' : ''
                  }`}
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
                {/* Padding explicit, nu card-pad-lg: e singurul loc din site unde FaqItem
                    (care are deja px-6) stă într-o cutie cu padding propriu, iar la 320px
                    cele două straturi lăsau întrebării ~120px de text. */}
                <section aria-labelledby="articol-faq" className="rounded-3xl bg-plum-50 px-4 py-7 sm:px-7 md:p-9">
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
                    className="group card-surface card-hover flex h-full items-stretch gap-0 overflow-hidden max-lg:flex-col"
                  >
                    {/* Orizontal abia de la lg: la 768–1023px cardul e pe jumătate de lățime,
                        iar imaginea de 176px lăsa titlului ~108px — se rupea cuvânt cu cuvânt. */}
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      loading="lazy"
                      className={`aspect-[16/10] w-full object-cover lg:aspect-auto lg:w-44 lg:shrink-0 ${
                        a.imageFocus === 'top' ? 'object-top' : ''
                      }`}
                    />
                    <div className="card-pad">
                      <p className="inline-flex w-fit items-center rounded-full border border-plum-100 bg-plum-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-plum-700 sm:text-xs sm:tracking-[0.14em]">{a.category}</p>
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
