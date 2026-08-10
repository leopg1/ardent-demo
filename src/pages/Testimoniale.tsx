import { ExternalLink } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { ratingValue, site, testimonials } from '../lib/site'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import Stars from '../components/Stars'

export default function Testimoniale() {
  usePageMeta(
    'Testimoniale — Recenzii pacienți ARdental proSmile Arad',
    `Ce spun pacienții despre ARdental: ${site.rating} din 5 stele, din ${site.reviewCount} de recenzii pe Google. Păreri reale despre medicul clinicii dentare din Arad.`,
  )

  return (
    <>
      {/* Hero cu rating mare */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow">Testimoniale</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">
              Ce spun pacienții despre noi
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
              <p className="font-display text-8xl font-semibold leading-none text-plum-950 md:text-9xl">
                {site.rating}
              </p>
              <div className="flex flex-col items-center gap-2.5 sm:items-start">
                <Stars value={ratingValue} starClassName="h-6 w-6" />
                <p className="text-base font-semibold text-plum-900/70">
                  din {site.reviewCount} de recenzii pe Google
                </p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Iată câteva dintre ele — recenzii reale, în care medicul nostru este lăudat pe nume,
              una după alta. Originalele pot fi verificate oricând pe fișa Google a clinicii.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grilă masonry cu recenzii */}
      <section className="section-pad">
        <div className="container-site">
          <h2 className="sr-only">Recenziile pacienților</h2>
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 lg:gap-8">
            {testimonials.map((t, i) => {
              /* Două carduri cu gradient cald — puncte de ancorare vizuală în grilă. */
              const accent = i === 1 || i === 6
              return (
                <Reveal key={`${t.author}-${i}`} delay={Math.min(i * 0.05, 0.25)} className="mb-6 break-inside-avoid lg:mb-8">
                  <figure
                    className={`relative card-pad rounded-3xl ${
                      accent
                        ? 'bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100'
                        : 'card-surface'
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute right-6 top-2 select-none font-display text-7xl leading-none ${
                        accent ? 'text-plum-200/70' : 'text-plum-100'
                      }`}
                      aria-hidden="true"
                    >
                      „
                    </span>
                    <Stars />
                    <blockquote className="relative mt-4 text-base leading-relaxed text-plum-900/80">
                      „{t.text}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-plum-100 pt-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-semibold text-plum-700 ${
                          accent ? 'bg-white shadow-soft' : 'bg-plum-100'
                        }`}
                        aria-hidden="true"
                      >
                        {t.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-plum-950">{t.author}</span>
                        <span className="block text-xs font-medium text-plum-900/70">
                          Recenzie {t.source}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA recenzie Google + nota de normalizare */}
      <section className="section-pad pt-0">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-plum-100 bg-plum-50 px-6 py-12 text-center md:py-16">
              <div className="relative">
                <Stars starClassName="h-5 w-5" className="justify-center" />
                <h2 className="h-display mx-auto mt-5 max-w-2xl text-3xl md:text-4xl">
                  Lasă-ne și tu o recenzie pe Google
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-plum-900/70">
                  Părerea ta contează enorm pentru noi — și ajută alți pacienți din Arad să ne găsească mai
                  ușor.
                </p>
                <a
                  href={site.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  Scrie o recenzie pe Google
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Notă normalizare diacritice */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-plum-900/70">
            Citatele sunt preluate din recenziile publice Google ale clinicii; diacriticele și punctuația au
            fost ușor normalizate pentru afișarea pe site, iar „…” marchează trunchierile din Google. Sensul
            recenziilor este neatins, iar originalele pot fi consultate integral pe fișa Google a clinicii{' '}
            {site.name}.
          </p>
        </div>
      </section>

      <CTABand
        title="Pacienții din recenzii au început exact ca tine"
        text="Cu un telefon. Sună-ne sau lasă-ne o cerere de programare."
      />
    </>
  )
}
