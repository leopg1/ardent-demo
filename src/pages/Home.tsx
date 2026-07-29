import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  CreditCard,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  ThumbsUp,
} from 'lucide-react'
import { services, site, testimonials } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Stars from '../components/Stars'

/* ─────────────────────────── Date locale secțiuni ─────────────────────────── */

const whyCards = [
  {
    icon: HeartHandshake,
    title: 'Aici scapi de frica de dentist',
    text: 'Este lucrul pe care pacienții îl scriu cel mai des în recenzii: că au venit tensionați și au plecat liniștiți. „Am găsit acolo oameni care știu să vindece nu doar dinții, ci și fricile.”',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'lg:col-span-3',
  },
  {
    icon: Stethoscope,
    title: 'Tratamente fără durere',
    text: 'Lucrăm cu anestezie modernă și pe îndelete. „Totul a decurs rapid și fără durere” este una dintre cele mai frecvente formulări din recenziile noastre.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-3',
  },
  {
    icon: Sparkles,
    title: 'Soluții complete, într-un singur loc',
    text: 'De la igienizare și tratamente de bază, până la implanturi, fațete și reabilitare orală complexă — nu te trimitem în altă parte.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'lg:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Sterilizare după protocol strict',
    text: 'Curățare, dezinfectare, sterilizare — pentru fiecare instrument, de fiecare dată, conform standardelor medicale actuale.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-2',
  },
  {
    icon: CreditCard,
    title: 'Plată în rate',
    text: 'Tratamentele ample se pot achita în rate flexibile, prin TBI Bank sau Banca Transilvania. Cererea se face direct la noi în clinică.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'md:col-span-2 lg:col-span-2',
  },
]

/* ─────────────────────────────────── Pagina ─────────────────────────────────── */

