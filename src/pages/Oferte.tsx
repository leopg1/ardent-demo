import { Link } from 'react-router-dom'
import { Check, CreditCard, Phone, ReceiptText, ShieldCheck, Wallet } from 'lucide-react'
import { site } from '../lib/site'
import { faqItems } from '../lib/faq'
import { faqJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import FaqItem from '../components/contact/FaqItem'

const rateBenefits = [
  ['Rate flexibile', ' prin TBI Bank sau Banca Transilvania'],
  ['Pentru tratamente ample', ': implanturi, coroane, fațete, reabilitări orale'],
  ['Cererea se face în clinică', ', iar răspunsul vine rapid'],
] as const

const heroChips = [
  { icon: CreditCard, label: 'Plata în rate — TBI Bank & BT' },
  { icon: ReceiptText, label: 'Plan de tratament transparent' },
  { icon: Wallet, label: 'Fără costuri-surpriză' },
] as const

export default function Oferte() {
  usePageMeta(
    'Plata în rate & Facilități — ARdental proSmile Arad',
    'Plata în rate prin TBI Bank și Banca Transilvania la ARdental Arad. Plan de tratament transparent, cu etape și costuri clare de la început.',
  )
  useJsonLd(faqJsonLd(faqItems))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Plata în rate & facilități</p>
            <h1 className="h1-page mt-3">
              Zâmbești acum, plătești mai târziu
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/70">
              Credem că fiecare pacient ar trebui să aibă acces la tratamente stomatologice de
              calitate — fără stres financiar. De aceea îți poți planifica lucrarea în ritmul
              tău.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-2 text-xs font-bold text-plum-800 shadow-soft"
                >
                  <Icon className="h-4 w-4 text-coral-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Plata în rate */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="band-pad relative grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
                <div>
                  <p className="eyebrow !text-teal-700">Parteneri de finanțare</p>
                  <h2 className="h-display mt-3 text-3xl md:text-4xl">Plata în rate</h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-plum-900/70">
                    Indiferent că este vorba despre implanturi, coroane, fațete sau reabilitări
                    orale complexe, îți poți planifica lucrarea în ritmul tău și te poți bucura
                    de rezultate sigure, durabile și estetice.
                  </p>
                  <ul className="mt-6 space-y-3.5">
                    {rateBenefits.map(([strong, rest]) => (
                      <li key={strong} className="flex items-start gap-3 text-base text-plum-900/80">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>
                          <strong className="font-bold text-plum-950">{strong}</strong>
                          {rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-lg text-xs italic leading-relaxed text-plum-900/70">
                    Condiții complete și simulare de rate, în clinică sau la telefon.
                  </p>
                  <div className="cta-row mt-7">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de rate
                    </a>
                    <Link to="/contact#formular" className="btn-secondary">
                      Cere o programare online
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/media/brand/plata-in-rate.jpg"
                    alt="Zâmbești acum, plătești mai târziu — plata în rate prin BT Direct și tbi bank"
                    loading="lazy"
                    width={1000}
                    height={1250}
                    className="aspect-[4/5] w-full max-w-xs rounded-3xl object-cover shadow-soft"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="card-surface h-full card-pad-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                  <ReceiptText className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="card-title mt-5">Plan de tratament transparent</h2>
                <p className="mt-3 text-base leading-relaxed text-plum-900/75">
                  Înainte de orice tratament primești planul complet, cu etape și costuri, fără
                  surprize pe parcurs. Știi de la început ce facem, de ce și cât costă — și
                  putem începe cu ce e mai urgent, dacă preferi să împarți lucrarea în etape.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="card-surface h-full card-pad-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="card-title mt-5">Prevenția, cel mai ieftin tratament</h2>
                <p className="mt-3 text-base leading-relaxed text-plum-900/75">
                  O igienizare profesională la șase luni costă o fracțiune din ce ar însemna un
                  tratament de canal sau o coroană. Cel mai bun mod de a economisi la dentist
                  este să vii înainte să apară problema.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-plum-50">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="h-display text-center text-3xl md:text-4xl">
              Ai întrebări? Avem răspunsuri
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-plum-900/70">
              Cele mai frecvente întrebări pe care le primim la telefon și la recepție, cu
              răspunsuri deschise, fără limbaj de lemn.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.05, 0.25)}>
                <FaqItem question={item.q}>{item.a}</FaqItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Un singur telefon desparte întrebarea de răspuns"
        text="Sună-ne sau lasă-ne un mesaj — afli exact ce opțiuni ai și cât costă."
      />
    </>
  )
}
