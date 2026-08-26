import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CreditCard,
  MessagesSquare,
  Phone,
  Sparkles,
  ShieldCheck,
  Star,
  Stethoscope,
  ThumbsUp,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { reels, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import ReelCard from '../components/ReelCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Principle = { icon: LucideIcon; title: string; text: string }

const principles: Principle[] = [
  {
    icon: MessagesSquare,
    title: 'Întâi înțelegem, apoi tratăm.',
    text: 'Totul începe cu o consultație atentă și un plan personalizat. Vei ști întotdeauna ce facem, de ce și cât costă — înainte să începem.',
  },
  {
    icon: Stethoscope,
    title: 'Fără grabă și fără durere.',
    text: 'Lucrăm cu anestezie modernă și ne oprim ori de câte ori ai nevoie de o pauză. Este lucrul pe care pacienții îl remarcă cel mai des în recenzii.',
  },
  {
    icon: Sparkles,
    title: 'De la prevenție la reabilitare completă.',
    text: 'Igienizare, tratamente de canal, implanturi, fațete, coroane. Nu te trimitem în altă parte pentru etapa următoare.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterilizare fără compromis.',
    text: 'Curățare, dezinfectare, sterilizare — pentru fiecare instrument, conform standardelor medicale actuale. Siguranța pacienților este o prioritate la fiecare etapă.',
  },
  {
    icon: Wallet,
    title: 'Tratament de calitate, fără stres financiar.',
    text: 'Credem că fiecare pacient ar trebui să aibă acces la tratamente bune. De aceea oferim plata în rate flexibile, prin TBI Bank și Banca Transilvania.',
  },
]

const consultSteps = [
  {
    title: 'Ne cunoaștem, fără grabă',
    text: 'Discutăm ce te aduce la noi și îți examinăm amănunțit dinții și gingiile — nu doar dintele care te supără.',
  },
  {
    title: 'Vedem exact situația',
    text: 'Facem radiografia acolo unde e nevoie, ca să știm sigur ce se întâmplă sub suprafață.',
  },
  {
    title: 'Pleci cu planul complet',
    text: 'Îți explicăm opțiunile fără termeni complicați și stabilim împreună etapele, în ordinea urgenței, cu costurile puse pe masă.',
  },
]

const recognition = [
  {
    icon: Star,
    iconClass: 'bg-gold-400/15 text-gold-500',
    value: `${site.rating}/5`,
    text: `din peste ${site.reviewCount} de recenzii pe Google, majoritatea cu medicul menționat pe nume.`,
  },
  {
    icon: ThumbsUp,
    iconClass: 'bg-coral-50 text-coral-600',
    value: '100%',
    text: 'dintre pacienții care ne-au evaluat pe Facebook ne recomandă mai departe.',
  },
  {
    icon: CreditCard,
    iconClass: 'bg-teal-50 text-teal-600',
    value: 'Plata în rate',
    text: 'Parteneri TBI Bank și Banca Transilvania, pentru tratamentele ample.',
  },
]

const gallery = [
  {
    src: '/media/clinic/logo-verde.jpg',
    alt: 'Logo-ul ARdental proSmile din mușchi verde stabilizat, pe peretele clinicii',
  },
  {
    src: '/media/clinic/receptie.jpg',
    alt: 'Recepția clinicii ARdental din Arad, cu canapea și ferestre mari',
  },
  {
    src: '/media/clinic/cabinet-tratament.jpg',
    alt: 'Cabinet de tratament ARdental, cu unit stomatologic modern',
  },
  {
    src: '/media/clinic/tratament-precizie.jpg',
    alt: 'Tratament în desfășurare la ARdental, cu lupe de mărire',
  },
  {
    src: '/media/clinic/sterilizare.jpg',
    alt: 'Instrumentar dentar pregătit și dezinfectat în cabinetul ARdental',
  },
  {
    src: '/media/clinic/echipa-interventie.jpg',
    alt: 'Doi medici ARdental lucrând împreună la un tratament, în patru mâini',
  },
]

export default function Despre() {
  usePageMeta(
    'Despre noi — ARdental proSmile, clinică dentară în Arad',
    'Clinică dentară pe Calea Aurel Vlaicu, în Arad. 4,9★ pe Google, tratamente fără durere, plata în rate. Află cum lucrăm.',
  )

  return (
    <>
      {/* Hero: text + imagine clinică */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Despre noi</p>
            <h1 className="h1-page mt-3">Despre ARdental proSmile</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum-900/75">
              ARdental este o clinică dentară din Arad, de pe Calea Aurel Vlaicu, construită
              în jurul unei idei simple: „{site.slogan}”. Un cabinet stomatologic poate fi un
              loc în care intri liniștit, nu unul pe care îl amâni ani la rând.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/70">
              Acoperim toată paleta, de la igienizare profesională și tratamente de bază, până
              la implanturi, fațete și reabilitări orale complexe. Fiecare pacient primește toată
              atenția și un plan de tratament adaptat nevoilor sale — iar recenziile de pe
              Google sunt, până acum, cea mai bună dovadă că lucrurile funcționează așa cum
              ne-am propus.
            </p>
            <div className="cta-row mt-8">
              <Link to="/echipa" className="btn-primary max-sm:w-full">
                Cunoaște echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary max-sm:w-full">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <img
              src="/media/clinic/receptie.jpg"
              alt="Recepția clinicii ARdental din Arad — spațiu luminos, cu ferestre mari"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              loading="eager"
            />
            <div className="card-surface absolute -bottom-5 left-5 hidden items-center gap-3 px-5 py-3.5 sm:flex">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/15 text-gold-500"
                aria-hidden="true"
              >
                <Star className="h-4.5 w-4.5 fill-current" />
              </span>
              <p className="text-sm font-bold text-plum-950">
                {site.rating}/5 · {site.reviewCount} de recenzii Google
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cum lucrăm: imagine + 5 principii */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal className="order-last lg:order-first">
            <img
              src="/media/clinic/tratament-precizie.jpg"
              alt="Medic și asistentă lucrând împreună la un tratament, în cabinetul ARdental"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Principiile noastre"
              title="Cum lucrăm"
              intro="Cinci lucruri pe care le respectăm la fiecare tratament, de la prima consultație până la ultimul control."
            />
            <ul className="mt-8 space-y-7">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                      <p.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-plum-950">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-plum-900/70">{p.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prima vizită */}
      <section className="section-pad">
        <div className="container-site">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
            <div className="band-pad grid items-center gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20">
              {/* Clipul povestește exact pașii de alături: întâmpinarea, consultația,
                  plecarea cu zâmbetul — de aceea stă lângă listă, nu într-o galerie. */}
              {/* Pe mobil pașii scriși vin întâi; pe lat, clipul stă în stânga listei. */}
              <Reveal className="mx-auto w-full max-w-[340px] lg:order-first max-lg:order-last">
                <ReelCard reel={reels.turulClinicii} />
              </Reveal>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Prima vizită"
                  title="Consultația la ARdental"
                  intro="Fără grabă și fără termeni complicați. Iată la ce să te aștepți când vii prima dată:"
                />
                <ol className="mt-8 space-y-6">
                  {consultSteps.map((step, i) => (
                    <Reveal key={step.title} delay={0.08 * i}>
                      <li className="flex items-start gap-4">
                        <span
                          className="font-display inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-plum-200 bg-white text-xl font-semibold text-teal-600"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-plum-950">{step.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-plum-900/70">{step.text}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={0.25}>
                  <div className="cta-row mt-10">
                    <a href={site.phoneHref} className="btn-primary max-sm:w-full">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
                    </a>
                    <Link to="/contact#formular" className="btn-secondary max-sm:w-full">
                      Cere o programare online
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recunoaștere */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Dovezi, nu promisiuni"
            title="Ce spun cifrele"
            intro="Nu ne lăudăm singuri — o fac pacienții care ne-au trecut pragul și au lăsat o recenzie."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
            {recognition.map((item, i) => (
              <Reveal key={item.value} delay={0.08 * i} className="h-full">
                <div className="card-surface card-pad-lg flex h-full flex-col items-center text-center transition hover:border-plum-200">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${item.iconClass}`}
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="h-display mt-5 text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-plum-900/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie clinică */}
            {/* Tehnologia din cabinet — noua achiziție + echipamentele digitale */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-20">
            {/* Clipul cu montarea microscopului — momentul, nu doar produsul */}
            <Reveal className="mx-auto w-full max-w-[300px] max-lg:order-last">
              <ReelCard reel={reels.nouaAchizitie} />
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Tehnologie"
                title="Investim în lucruri care se văd în tratament"
                intro="Cea mai nouă achiziție a clinicii este un microscop dentar — l-am montat chiar noi, cu emoții (clipul e alături). Lângă el, fluxul digital: scanare 3D în loc de amprentă cu pastă și modele printate direct în clinică."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:gap-8">
                {[
                  {
                    src: '/media/clinic/microscop-acuvision.jpg',
                    alt: 'Medic ARdental privind prin microscopul dentar Acuvision X',
                    title: 'Microscop dentar',
                    text: 'Detaliile invizibile cu ochiul liber devin vizibile — și controlabile.',
                  },
                  {
                    src: '/media/clinic/scanner-intraoral.jpg',
                    alt: 'Scanner intraoral 3D cu modelul dentar afișat pe laptop, în clinica ARdental',
                    title: 'Amprentă digitală',
                    text: 'Scanăm dinții cu o cameră 3D — fără lingura cu pastă care îți taie respirația.',
                  },
                  {
                    src: '/media/clinic/imprimanta-3d.jpg',
                    alt: 'Imprimantă 3D cu rășină și stația de polimerizare, în laboratorul clinicii',
                    title: 'Imprimantă 3D',
                    text: 'Modelele dentare se printează în clinică, direct după scanare.',
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.07 * i} className="h-full">
                    <figure className="card-surface flex h-full flex-col overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="flex-1 p-5">
                        <h3 className="text-base font-bold text-plum-950">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-plum-900/70">{item.text}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="section-pad bg-plum-50">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Clinica noastră"
              title="Un loc în care vii cu drag, nu cu teamă"
              intro="Spații luminoase, echipamente moderne și protocoale de sterilizare respectate la literă. Așa arată ARdental pe dinăuntru."
            />
            <Reveal delay={0.15}>
              <Link to="/contact" className="btn-secondary mt-8">
                Vino să ne vizitezi <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {gallery.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ne-ai citit povestea. Scrie-o și pe a ta."
        text="O programare telefonică durează un minut. De restul ne ocupăm noi."
      />
    </>
  )
}
