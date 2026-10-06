import { ExternalLink } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { ratingValue, reels, site, testimonials } from '../lib/site'
import CTABand from '../components/CTABand'
import ReelCard from '../components/ReelCard'
import Reveal from '../components/Reveal'
import Stars from '../components/Stars'

export default function Testimoniale() {
  usePageMeta(
    'Testimoniale — Recenzii pacienți ARdental proSmile Arad',
    `Ce spun pacienții despre ARdental: ${site.rating} din 5 stele, din ${site.reviewCount} de recenzii pe Google. Păreri reale despre medicii și echipa clinicii dentare din Arad.`,
  )

  return (
    <>
      {/* Hero cu rating mare */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          {/* Hero-ul e deasupra pliului și conține h1-ul (element LCP) — fără
              initialVisible pornea la opacity 0 până după hidratare. */}
          <Reveal initialVisible>
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
              Iată câteva dintre ele — recenzii reale despre medicii și echipa clinicii, unele
              dintre ele menționând medicul pe nume. Originalele pot fi verificate oricând pe
              fișa Google și pe pagina de Facebook a clinicii.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grilă masonry cu recenzii */}
      <section className="section-pad">
        <div className="container-site">
          <h2 className="sr-only">Recenziile pacienților</h2>
          <div className="-mb-6 columns-1 gap-6 md:columns-2 lg:-mb-8 lg:columns-3 lg:gap-8">
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
                    {/* Stele pur ornamentale: recenziile nu au notă individuală, deci
                        nu trebuie anunțate ca „5 din 5” de cititoarele de ecran. */}
                    <span aria-hidden="true" className="flex">
                      <Stars />
                    </span>
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

      {/* Un moment filmat, nu doar cuvinte — gluma cu plăcuțele ține de aceeași
          poveste ca recenziile de mai sus: cum se simte un pacient aici. */}
      <section className="section-pad pt-0">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[240px_1fr]">
              {/* Pe mobil textul explică întâi momentul; pe lat, clipul rămâne în stânga.
                  Între 640 și 767px grila e încă pe o coloană, iar un clip 9:16 nelimitat
                  ar ocupa peste un ecran întreg — de aceea plafonul de lățime. */}
              <ReelCard
                reel={reels.surprizaPacientilor}
                className="mx-auto w-full sm:max-w-[260px] md:max-w-none md:order-first max-md:order-last"
              />
              <div>
                <p className="eyebrow !text-teal-700">Nu doar în scris</p>
                <h2 className="h-display mt-3 text-3xl md:text-4xl">
                  Recenziile vin din momente ca acesta
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
                  O pacientă, o veste bună anunțată cu plăcuțe scrise de mână și un cabinet în
                  care se râde. Genul de moment care nu încape într-o recenzie — dar care
                  explică de ce recenziile arată așa cum arată.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA recenzie Google + nota de normalizare */}
      <section className="section-pad pt-0">
        <div className="container-site">
          <Reveal>
            <div className="band-pad relative overflow-hidden border border-plum-100 bg-plum-50 text-center">
              <div className="relative">
                {/* Decor pentru bandă, nu o evaluare — ascuns de tehnologiile asistive. */}
                <span aria-hidden="true" className="flex justify-center">
                  <Stars starClassName="h-5 w-5" />
                </span>
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
                  className="btn-primary mt-8 w-full sm:w-auto"
                >
                  {/* sr-only în același element cu textul: ca element separat ar fi
                      devenit un al treilea „flex item” și ar fi rupt gap-ul butonului. */}
                  <span>
                    Scrie o recenzie<span className="sr-only"> (se deschide în filă nouă)</span>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Notă normalizare diacritice */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-plum-900/70">
            Citatele sunt preluate din recenziile publice Google ale clinicii și din postările publice de
            pe pagina ei de Facebook; diacriticele și punctuația au fost ușor normalizate pentru afișarea
            pe site, iar „…” marchează trunchierile din original. Sensul recenziilor este neatins, iar
            originalele pot fi consultate pe fișa Google, respectiv pe pagina de Facebook a clinicii{' '}
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
