import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CalendarCheck, ChevronDown, Clock, MapPin, Menu, Phone, X } from 'lucide-react'
import { services, site } from '../lib/site'
import Logo from './Logo'
import RatingBadge from './RatingBadge'

const navItems = [
  { to: '/', label: 'Acasă' },
  { to: '/despre', label: 'Despre noi' },
  { to: '/echipa', label: 'Echipa' },
  { to: '/servicii', label: 'Servicii', dropdown: true },
  { to: '/cazuri', label: 'Cazuri' },
  { to: '/testimoniale', label: 'Testimoniale' },
  { to: '/oferte', label: 'Oferte' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Meniul mobil: Escape închide + revine focusul pe buton; focus pe primul link la deschidere
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    mobileNavRef.current?.querySelector<HTMLElement>('a, button, summary')?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Bara de sus (doar desktop lat) */}
      <div className="hidden bg-plum-950 text-white xl:block">
        <div className="container-site flex h-9 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6 text-white/85">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
              {site.addressShort}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
              {site.schedule}
            </span>
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <RatingBadge variant="star" className="!text-xs !text-gold-400" />
            <a href={site.facebook} target="_blank" rel="noreferrer" className="text-white/85 transition hover:text-white">
              Facebook
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-white/85 transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Navigația principală */}
      <div
        className={`border-b border-plum-100/70 bg-white/90 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-soft' : ''}`}
      >
        <div className="container-site flex h-[76px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-6 xl:flex 2xl:gap-7" aria-label="Navigație principală">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav-link inline-flex items-center gap-1 py-2 ${isActive ? 'text-coral-600' : ''}`}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="card-surface grid grid-cols-2 gap-1 p-3">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/servicii/${s.slug}`}
                          className="rounded-2xl px-4 py-3 text-sm font-semibold text-plum-900/85 transition hover:bg-plum-50 hover:text-coral-700"
                        >
                          {s.menuTitle}
                        </Link>
                      ))}
                      <Link
                        to="/servicii"
                        className="col-span-2 mt-1 rounded-2xl bg-plum-50 px-4 py-3 text-center text-sm font-bold text-plum-700 transition hover:bg-plum-100"
                      >
                        Vezi toate serviciile →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-link py-2 ${isActive ? 'text-coral-600' : ''}`}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link to="/contact#formular" className="btn-primary !px-6 !py-3">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Programează-te
            </Link>
          </div>

          {/* Mobil / tabletă: apel mereu vizibil + hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Sună la ${site.phone}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-coral-600 text-white shadow-lift transition hover:bg-coral-700 active:scale-95"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-plum-200 text-plum-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500"
              aria-expanded={open}
              aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Meniu mobil */}
        {open && (
          <nav
            ref={mobileNavRef}
            className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-plum-100 bg-white pb-6 xl:hidden"
            aria-label="Navigație mobilă"
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <details key={item.to} className="group/acc rounded-2xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-plum-900/85 [&::-webkit-details-marker]:hidden">
                      Servicii
                      <ChevronDown
                        className="h-4.5 w-4.5 text-plum-400 transition group-open/acc:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="ml-2 flex flex-col gap-0.5 border-l-2 border-plum-100 pb-2 pl-3">
                      {services.map((s) => (
                        <NavLink
                          key={s.slug}
                          to={`/servicii/${s.slug}`}
                          className={({ isActive }) =>
                            `rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? 'bg-plum-50 text-coral-600' : 'text-plum-900/75'}`
                          }
                        >
                          {s.menuTitle}
                        </NavLink>
                      ))}
                      <NavLink
                        to="/servicii"
                        end
                        className="rounded-xl px-3 py-3 text-sm font-bold text-plum-700"
                      >
                        Toate serviciile →
                      </NavLink>
                    </div>
                  </details>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3.5 text-base font-semibold ${isActive ? 'bg-plum-50 text-coral-600' : 'text-plum-900/85'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
              <a href={site.phoneHref} className="btn-primary mt-3">
                <Phone className="h-4 w-4" aria-hidden="true" /> Sună: {site.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
