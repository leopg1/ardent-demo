import { Link } from 'react-router-dom'

/**
 * Marca ARdental proSmile: zâmbetul stilizat (semilună cu accentul din stânga sus)
 * plus wordmark-ul. Reconstruit vectorial după logo-ul clinicii, ca să rămână clar
 * la orice dimensiune și să funcționeze și pe fundal închis (`light`).
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="ARdental proSmile — Acasă"
    >
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={light ? 'rgba(255,255,255,0.12)' : '#EFF4FC'} />
        <g fill={light ? '#FFFFFF' : '#5078BE'}>
          {/* accentul mic din stânga sus */}
          <path d="M13.6 25.2c1-2.6 3-4.6 5.6-5.6-2.3 1.6-4 3.4-5.1 5.9-.2.5-.7.2-.5-.3z" />
          {/* zâmbetul */}
          <path d="M12.4 27.6c3.6 10.4 12.2 16.4 21.6 16.4 10.2 0 18.6-6.8 20.8-16.8-3.8 7.4-11.4 12-20 12-9 0-16.8-4.6-20.4-11.8-.4-.8-1.9-.6-2 .2z" />
        </g>
      </svg>
      <span className="leading-none">
        <span
          className={`block font-sans text-[23px] font-extrabold tracking-[-0.02em] ${
            light ? 'text-white' : 'text-plum-950'
          }`}
        >
          AR<span className={light ? 'font-medium text-white/85' : 'font-medium text-coral-600'}>dental</span>
        </span>
        <span
          className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.32em] ${
            light ? 'text-white/70' : 'text-plum-500'
          }`}
        >
          pro · smile
        </span>
      </span>
    </Link>
  )
}
