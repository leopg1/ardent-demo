import { Baby, HeartHandshake, Sparkles, Stethoscope } from 'lucide-react'
import { assistants, doctors, reels } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import ReelCard from '../components/ReelCard'
import RatingBadge from '../components/RatingBadge'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/despre/DoctorCard'

const heroBadges = [
  { icon: Stethoscope, label: 'Medici cu recenzii pe nume' },
  { icon: HeartHandshake, label: 'Răbdare cu pacienții anxioși' },
  { icon: Baby, label: 'Prietenoși cu copiii' },
]

export default function Echipa() {
  usePageMeta(
    'Echipa — ARdental proSmile, clinică dentară Arad',
    'Dr. Bogdan Lăbășan, Dr. Geanina Bindea și echipa ARdental din Arad — de la reabilitări complexe până la stomatologie pentru copii.',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Echipa</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">
              Echipa ARdental
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              O echipă mică, în care știi de fiecare dată cine te tratează.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-2 text-xs font-bold text-plum-800 shadow-soft"
                >
                  <badge.icon className="h-4 w-4 text-coral-600" aria-hidden="true" />
                  {badge.label}
                </li>
              ))}
              <li className="inline-flex items-center rounded-full border border-plum-100 bg-white px-4 py-2 shadow-soft">
                <RatingBadge variant="star" className="!text-xs !font-bold" />
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Medicii */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            align="left"
            eyebrow="Cine te tratează"
            title="Medicii noștri"
            intro="Dr. Lăbășan e medicul pe care pacienții îl laudă pe nume în aproape fiecare recenzie, iar pentru cei mici, Dr. Bindea transformă vizita la dentist într-o joacă."
          />
          <div
            className={`mt-12 grid gap-6 md:mt-16 lg:gap-8 ${
              doctors.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'
            }`}
          >
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Echipa de sprijin */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sprijin la fiecare pas"
            title="Echipa din jurul cabinetului"
            intro="Ele răspund la telefon, pregătesc cabinetele și au grijă să nu aștepți mai mult decât trebuie."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:gap-8">
            {assistants.map((assistant, i) => (
              <Reveal key={assistant.slug} delay={0.08 * i} className="h-full">
                <article className="card-surface flex h-full flex-col transition hover:border-plum-200">
                  <div className="card-pad flex flex-1 flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum-100 ring-1 ring-plum-100">
                      <img
                        src={assistant.photo}
                        alt={`${assistant.name} — ${assistant.role.toLowerCase()}, la clinica ARdental proSmile din Arad`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="card-title mt-5">{assistant.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                      {assistant.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-plum-900/70">{assistant.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ce spun pacienții despre echipă */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coral-50 text-coral-600">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="h-display mt-6 text-3xl md:text-4xl">
              „Mai mult decât o echipă”
            </h2>
            <figure className="mt-7">
              <blockquote className="quote-serif md:text-2xl">
                „Echipa ARdental este mai mult decât o echipă – este o familie care te primește
                cu grijă, profesionalism și blândețe. M-am simțit văzută, ascultată și
                sprijinită la fiecare pas.”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-plum-900/70">
                — Bianca Gligor, recenzie Facebook
              </figcaption>
            </figure>
          </Reveal>
          {/* Trei ferestre spre aceeași echipă: recepția, dr. Bindea la tratament și
              clipul cu pregătirea sterilă + intervenția — cuvântul „echipă", arătat. */}
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3 md:mt-16 lg:gap-8">
            <img
              src="/media/team/echipa-receptie.jpg"
              alt="Echipa ARdental întâmpinând o pacientă la recepția clinicii din Arad"
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-lift"
            />
            <ReelCard reel={reels.echipaLaLucru} />
            <img
              src="/media/team/dr-bindea-tratament.jpg"
              alt="Dr. Geanina Bindea în timpul unui tratament, în cabinetul ARdental"
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Vino să ne cunoști personal"
        text="Programează o consultație. Te întâmpinăm cu explicații clare, cu răbdare și cu un plan de tratament construit pentru tine."
      />
    </>
  )
}
