import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../lib/site'
import RatingBadge from './RatingBadge'
import Reveal from './Reveal'

type Props = {
  title?: string
  text?: string
  /** Slug-ul serviciului curent — preselectează serviciul în formularul de contact. */
  serviciu?: string
}

/** Banda finală de conversie — folosită pe toate paginile, înaintea footerului. */
export default function CTABand({
  title = 'Fă primul pas spre zâmbetul pe care ți-l dorești',
  // Fără „Programează o consultație.” la început: 5 pagini de serviciu trimit exact
  // propoziția asta ca titlu, iar paragraful o repeta cuvânt cu cuvânt dedesubt.
  text = 'Îți explicăm opțiunile pe înțeles și pleci cu planul de tratament stabilit.',
  serviciu,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-plum-950">
      {/* Watermark: zâmbetul din logo, ca semnătură de brand */}
      <svg
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -bottom-16 -right-10 h-[420px] w-[420px] text-white/[0.05] md:h-[540px] md:w-[540px]"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <path d="M13.6 25.2c1-2.6 3-4.6 5.6-5.6-2.3 1.6-4 3.4-5.1 5.9-.2.5-.7.2-.5-.3z" />
          <path d="M12.4 27.6c3.6 10.4 12.2 16.4 21.6 16.4 10.2 0 18.6-6.8 20.8-16.8-3.8 7.4-11.4 12-20 12-9 0-16.8-4.6-20.4-11.8-.4-.8-1.9-.6-2 .2z" />
        </g>
      </svg>
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-coral-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site section-pad relative text-center">
        <Reveal>
          <h2 className="h-display mx-auto max-w-3xl text-4xl !text-white md:text-5xl [text-wrap:balance]">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
          <div className="cta-row mt-9 justify-center">
            {/* outline alb forțat: inelul coral al lui btn-primary are 1,9:1 pe plum-950,
                iar regula din @layer base nu bate un utilitar din @layer utilities. */}
            <a href={site.phoneHref} className="btn-primary focus-visible:!outline-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
            </a>
            <Link
              to={`/contact${serviciu ? `?serviciu=${encodeURIComponent(serviciu)}` : ''}#formular`}
              className="btn-ghost-light"
            >
              Cere o programare online
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/65">
            <RatingBadge light variant="star" />
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              {site.addressShort}
            </span>
            <span className="whitespace-nowrap">{site.schedule}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
