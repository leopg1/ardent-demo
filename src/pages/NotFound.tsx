import { Link } from 'react-router-dom'
import { Home, Phone } from 'lucide-react'
import { site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'

function ToothIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="relative h-36 w-36 animate-float motion-reduce:animate-none drop-shadow-lg md:h-44 md:w-44"
    >
      {/* Corpul dintelui */}
      <path
        d="M60 16C50 8 32 8 25 23c-6 13 0 26 5 39 4 11 5 42 14 42 8 0 6-26 16-26s8 26 16 26c9 0 10-31 14-42 5-13 11-26 5-39C88 8 70 8 60 16Z"
        className="fill-white stroke-plum-300"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Reflexie */}
      <path
        d="M36 30c-4 3-6.5 8-6 13"
        className="stroke-plum-200"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Ochi + zâmbet */}
      <circle cx="47" cy="47" r="3" className="fill-plum-800" />
      <circle cx="73" cy="47" r="3" className="fill-plum-800" />
      <path
        d="M50 58c3 4 7 6 10 6s7-2 10-6"
        className="stroke-plum-800"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Scântei */}
      <path
        d="m101 34 2.1 4.9 4.9 2.1-4.9 2.1L101 48l-2.1-4.9-4.9-2.1 4.9-2.1 2.1-4.9Z"
        className="fill-gold-400"
      />
      <circle cx="14" cy="52" r="3" className="fill-teal-300" />
      <circle cx="104" cy="70" r="2.5" className="fill-coral-300" />
    </svg>
  )
}

export default function NotFound() {
  usePageMeta(
    'Pagină negăsită — ARdental proSmile',
    `Pagina căutată nu există. Întoarce-te la pagina principală sau sună-ne la ${site.phone}.`,
    undefined,
    // Vercel servește index.html pe orice rută → fără asta, URL-urile inexistente
    // ar fi indexate ca soft-404 cu canonical valid.
    { noindex: true },
  )

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-plum-100 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative hero-pad text-center">
        <Reveal>
          <div className="relative mx-auto flex h-52 max-w-md items-center justify-center md:h-60">
            <span
              className="absolute inset-0 flex select-none items-center justify-center font-display text-[150px] font-semibold leading-none text-plum-100 md:text-[180px]"
              aria-hidden="true"
            >
              404
            </span>
            <ToothIllustration />
          </div>
          <h1 className="h1-page mx-auto mt-8 max-w-2xl">
            {/* „404” e doar decor vizual (aria-hidden), deci codul erorii se aude de aici. */}
            <span className="sr-only">Eroare 404. </span>
            Pagina asta lipsește — ca un dinte.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-plum-900/70">
            Din fericire, la lipsuri ne pricepem. Înapoi la pagina principală sau sună-ne:{' '}
            <a
              href={site.phoneHref}
              className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
            >
              {site.phone}
            </a>
            .
          </p>
          <div className="cta-row mt-9 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" aria-hidden="true" /> Înapoi la pagina principală
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
