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
            description="La prima consultație, dinții erau uzați și îngălbeniți, cu obturații vechi închise la culoare și cu carii pe frontali. Am refăcut arcada cu o lucrare din metalo-ceramică, care respectă forma și proporțiile naturale."
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
                  describedById="hint-caz-01"
                />
                <p id="hint-caz-01" className="mt-2.5 text-xs text-plum-900/70">
                  Trage de cursor — sau folosește săgețile de pe tastatură — ca să compari.
                </p>
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
              // Două coloane doar când fiecare fotografie rămâne destul de mare cât să se
              // vadă detaliul clinic: sub 480px și în intervalul lg (unde cardul se împarte
              // deja în două coloane și ar lăsa doar ~216px per poză) se stivuiesc.
              <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-1 xl:grid-cols-2">
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
                      decoding="async"
                      // Dimensiunile reale ale fișierului: fără ele colajul nu rezervă
                      // spațiu și pagina sare la încărcarea pozelor.
                      width={1600}
                      height={1200}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs ${im.labelClass}`}
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
            description="Margini inegale, mici ciobituri și nuanțe diferite de la un dinte la altul. Fațetele au uniformizat forma și culoarea fără să transforme zâmbetul în unul „de catalog”."
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
                  describedById="hint-caz-03"
                />
                <p id="hint-caz-03" className="mt-2.5 text-xs text-plum-900/70">
                  Trage de cursor — sau folosește săgețile de pe tastatură — ca să compari.
                </p>
              </div>
            }
          />
        </div>
      </section>

      {/* Dovada socială — recenzii reale */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Ce spun pacienții</p>
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
            {/* Carduri doar-text, ca pe /testimoniale: fotografiile de dinainte erau poze
                generice din clinică, iar structura figure/figcaption le prezenta drept
                portretele celor doi pacienți care semnează recenziile. */}
            <Reveal className="h-full">
              <figure className="card-surface card-pad-lg relative h-full">
                <span
                  className="pointer-events-none absolute right-6 top-2 select-none font-display text-7xl leading-none text-plum-100"
                  aria-hidden="true"
                >
                  „
                </span>
                <blockquote className="quote-serif relative">
                  „Mi-am pus dinții la punct și… surpriză: NU mi-am pierdut nici capul, nici
                  portofelul, nici nervii!”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-plum-100 pt-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum-100 font-display text-lg font-semibold text-plum-700"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-plum-950">Alexandru Frincu</span>
                    <span className="block text-xs font-medium text-plum-900/70">
                      Recenzie Google
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <figure className="card-surface card-pad-lg relative h-full">
                <span
                  className="pointer-events-none absolute right-6 top-2 select-none font-display text-7xl leading-none text-plum-100"
                  aria-hidden="true"
                >
                  „
                </span>
                <blockquote className="quote-serif relative">
                  „Am găsit acolo oameni care știu să vindece nu doar dinții, ci și fricile.”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-plum-100 pt-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum-100 font-display text-lg font-semibold text-plum-700"
                    aria-hidden="true"
                  >
                    B
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-plum-950">Bianca Gligor</span>
                    <span className="block text-xs font-medium text-plum-900/70">
                      Recenzie Facebook
                    </span>
                  </span>
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
