import { Baby, HeartHandshake, Sparkles, Stethoscope } from 'lucide-react'
import { assistants, doctors, reels, site, teamTestimonial } from '../lib/site'
import { BASE_URL, breadcrumbJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
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
    'Dr. Bogdan Lăbășan, Dr. Geanina Bindea și Dr. Petru Bodea — echipa ARdental Arad: implanturi, tratamente la microscop și stomatologie pentru copii.',
  )

  useJsonLd(
    breadcrumbJsonLd([
      { name: 'Acasă', path: '/' },
      { name: 'Echipa', path: '/echipa' },
    ]),
  )

  // Leagă numele medicilor de entitatea clinicii: fără asta, Google și motoarele
  // generative văd niște nume într-o pagină, nu echipa unui cabinet anume.
  // Doar câmpuri acoperite de date reale — specializările nu sunt încă toate confirmate.
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Medicii ${site.name}`,
    itemListElement: doctors.map((doctor, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: doctor.name,
        jobTitle: doctor.role,
        ...(doctor.photo ? { image: BASE_URL + doctor.photo } : {}),
        worksFor: { '@type': 'Dentist', name: site.name, url: BASE_URL },
      },
    })),
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          {/* Hero-ul e deasupra pliului: fără initialVisible pornea la opacity 0 și h1-ul
              (elementul LCP al paginii) apărea abia după hidratare. */}
          <Reveal initialVisible>
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
            intro="Dr. Lăbășan e medicul lăudat pe nume în aproape fiecare recenzie, Dr. Bindea transformă vizita celor mici într-o joacă, iar Dr. Bodea aduce precizia microscopului în tratamente."
          />
          {/* Trecerea la 3 coloane se face de la lg: pe laptopurile de 1024–1279px două
              coloane lăsau carduri uriașe, cu al treilea medic singur pe rândul doi. */}
          <div
            className={`mt-12 grid gap-6 md:mt-16 lg:gap-8 ${
              doctors.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : doctors.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'
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
          {/* Lățime limitată: două carduri lăsate pe toată lățimea ecranului cântăreau
              vizual mai mult decât grila medicilor de deasupra. */}
          <div
            className={`mx-auto mt-12 grid gap-6 md:mt-16 lg:gap-8 ${
              assistants.length > 1 ? 'max-w-4xl sm:grid-cols-2' : 'max-w-md'
            }`}
          >
            {assistants.map((assistant, i) => (
              <Reveal key={assistant.slug} delay={0.08 * i} className="h-full">
                <article className="card-surface flex h-full flex-col">
                  <div className="card-pad flex flex-1 flex-col">
                    <div className="flex items-center gap-4">
                      {/* Portret când există; altfel inițiala, ca să nu punem în locul
                          feței o fotografie care arată altceva sau pe altcineva. */}
                      <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-plum-100 ring-1 ring-plum-100">
                        {assistant.photo ? (
                          <img
                            src={assistant.photo}
                            alt=""
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="font-display text-2xl font-semibold text-plum-500"
                          >
                            {assistant.name.charAt(0)}
                          </span>
                        )}
                      </span>
                      <div className="min-w-0">
                        <h3 className="card-title">{assistant.name}</h3>
                        {assistant.role ? (
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                            {assistant.role}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-plum-900/70">{assistant.bio}</p>
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
              {/* Citit din site.ts, nu copiat: altfel o corectură a recenziei rămâne
                  doar într-un loc și același text apare diferit de la o pagină la alta. */}
              <blockquote className="quote-serif md:text-2xl">
                „{teamTestimonial.text}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-plum-900/70">
                — {teamTestimonial.author}, recenzie {teamTestimonial.source}
              </figcaption>
            </figure>
          </Reveal>
          {/* Trei ferestre spre aceeași echipă: recepția, dr. Bindea la tratament și
              clipul cu pregătirea sterilă + intervenția — cuvântul „echipă", arătat. */}
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3 md:mt-16 lg:gap-8">
            {/* object-top: sursa e verticală, iar un crop centrat ar tăia exact fețele. */}
            <img
              src="/media/team/echipa-receptie.jpg"
              alt="Echipa ARdental întâmpinând o pacientă la recepția clinicii din Arad"
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover object-top shadow-lift ring-1 ring-plum-100"
            />
            <ReelCard reel={reels.echipaLaLucru} />
            <img
              src="/media/team/dr-bindea-tratament.jpg"
              alt="Dr. Geanina Bindea în timpul unui tratament, în cabinetul ARdental"
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-lift ring-1 ring-plum-100"
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
