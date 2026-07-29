import { HeartHandshake, Sparkles, Stethoscope } from 'lucide-react'
import { assistants, doctors } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import RatingBadge from '../components/RatingBadge'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/despre/DoctorCard'

const heroBadges = [
  { icon: Stethoscope, label: 'Medic cu recenzii pe nume' },
  { icon: HeartHandshake, label: 'Răbdare cu pacienții anxioși' },
]

export default function Echipa() {
  usePageMeta(
    'Echipa — ARdental proSmile, clinică dentară Arad',
    'Dr. Bogdan Lăbășan și echipa ARdental din Arad. Medicul pe care pacienții îl descriu drept calm, răbdător și „cu mâna ușoară”.',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Echipa</p>
            <h1 className="h-display mx-auto mt-3 max-w-3xl text-4xl md:text-[52px]">
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
            title="Medicul nostru"
            intro="Aproape fiecare recenzie a clinicii îl menționează pe nume — iar asta spune mai mult decât orice descriere am putea scrie noi."
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
                        alt={`${assistant.role} la clinica ARdental proSmile din Arad`}
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
              <blockquote className="quote-serif text-[22px] md:text-2xl">
                „Echipa ARdental este mai mult decât o echipă – este o familie care te primește
                cu grijă, profesionalism și blândețe. M-am simțit văzută, ascultată și
                sprijinită la fiecare pas.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-plum-900/70">
                — Bianca Gligor, recenzie Facebook
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl md:mt-16">
            <img
              src="/media/team/echipa-receptie.jpg"
              alt="Echipa ARdental întâmpinând o pacientă la recepția clinicii din Arad"
              loading="lazy"
              className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lift"
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
