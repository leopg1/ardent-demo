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
  // Aceeași etichetă ca în Footer — pagina se numea „Oferte" în meniu și „Plata în rate" jos.
  { to: '/oferte', label: 'Plata în rate' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)
  // Dropdown-ul de servicii era doar CSS (group-hover): nu-și anunța starea și nu se
  // închidea cu Escape. Acum vizibilitatea vine din stare, iar CSS-ul doar animă.
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesLinkRef = useRef<HTMLAnchorElement>(null)

  // `key` (nu `pathname`): react-router schimbă cheia și când se apasă linkul paginii
  // curente, altfel meniul rămânea deschis cu scroll-ul blocat și atingerea părea moartă.
  useEffect(() => setOpen(false), [location.key])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Meniul mobil: blochează scroll-ul pe fundal, izolează focusul (Tab ciclează doar
  // prin meniu), Escape sau o atingere în afară îl închid și readuc focusul pe buton.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const close = () => {
      setOpen(false)
      hamburgerRef.current?.focus()
    }

    // Capcana acoperă tot header-ul, nu doar panoul: bara de sus rămâne vizibilă cât
    // timp meniul e deschis, iar logo-ul și butonul de apel trebuie să rămână
    // accesibile cu Tab. Filtrul pe offsetParent sare peste bara și navigația
    // desktop, care sunt display:none sub xl.
    const focusables = () =>
      Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>(
          'a, button, summary, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => el.offsetParent !== null)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close()
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (mobileNavRef.current?.contains(target) || hamburgerRef.current?.contains(target)) return
      setOpen(false)
    }

    // Peste xl dispar și panoul, și hamburgerul: fără asta, o rotire de tabletă sau o
    // redimensionare lăsa starea deschisă și pagina blocată, fără niciun control vizibil.
    const wide = window.matchMedia('(min-width: 1280px)')
    const onWide = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    onWide(wide)

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    wide.addEventListener('change', onWide)
    mobileNavRef.current?.querySelector<HTMLElement>('a, button, summary')?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
      wide.removeEventListener('change', onWide)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
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
            <RatingBadge variant="star" light className="!text-xs" />
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
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key !== 'Escape' || !servicesOpen) return
                    e.stopPropagation()
                    setServicesOpen(false)
                    servicesLinkRef.current?.focus()
                  }}
                >
                  <NavLink
                    ref={servicesLinkRef}
                    to={item.to}
                    aria-expanded={servicesOpen}
                    aria-controls="meniu-servicii"
                    className={({ isActive }) => `nav-link inline-flex items-center gap-1 py-2 ${isActive ? 'text-coral-600' : ''}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </NavLink>
                  <div
                    id="meniu-servicii"
                    className={`absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
                  >
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

          {/* De la md în sus există loc în bară pentru CTA-ul principal: până la xl
              jumătatea dreaptă rămânea goală, iar programarea nu apărea nicăieri. */}
          <div className="hidden items-center gap-3 md:flex">
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-plum-200 text-plum-800 transition hover:bg-plum-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500"
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
            className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-plum-100 bg-white xl:hidden"
            aria-label="Navigație mobilă"
          >
            <div className="container-site flex flex-col gap-1 pb-6 pt-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <details key={item.to} className="group/acc rounded-2xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-plum-900/85 [&::-webkit-details-marker]:hidden">
                      Servicii
                      <ChevronDown
                        className="h-4 w-4 text-plum-400 transition group-open/acc:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="ml-2 flex flex-col gap-0.5 border-l-2 border-plum-100 pb-2 pl-3">
                      {services.map((s) => (
                        <NavLink
                          key={s.slug}
                          to={`/servicii/${s.slug}`}
                          className={({ isActive }) =>
                            `rounded-2xl px-3 py-3 text-sm font-semibold ${isActive ? 'bg-plum-50 text-coral-600' : 'text-plum-900/85'}`
                          }
                        >
                          {s.menuTitle}
                        </NavLink>
                      ))}
                      <NavLink
                        to="/servicii"
                        end
                        className="rounded-2xl px-3 py-3 text-sm font-bold text-plum-700"
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
              {/* Programarea e acțiunea promovată peste tot pe site; apelul rămâne
                  alternativa. `onClick` închide meniul și pe telefon, unde nu există
                  navigare SPA care să declanșeze efectul de mai sus. */}
              <Link
                to="/contact#formular"
                className="btn-primary mt-3"
                onClick={() => setOpen(false)}
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Programează-te
              </Link>
              <a
                href={site.phoneHref}
                className="btn-secondary mt-2"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Sună: {site.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
