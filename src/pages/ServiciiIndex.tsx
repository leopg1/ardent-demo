import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { BASE_URL, breadcrumbJsonLd, useJsonLd, usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'

export default function ServiciiIndex() {
  usePageMeta(
    'Servicii stomatologice Arad — ARdental proSmile',
    'Serviciile ARdental Arad: implant dentar, fațete, coroane zirconiu, tratament de canal, igienizare, ortodonție, parodontologie și chirurgie orală.',
  )
  // Paginile de serviciu declară firul Acasă › Servicii › …, dar nodul din mijloc
  // nu-l declara pe al lui: firul rămânea rupt exact pe pagina-hub.
  useJsonLd(
    breadcrumbJsonLd([
      { name: 'Acasă', path: '/' },
      { name: 'Servicii', path: '/servicii' },
    ]),
  )
  // Hub-ul listează cele 9 servicii ca simple carduri; fără ItemList structura
  // nu e citibilă nici de Google, nici de motoarele generative.
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicii stomatologice ARdental proSmile Arad',
    itemListElement: services.map((service, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: service.title,
      url: `${BASE_URL}/servicii/${service.slug}`,
    })),
  })

  return (
    <>
      {/* Hero index servicii */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          {/* Hero-ul e deasupra pliului și conține h1-ul (element LCP) — fără
              initialVisible pornea la opacity 0 până după hidratare. */}
          <Reveal initialVisible>
            <p className="eyebrow justify-center">ARdental proSmile — Clinică dentară în Arad</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">
              Serviciile noastre
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              De la prevenție și igienizare până la implanturi și reabilitări complete: nouă
              servicii, sub același acoperiș, pe Calea Aurel Vlaicu. Alege serviciul care te
              interesează sau sună-ne și te îndrumăm noi.
            </p>
            <div className="cta-row mt-9 justify-center">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te:{' '}
                <span className="whitespace-nowrap">{site.phone}</span>
              </a>
              <Link to="/contact#formular" className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grila celor 9 servicii */}
      <section className="section-pad">
        <div className="container-site">
          {/* Titlu de nivel 2 pentru grilă: fără el, ierarhia sărea de la h1 (hero)
              direct la h3 (titlul de card) — cititoarele de ecran pierd un nivel. */}
          <h2 className="sr-only">Toate serviciile clinicii</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>

          {/* Bandă plata în rate */}
          <Reveal className="mt-16">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-plum-100 lg:grid-cols-[1fr_1.25fr] lg:items-center">
              {/* Afișul e portret 4:5 și are titlul și siglele băncilor tipărite în el:
                  orice alt raport le-ar tăia. Pe mobil și tabletă îl plafonăm, ca să nu
                  umple singur ecranul. */}
              <div className="flex items-center justify-center p-6 lg:p-0">
                <img
                  src="/media/brand/plata-in-rate.jpg"
                  alt="Afiș ARdental: plata în rate prin BT Direct (Banca Transilvania) și TBI Bank"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full max-w-xs rounded-2xl object-cover lg:max-w-none lg:rounded-none"
                />
              </div>
              <div className="flex flex-col items-start justify-center card-pad-lg">
                <p className="eyebrow !text-teal-700">Plata în rate</p>
                <h2 className="h-display mt-3 text-3xl md:text-4xl">Îți facem tratamentul accesibil</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-plum-900/70">
                  Primești planul complet înainte să începem: etape, costuri și opțiuni de
                  plată. Iar dacă ai nevoie de un tratament amplu — implanturi, coroane,
                  fațete sau o reabilitare completă — îl poți achita în rate flexibile, prin
                  TBI Bank sau Banca Transilvania.
                </p>
                <div className="cta-row mt-7">
                  <a href={site.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de rate
                  </a>
                  <Link to="/oferte" className="btn-secondary">
                    Vezi detaliile
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
