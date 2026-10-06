import { useEffect, useRef, useState } from 'react'
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
    // Titlul nu promite un rezultat garantat: afirmația despre lipsa durerii
    // rămâne în text, atribuită recenziilor — ca peste tot pe site.
    title: 'Anestezie modernă, tratamente confortabile',
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
    'Clinică dentară Arad — ARdental proSmile · Implant & fațete',
    'Clinică stomatologică în Arad: implant dentar, fațete, coroane zirconiu, igienizare profesională. 4,9★ pe Google. Plata în rate. ☎ 0771 582 416',
  )

  // Videoclipul de fundal e pur decorativ: cine a cerut mai puțină mișcare
  // rămâne pe posterul static, fără autoplay.
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  // Varianta 720p (373 KB) în loc de 1080p (919 KB) pe ecrane mici. Alegerea se
  // face în JS, o singură dată: atributul `media` de pe <source> e luat în seamă
  // doar în <picture>, iar în <video> browserele îl ignoră — toată lumea primea
  // fișierul mare, inclusiv pe date mobile.
  const [heroVideoSrc] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
      ? '/media/videos/hero-720.mp4'
      : '/media/videos/hero-1080.mp4',
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroVideoRef.current?.pause()
    }
  }, [])

  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      {/* De la xl în sus antetul are 112px (bara de contact h-9 + rândul de 76px),
          nu 76px — fără corecție, hero-ul depășea ecranul și tăia trust bar-ul. */}
      <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-plum-950 lg:min-h-[88svh] xl:min-h-[calc(100svh-112px)]">
        {/* Primul cadru, ca <img> și nu ca atribut `poster`: el este elementul LCP al
            paginii, iar doar un <img> poate primi fetchPriority. Rămâne randat
            permanent dedesubt — videoul îl acoperă de la primul cadru, dar dacă
            l-am ascunde, Safari ar arăta negru până la decodare. */}
        <img
          src="/media/videos/hero-video-poster.jpg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Videoclip de fundal (cadru cu drona deasupra clinicii), ales de proprietară.
            Doar primele 2 secunde: clipul rulează o singură dată și rămâne pe ultimul
            cadru — fără `loop`, browserul îl păstrează pe ecran după `ended`. */}
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        {/* Overlay pentru lizibilitate (contrast AA pe text alb).
            Direcția se schimbă cu lățimea, fiindcă și textul se mută:
              · pe mobil textul ocupă jumătatea de JOS pe toată lățimea → gradient
                vertical, deschis sus (se vede clădirea) și închis jos (sub text);
              · de la sm în sus textul stă în stânga → gradient orizontal, ca
                dreapta cadrului să rămână luminoasă.
            Înainte era orizontal peste tot, iar pe mobil paragraful cădea exact
            peste zona de 35% — alb pe perete deschis, sub pragul AA. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-plum-950/45 via-plum-950/78 to-plum-950/90 sm:bg-gradient-to-r sm:from-plum-950/92 sm:via-plum-950/70 sm:to-plum-950/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-plum-950/80 to-transparent sm:block"
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
            <div className="cta-row mt-6 md:mt-9">
              {/* Inelul de focus al btn-primary e coral-700 — pe fundalul plum-950 al
                  hero-ului are sub 2:1 contrast, deci dispare la navigarea din tastatură. */}
              <a
                href={site.phoneHref}
                className="btn-primary w-full focus-visible:!outline-white sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te:{' '}
                <span className="whitespace-nowrap">{site.phone}</span>
              </a>
              <Link to="/contact#formular" className="btn-ghost-light w-full sm:w-auto">
                Cere o programare online <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={0.2}>
            {/* items-start, nu items-center: pe ecrane mici textele se rup pe două
                rânduri, iar iconița ar atârna între ele în loc să stea lângă primul. */}
            <ul className="mt-8 flex max-w-4xl flex-wrap items-start gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/85 md:mt-14 md:gap-x-10 md:gap-y-4 md:pt-7 md:text-sm">
              <li className="inline-flex items-start gap-2.5">
                <Star
                  className="mt-px h-5 w-5 shrink-0 fill-gold-400 text-gold-400"
                  aria-hidden="true"
                />
                {site.rating}/5 din {site.reviewCount} de recenzii Google
              </li>
              <li className="inline-flex items-start gap-2.5">
                <ThumbsUp className="mt-px h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                100% dintre pacienții care ne-au evaluat pe Facebook ne recomandă
              </li>
              <li className="inline-flex items-start gap-2.5">
                <CreditCard className="mt-px h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
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
          <Reveal className="relative mx-auto mb-6 w-full max-w-md lg:mb-0 lg:max-w-none">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/media/clinic/receptie-wide.jpg"
                alt="Recepția clinicii ARdental din Arad — spațiu luminos, cu ferestre mari"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Sub sm, cardul de rating ar acoperi ~90% din poză: acolo stă sub ea,
                iar de la sm în sus redevine badge-ul plutitor din colț. */}
            <div className="card-mini relative mt-4 flex items-center gap-3.5 sm:absolute sm:-bottom-6 sm:-right-8 sm:mt-0">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                <Star className="h-6 w-6 fill-current" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-plum-950">{site.rating} din 5 pe Google</p>
                <p className="text-xs font-medium text-plum-900/70">
                  {site.reviewCount} de recenzii
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Despre noi" title="Bine ai venit la ARdental" />
            <Reveal delay={0.1}>
              <blockquote className="mt-7 border-l-2 border-coral-400 pl-6">
                <p className="quote-serif md:text-2xl">
                  „Totul începe cu o consultație atentă și un plan personalizat. De aici,
                  construim sănătatea zâmbetului tău, pas cu pas.”
                </p>
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-plum-900/70">
                Suntem o clinică dentară din Arad care lucrează cu tehnologie modernă, dar
                fără grabă. Fiecare pacient primește explicații pe înțeles și un plan de
                tratament adaptat nevoilor lui — nu o listă de proceduri.
              </p>
              <div className="cta-row mt-8">
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
            intro={`${site.rating} din 5 stele pe Google, plus recenziile de pe Facebook. Aproape fiecare recenzie pomenește medicul pe nume — semn că oamenii țin minte cine i-a tratat.`}
          />
          {/* Aceeași progresie 1 → 2 → 3 coloane ca la servicii. Direct pe trei
              coloane, la 768px rămâneau ~162px de text, adică rânduri de 2-3 cuvinte. */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08} className="h-full">
                <figure className="card-surface relative flex h-full flex-col card-pad-lg pt-9 md:pt-10">
                  <span
                    className="pointer-events-none absolute -top-1 left-6 select-none font-display text-[5.5rem] leading-none text-plum-200"
                    aria-hidden="true"
                  >
                    „
                  </span>
                  {/* Stelele stau în dreapta, ghilimeaua decorativă în stânga — nu se ating nici pe mobil */}
                  <Stars className="justify-end" />
                  {/* `relative` pe citat: altfel ghilimeaua poziționată absolut se
                      pictează peste prima literă a textului, care e element static. */}
                  <blockquote className="relative mt-4 flex-1">
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
      <section className="section-pad pt-0">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="band-pad relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
                <div>
                  <p className="eyebrow !text-teal-700">Plata în rate</p>
                  <h2 className="h-display mt-3 text-3xl md:text-4xl">
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
                      /* items-start: pe mobil beneficiile se rup pe 2–3 rânduri, iar
                         bifa centrată ar rămâne în dreptul rândului din mijloc. */
                      <li
                        key={benefit}
                        className="flex items-start gap-3 font-semibold text-plum-950"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-plum-600">(condiții în clinică)</p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Între md și lg banda are o singură coloană, iar afișul 4:5 creștea
                      la ~608×760px — mai înalt decât tot textul de deasupra. Îl limităm
                      până la trecerea pe două coloane. */}
                  <img
                    src="/media/brand/plata-in-rate.jpg"
                    alt="Zâmbești acum, plătești mai târziu — plata în rate prin BT Direct și tbi bank"
                    loading="lazy"
                    width={1000}
                    height={1250}
                    className="mx-auto aspect-[4/5] w-full max-w-[300px] rounded-3xl object-cover shadow-soft lg:mx-0 lg:max-w-none"
                  />
                  <div className="cta-row">
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
