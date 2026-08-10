import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import Logo from './Logo'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.5-3h-2.9V9.1c0-.9.3-1.6 1.7-1.6h1.3V4.8c-.6-.1-1.4-.2-2.3-.2-2.4 0-4 1.4-4 4.1V11H7.8v3h2.4v7h3.3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  // Datele juridice se afișează doar după ce sunt completate în site.ts (vezi TODO acolo).
  const legal = [site.legalName, site.cui, site.regCom].filter(Boolean).join(' · ')

  return (
    <footer className="bg-plum-950 text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-base leading-relaxed text-white/70">
            „{site.slogan}.” Clinică dentară în Arad — de la igienizare și tratamente de bază,
            până la implanturi și reabilitări orale complexe.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook ARdental"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-coral-700"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram ARdental"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-coral-700"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Servicii">
          <h2 className="font-sans text-base font-bold">Servicii</h2>
          <ul className="mt-4 space-y-0.5 text-base text-white/70">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to={`/servicii/${s.slug}`} className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">
                  {s.menuTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/servicii" className="inline-block py-2 font-semibold text-teal-300 transition hover:text-teal-200 active:opacity-70">
                Toate serviciile →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Meniu">
          <h2 className="font-sans text-base font-bold">Clinica</h2>
          <ul className="mt-4 space-y-0.5 text-base text-white/70">
            <li><Link to="/despre" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Despre noi</Link></li>
            <li><Link to="/echipa" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Echipa</Link></li>
            <li><Link to="/cazuri" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Cazuri — Înainte / După</Link></li>
            <li><Link to="/testimoniale" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Testimoniale</Link></li>
            <li><Link to="/oferte" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Plata în rate</Link></li>
            <li><Link to="/contact" className="inline-block py-2 transition hover:text-coral-300 active:opacity-70">Contact & programare</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-base font-bold">Contact</h2>
          <ul className="mt-5 space-y-3.5 text-base text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
              <span>
                {site.address}
                <br />
                <span className="text-white/50">{site.addressHint}</span>
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-coral-300">
                <Phone className="h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-coral-300">
                <Mail className="h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
              <span>
                {site.schedule}
                <br />
                <span className="text-white/50">{site.scheduleNote}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}
            {legal && ` · ${legal}`}
          </p>
          {/* `inline-block py-2.5` duce ținta tactilă la ~40px fără să schimbe aspectul. */}
          <div className="flex items-center gap-5">
            <Link
              to="/confidentialitate"
              className="inline-block py-2.5 transition hover:text-white/80"
            >
              Politica de confidențialitate
            </Link>
            <a
              href="https://anpc.ro/"
              target="_blank"
              rel="noreferrer"
              className="inline-block py-2.5 transition hover:text-white/80"
            >
              ANPC
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
