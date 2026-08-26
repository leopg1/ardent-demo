import { ShieldCheck } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import BeforeAfter from '../components/BeforeAfter'
import CTABand from '../components/CTABand'
import RatingBadge from '../components/RatingBadge'
import Reveal from '../components/Reveal'
import CaseCard from '../components/cazuri/CaseCard'

export default function Cazuri() {
  usePageMeta(
    'Înainte și după — Cazuri ARdental proSmile Arad',
    'Transformări reale din clinica ARdental Arad: reabilitări complete cu metalo-ceramică și fațete dentare. Vezi comparațiile înainte/după.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Cazuri — Înainte / După</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">
              Rezultate reale, pacienți reali
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Fiecare zâmbet de mai jos are o poveste: dinți deteriorați, uzați sau obosiți de
              vreme — refăcuți cu lucrări protetice, coroane sau fațete. Cazurile sunt
              realizate în clinica noastră și publicate cu acordul pacienților.
            </p>
            <p className="mx-auto mt-7 inline-flex items-center rounded-full border border-plum-100 bg-white px-5 py-2.5 shadow-soft">
              <RatingBadge variant="star" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cazul 01 — before/after real */}
      <section className="section-pad">
        <div className="container-site space-y-20 md:space-y-28">
          <CaseCard
            number="01"
            chip="Reabilitare totală · Metalo-ceramică"
            title="De la dinți uzați la o dantură refăcută complet"
            description="La prima consultație, dinții erau uzați și îngălbeniți, cu obturații vechi închise la culoare și cu carii pe frontali. Am refăcut arcada cu o lucrare din metalo-ceramică, care respectă forma și proporțiile naturale. Trage de mâner ca să compari cele două momente."
            to="/servicii/coroane-zirconiu"
            linkLabel="Despre coroane și lucrări protetice"
            media={
              <div>
                <BeforeAfter
                  beforeSrc="/media/cases/caz-01-inainte.jpg"
                  afterSrc="/media/cases/caz-01-dupa.jpg"
                  ratioClass="aspect-[7/4]"
                  alt="reabilitare totală cu lucrare din metalo-ceramică la ARdental Arad"
                  className="shadow-soft"
                />
                <p className="mt-2.5 text-xs text-plum-900/70">Trage de mâner ca să compari.</p>
              </div>
            }
          />

          <CaseCard
            number="02"
            chip="Reabilitare totală · Metalo-ceramică"
            title="Când mai rămân doar rădăcinile, tot se poate"
            description="La prima consultație, dinții frontali erau distruși — reduși la bonturi și rădăcini. Am pregătit terenul, apoi am refăcut arcada cu o lucrare din metalo-ceramică. Cele două fotografii sunt făcute din unghiuri diferite: prima la consultație, a doua după cimentarea lucrării."
            to="/servicii/coroane-zirconiu"
            linkLabel="Despre coroane și lucrări protetice"
            reverse
            media={
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    src: '/media/cases/caz-02-inainte.jpg',
                    label: 'Înainte',
                    labelClass: 'bg-plum-950/70',
                    alt: 'Înainte de tratament: dinți frontali distruși, reduși la bonturi cu pivoți metalici',
                  },
                  {
                    src: '/media/cases/caz-02-dupa.jpg',
                    label: 'După',
                    labelClass: 'bg-coral-600/90',
                    alt: 'După tratament: arcadă refăcută cu o lucrare din metalo-ceramică, albă și uniformă',
                  },
                ].map((im) => (
                  <figure key={im.src} className="relative overflow-hidden rounded-3xl shadow-soft">
                    <img
                      src={im.src}
                      alt={im.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption
                      className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur ${im.labelClass}`}
                    >
                      {im.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            }
          />

          <CaseCard
            number="03"
            chip="Fațete · Estetică dentară"
            title="Fațete: corecții mici, efect mare"
            description="Margini inegale, mici ciobituri și nuanțe diferite de la un dinte la altul. Fațetele au uniformizat forma și culoarea fără să transforme zâmbetul în unul „de catalog” — compară cele două momente cu mânerul."
            to="/servicii/estetica-dentara"
            linkLabel="Despre fațete și estetică dentară"
            media={
              <div>
                <BeforeAfter
                  beforeSrc="/media/cases/fatete-inainte.jpg"
                  afterSrc="/media/cases/fatete-dupa-slider.jpg"
                  ratioClass="aspect-[7/4]"
                  alt="fațete dentare la ARdental Arad — aceeași pacientă, înainte și după"
                  className="shadow-soft"
                />
                <p className="mt-2.5 text-xs text-plum-900/70">Trage de mâner ca să compari.</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Dovada socială — recenzii reale */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Ce urmează după tratament</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">
              Rezultatul care contează cel mai mult
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-plum-900/75">
              Pentru noi, cele mai importante sunt experiențele pacienților. Un zâmbet
              recăpătat, o frică lăsată în urmă și un pacient care pleacă mai încrezător decât
              a venit sunt motivele pentru care iubim această profesie.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            <Reveal>
              <figure className="card-surface overflow-hidden">
                <img
                  src="/media/services/zambet-lateral.jpg"
                  alt="Prim-plan cu un zâmbet sănătos, după tratament la ARdental"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="card-pad">
                  <blockquote className="quote-serif">
                    „Mi-am pus dinții la punct și… surpriză: NU mi-am pierdut nici capul, nici
                    portofelul, nici nervii!”
                  </blockquote>
                  <p className="mt-3 text-xs font-semibold text-plum-900/70">
                    — Alexandru Frincu, recenzie Google
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="card-surface overflow-hidden">
                <img
                  src="/media/services/zambet-prim-plan.jpg"
                  alt="Zâmbet luminos, prim-plan, după tratament la clinica ARdental din Arad"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="card-pad">
                  <blockquote className="quote-serif">
                    „Am găsit acolo oameni care știu să vindece nu doar dinții, ci și fricile.”
                  </blockquote>
                  <p className="mt-3 text-xs font-semibold text-plum-900/70">
                    — Bianca Gligor, recenzie Facebook
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 md:py-14">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto flex max-w-3xl items-start gap-3.5 rounded-3xl border border-plum-100 bg-plum-50 px-6 py-5 sm:items-center">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500 sm:mt-0" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-plum-900/70">
                Rezultatele variază de la pacient la pacient. Fotografiile prezintă cazuri
                tratate în clinica noastră, publicate cu acordul pacienților.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Fiecare caz de mai sus a început la fel: cu un telefon"
        text="Al tău poate începe azi. Programează o consultație și vezi ce e posibil."
      />
    </>
  )
}
