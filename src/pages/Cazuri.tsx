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
    'Transformări reale din clinica ARdental Arad: reabilitare orală completă, coroane și fațete. Vezi comparația înainte/după.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Cazuri — Înainte / După</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-[52px]">
              Rezultate reale, pacienți reali
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
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
            chip="Reabilitare orală"
            title="De la dinți uzați la o dantură refăcută complet"
            description="Pacientul a venit cu dinți uzați, îngălbeniți, cu obturații vechi închise la culoare și margini neregulate. Am refăcut complet zona vizibilă, cu o lucrare care respectă forma și proporțiile naturale. Trage de mâner ca să compari cele două momente."
            to="/servicii/implantologie"
            linkLabel="Despre implantologie și protetică"
            media={
              <div>
                <BeforeAfter
                  beforeSrc="/media/cases/ba-inainte.jpg"
                  afterSrc="/media/cases/ba-dupa.jpg"
                  ratioClass="aspect-[7/4]"
                  alt="reabilitare orală completă la ARdental Arad"
                  className="shadow-soft"
                />
                <p className="mt-2.5 text-xs text-plum-900/70">Trage de mâner ca să compari.</p>
              </div>
            }
          />

          <CaseCard
            number="02"
            chip="Estetică dentară"
            title="Cele două momente, față în față"
            description="Aceeași încadratură, același pacient. Sus, situația de la prima consultație. Jos, rezultatul final. Am ales forma și nuanța împreună cu pacientul, înainte să începem lucrarea — pentru ca zâmbetul să pară al lui, nu unul „pus”."
            to="/servicii/estetica-dentara"
            linkLabel="Despre fațete și estetică dentară"
            reverse
            media={
              <img
                src="/media/cases/inainte-dupa-cu-brand.jpg"
                alt="Caz ARdental înainte și după: dinți uzați și pătați, apoi dantură refăcută, albă și aliniată"
                className="w-full rounded-3xl object-cover shadow-lift"
                loading="lazy"
              />
            }
          />
        </div>
      </section>

      {/* Dovada socială — recenzii reale */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Ce urmează după tratament</p>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Rezultatul care contează cel mai mult
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-plum-900/70">
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
      <section className="section-pad">
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