export default function Home() {
  usePageMeta(
    'ARdental proSmile — Clinică dentară Arad · Implant & Estetică dentară',
    'Clinică stomatologică în Arad: implant dentar, fațete, coroane zirconiu, igienizare profesională. 4,9★ pe Google. Plata în rate. ☎ 0771 582 416',
  )

  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-plum-950 lg:min-h-[88svh]">
        <img
          src="/media/clinic/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Overlay pentru lizibilitate (contrast AA pe text alb) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-plum-950/92 via-plum-950/70 to-plum-950/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum-950/80 to-transparent"
          aria-hidden="true"
        />

        <div className="container-site relative hero-pad">
          <Reveal initialVisible>
            <p className="eyebrow !text-teal-300">Clinică dentară · Arad</p>
            <h1 className="h-display mt-3 max-w-3xl text-[40px] !text-white sm:text-5xl md:mt-4 md:text-6xl lg:text-7xl">
              Viața trebuie trăită zâmbind.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:mt-6 md:text-xl">
              Clinică dentară pe Calea Aurel Vlaicu, în Arad. Tratăm calm, explicăm pe înțeles
              și mergem până la capăt — de la o simplă igienizare la o reabilitare completă.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-ghost-light">
                Cere o programare online <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={0.2}>
            <ul className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/85 md:mt-14 md:gap-x-10 md:gap-y-4 md:pt-7 md:text-sm">
              <li className="inline-flex items-center gap-2.5">
                <Star className="h-5 w-5 fill-gold-400 text-gold-400" aria-hidden="true" />
                {site.rating}/5 din peste {site.reviewCount} de recenzii Google
              </li>
              <li className="inline-flex items-center gap-2.5">
                <ThumbsUp className="h-5 w-5 text-gold-400" aria-hidden="true" />
                100% dintre pacienți ne recomandă pe Facebook
              </li>
              <li className="inline-flex items-center gap-2.5">
                <CreditCard className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Plata în rate prin TBI Bank & Banca Transilvania
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Preview servicii ────────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Ce facem cel mai bine"
            intro="Implanturi, fațete, coroane din zirconiu, tratamente de canal și igienizare profesională: nouă servicii sub același acoperiș, pe Calea Aurel Vlaicu."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-16 lg:gap-8">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/servicii" className="btn-secondary">
              Vezi toate serviciile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Preview „Despre” ────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/media/clinic/receptie-wide.jpg"
                alt="Recepția clinicii ARdental din Arad — spațiu luminos, cu ferestre mari"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-surface absolute -bottom-6 -right-4 flex items-center gap-3.5 p-5 sm:-right-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                <Star className="h-6 w-6 fill-current" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-plum-950">{site.rating} din 5 pe Google</p>
                <p className="text-xs font-medium text-plum-900/70">
                  peste {site.reviewCount} de recenzii
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Despre noi" title="Bine ai venit la ARdental" />
            <Reveal delay={0.1}>
              <blockquote className="mt-7 border-l-2 border-coral-400 pl-6">
                <p className="font-display text-2xl font-medium leading-snug text-plum-900 md:text-[1.7rem]">
                  „Totul începe cu o consultație atentă și un plan personalizat. De aici,
                  construim sănătatea zâmbetului tău, pas cu pas.”
                </p>
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-plum-900/70">
                Suntem o clinică dentară din Arad care lucrează cu tehnologie modernă, dar
                fără grabă. Fiecare pacient primește explicații pe înțeles și un plan de
                tratament adaptat nevoilor lui — nu o listă de proceduri.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/echipa" className="btn-secondary">
                  Cunoaște-ne echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Testimoniale preview ────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Testimoniale"
            title="Ce spun pacienții noștri"
            intro={`${site.rating} din 5 stele pe Google. Aproape fiecare recenzie pomenește medicul pe nume — semn că oamenii țin minte cine i-a tratat.`}
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08} className="h-full">
                <figure className="card-surface relative flex h-full flex-col p-7 pt-9 md:p-8 md:pt-10">
                  <span
                    className="pointer-events-none absolute -top-1 left-6 select-none font-display text-[5.5rem] leading-none text-plum-200"
                    aria-hidden="true"
                  >
                    „
                  </span>
                  {/* Stelele stau în dreapta, ghilimeaua decorativă în stânga — nu se ating nici pe mobil */}
                  <Stars className="justify-end" />
                  <blockquote className="mt-4 flex-1">
                    <p className="leading-relaxed text-plum-900/80">{t.text}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-plum-100 pt-4 text-sm">
                    <span className="font-bold text-plum-950">{t.author}</span>
                    <span className="text-plum-900/70"> · recenzie {t.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/testimoniale" className="btn-secondary">
              Vezi toate recenziile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 5. De ce ARdental ──────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="De ce ARdental"
            title="De ce pacienții ne aleg — și rămân alături de noi"
          />
          <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-6 md:mt-16">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06} className={card.span}>
                <article className="card-surface card-pad-lg h-full transition hover:border-plum-200">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${card.iconClass}`}>
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="card-title mt-5">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Banda „plata în rate” ───────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="relative grid gap-10 px-7 py-12 md:px-12 md:py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-16">
                <div>
                  <p className="eyebrow !text-teal-600">Plata în rate</p>
                  <h2 className="h-display mt-3 text-4xl md:text-5xl">
                    Zâmbești acum, plătești mai târziu
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-900/70">
                    Credem că fiecare pacient ar trebui să aibă acces la tratamente
                    stomatologice de calitate — fără stres financiar. De aceea oferim plata
                    în rate flexibile.
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {[
                      'Rate flexibile prin TBI Bank și Banca Transilvania',
                      'Pentru implanturi, coroane, fațete și reabilitări complexe',
                      'Cererea se completează la noi în clinică, răspunsul vine rapid',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 font-semibold text-plum-950">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-plum-500">(condiții în clinică)</p>
                </div>

                <div className="flex flex-col gap-6">
                  <img
                    src="/media/brand/plata-in-rate.jpg"
                    alt="Zâmbești acum, plătești mai târziu — plata în rate prin BT Direct și tbi bank"
                    loading="lazy"
                    className="w-full rounded-3xl shadow-soft"
                  />
                  <div className="flex flex-wrap gap-4">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de rate
                    </a>
                    <Link to="/oferte" className="btn-secondary">
                      Vezi detaliile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. CTA final ───────────────────────────────────────────────────── */}
      <CTABand />
    </>
  )
}
