import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'

export default function ServiciiIndex() {
  usePageMeta(
    'Servicii stomatologice Arad — ARdental proSmile',
    'Toate serviciile ARdental Arad: implant dentar, fațete, coroane zirconiu, tratament de canal, igienizare profesională, ortodonție, parodontologie și chirurgie orală.',
  )

  return (
    <>
      {/* Hero index servicii */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">ARdental proSmile — Clinică dentară în Arad</p>
            <h1 className="h1-page mx-auto mt-3 max-w-3xl">
              Serviciile noastre
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              De la prevenție și igienizare până la implanturi și reabilitări complete: nouă
              servicii, sub același acoperiș, pe Calea Aurel Vlaicu. Alege serviciul care te
              interesează sau sună-ne și te îndrumăm noi.
            </p>
            <div className="cta-row mt-9 justify-center">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>

          {/* Bandă plata în rate */}
          <Reveal className="mt-16">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-plum-100 lg:grid-cols-[1fr_1.25fr]">
              <img
                src="/media/brand/plata-in-rate.jpg"
                alt="Zâmbești acum, plătești mai târziu — plata în rate prin BT Direct și tbi bank"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
              <div className="flex flex-col items-start justify-center gap-5 card-pad-lg">
                <p className="eyebrow !text-teal-700">Plata în rate</p>
                <h2 className="h-display text-3xl md:text-4xl">Îți facem tratamentul accesibil</h2>
                <p className="max-w-xl leading-relaxed text-plum-900/70">
                  Primești planul complet înainte să începem: etape, costuri și opțiuni de
                  plată. Iar dacă ai nevoie de un tratament amplu — implanturi, coroane,
                  fațete sau o reabilitare completă — îl poți achita în rate flexibile, prin
                  TBI Bank sau Banca Transilvania.
                </p>
                <div className="cta-row mt-2">
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
