import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { reels, site } from '../lib/site'
import { contactFaq } from '../lib/faq'
import { faqJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
import ReelCard from '../components/ReelCard'
import Reveal from '../components/Reveal'
import ContactForm from '../components/contact/ContactForm'
import FaqItem from '../components/contact/FaqItem'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.9v-7.4h2.5l.4-2.9h-2.9V9.7c0-.8.2-1.4 1.4-1.4h1.6V5.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.9v2.9h2.5v7.4h3.1Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contact() {
  usePageMeta(
    'Contact & Programări — ARdental proSmile Arad',
    'Programează-te la ARdental: Calea Aurel Vlaicu nr. 156, Arad. ☎ 0771 582 416 · L–V 10:00–20:00.',
  )
  useJsonLd(faqJsonLd(contactFaq))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow">Contact & programare</p>
            <h1 className="h1-page mt-3">
              Contact — te așteptăm cu zâmbetul pregătit
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/70">
              Sună-ne, scrie-ne sau vino direct în clinică — ne găsești pe Calea Aurel Vlaicu,
              la numărul 156. Răspundem rapid și găsim împreună ora potrivită pentru tine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Formular (primul pe mobil) + date de contact */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          {/* Formular — primul în DOM, ca pe mobil să fie imediat sub hero */}
          <Reveal className="min-w-0 lg:order-2">
            <ContactForm />
          </Reveal>

          {/* Date de contact + hartă */}
          <div className="min-w-0 lg:order-1">
            <Reveal>
              <h2 className="h-display text-3xl md:text-4xl">Date de contact</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 lg:gap-8 sm:grid-cols-2">
              <Reveal className="sm:col-span-2">
                <div className="card-surface flex items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Adresă
                    </h3>
                    <p className="mt-1.5 text-base font-semibold leading-snug text-plum-950">
                      {site.address}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-plum-900/70">
                      {site.addressHint}.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Telefon / programări
                    </h3>
                    <a
                      href={site.phoneHref}
                      className="-mb-1.5 block py-1.5 text-lg font-bold text-plum-950 transition hover:text-coral-700"
                    >
                      {site.phone}
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-plum-900/70">Apasă pentru apel direct.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      E-mail
                    </h3>
                    {/* `break-all` e necesar: adresa nu are spații, iar fără el ieșea din
                        card și se suprapunea peste cardul „Program" pe desktop. */}
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1.5 block break-all text-base font-semibold leading-snug text-plum-950 transition hover:text-coral-700"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-gold-500">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Program
                    </h3>
                    <p className="mt-1.5 text-base font-semibold leading-snug text-plum-950">{site.schedule}</p>
                    <p className="mt-1 text-xs leading-relaxed text-plum-900/70">{site.scheduleNote}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Social
                    </h3>
                    {/* py-1.5 + space-y-2.5 duc ținta tactilă la ~40px, fără schimbare vizuală. */}
                    <div className="mt-1.5 space-y-2.5">
                      <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 text-sm font-semibold text-plum-900/80 transition hover:text-coral-700"
                      >
                        <FacebookIcon className="h-4 w-4" /> /ArdentalProsmile
                      </a>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 text-sm font-semibold text-plum-900/80 transition hover:text-coral-700"
                      >
                        <InstagramIcon className="h-4 w-4" /> @ardental_prosmile
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="mt-6">
              <iframe
                src={site.mapsEmbed}
                title="Harta ARdental proSmile Arad"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-video w-full rounded-3xl border-0 shadow-soft"
              />
              <a
                href={site.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 py-2.5 text-sm font-bold text-coral-600 transition hover:text-coral-700"
              >
                Deschide în Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Reveal>

            {/* Harta îți spune unde; clipul îți arată ce găsești când deschizi ușa —
                de asta stau împreună, pe pagina pe care o citești chiar înainte să vii. */}
            <Reveal delay={0.15} className="mt-10 grid items-center gap-6 sm:grid-cols-[220px_1fr]">
              {/* Pe mobil titlul vine primul (clipul are context); pe lat, clipul stă în stânga. */}
              <ReelCard reel={reels.vinoInClinica} className="sm:order-first max-sm:order-last" />
              <div>
                <h3 className="card-title">Așa arată când intri</h3>
                <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">
                  Ca să nu vii într-un loc străin: un clip scurt, filmat chiar de la ușă —
                  recepția, salonul de așteptare și cabinetele. Apasă play și fă turul
                  înainte de prima vizită.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Întrebări frecvente — obiecțiile de dinaintea programării */}
      <section className="pb-16 md:pb-24">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="h-display text-center text-3xl md:text-4xl">
              Întrebări puse des la telefon
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {contactFaq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <FaqItem question={item.q}>{item.a}</FaqItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Urgențe — blocul de închidere al paginii */}
      <section className="pt-0 pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="band-pad isolate relative overflow-hidden border border-coral-100 bg-coral-50 text-center">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-200/50 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="eyebrow justify-center">Urgențe</p>
                <h2 className="h-display mt-3 text-3xl md:text-4xl">Ai o urgență stomatologică?</h2>
                <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-plum-900/75">
                  Sună-ne direct — facem tot posibilul să te primim în aceeași zi.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 font-display text-3xl font-semibold text-coral-600 transition hover:text-coral-700 sm:gap-3 sm:text-4xl md:text-5xl"
                >
                  <Phone className="h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:h-9 md:w-9" aria-hidden="true" /> {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
