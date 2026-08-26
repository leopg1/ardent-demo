import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { services, site } from '../../lib/site'
import RatingBadge from '../RatingBadge'

// 16px pe mobil (evită zoom-ul automat iOS la focus), 15px pe desktop.
// Bordura și inelul de focus folosesc tonuri care trec pragul WCAG 1.4.11 de 3:1
// (plum-200/plum-400 dădeau 1,42:1 și 2,87:1 — focusul era practic invizibil).
const fieldClass =
  'w-full rounded-2xl border border-plum-300 bg-white px-4 py-3 text-[16px] text-plum-950 outline-none transition placeholder:text-plum-600 focus:border-coral-600 focus:ring-2 focus:ring-coral-500/40 sm:text-base'

const labelClass = 'mb-1.5 block text-xs font-bold text-plum-900'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Formular „Cere o programare” — DEMO: nu trimite date nicăieri; la submit
 * afișează mesajul de succes. Preia serviciul din query (?serviciu=slug).
 * Structura de stări (sending / sent / error) e pregătită pentru un backend real.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('serviciu') ?? ''
  const successRef = useRef<HTMLParagraphElement>(null)

  // Butonul de submit dispare din DOM la succes, deci focusul ar cădea pe <body>.
  // Îl mutăm pe confirmare: utilizatorii de tastatură/cititor de ecran o primesc sigur,
  // fără să depindem de o regiune live montată odată cu conținutul ei.
  useEffect(() => {
    if (status === 'sent') successRef.current?.focus()
  }, [status])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // DEMO: simulăm trimiterea. La legarea de un backend real:
    //   fetch(...).then(() => setStatus('sent')).catch(() => setStatus('error'))
    window.setTimeout(() => setStatus('sent'), 700)
  }

  return (
    <div id="formular" className="card-surface scroll-mt-28 card-pad-lg">
      <h2 className="h-display text-3xl md:text-4xl">Cere o programare</h2>
      <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">
        Completează formularul și te sunăm de regulă în aceeași zi lucrătoare ({site.schedule}).
        Câmpurile marcate cu * sunt obligatorii.
      </p>

      {status === 'sent' ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-7 rounded-2xl border border-teal-200 bg-teal-50 p-7 text-center md:p-9"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </span>
          <p
            ref={successRef}
            tabIndex={-1}
            className="mt-4 font-sans text-2xl font-bold tracking-[-0.01em] text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            Cererea ta a fost trimisă
          </p>
          <p className="mx-auto mt-2.5 max-w-md text-base leading-relaxed text-teal-800">
            Mulțumim! Te sunăm de regulă în aceeași zi lucrătoare pentru confirmarea programării. Pentru
            urgențe, sună-ne direct la{' '}
            <a href={site.phoneHref} className="font-bold underline underline-offset-2">
              {site.phone}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 inline-flex min-h-10 items-center rounded-full px-4 py-2 text-sm font-bold text-teal-800 underline underline-offset-2 transition hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Trimite altă cerere
          </button>
        </div>
      ) : (
        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          {status === 'error' && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-2xl border border-coral-200 bg-coral-50 p-4 text-sm text-coral-800"
            >
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-coral-600" aria-hidden="true" />
              <span>
                Nu am putut trimite cererea. Mai încearcă o dată sau sună-ne direct la{' '}
                <a href={site.phoneHref} className="font-bold underline underline-offset-2">
                  {site.phone}
                </a>
                .
              </span>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nume" className={labelClass}>
                Nume și prenume *
              </label>
              <input
                id="nume"
                name="nume"
                type="text"
                required
                autoComplete="name"
                placeholder="ex. Maria Popescu"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="telefon" className={labelClass}>
                Telefon *
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                autoComplete="tel"
                pattern="(\+4)?0[0-9 ]{9,12}"
                title="Număr de telefon românesc, format 07xx xxx xxx"
                placeholder="ex. 07xx xxx xxx"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="ex. maria@email.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="serviciu" className={labelClass}>
              Serviciul dorit
            </label>
            <select id="serviciu" name="serviciu" defaultValue={preselected} className={`${fieldClass} h-[52px]`}>
              <option value="">Nu știu încă — vreau o consultație</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mesaj" className={labelClass}>
              Mesajul tău <span className="font-semibold text-plum-900/70">(opțional)</span>
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={4}
              placeholder="Spune-ne pe scurt cu ce te putem ajuta…"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <label htmlFor="gdpr" className="flex cursor-pointer items-start gap-3 rounded-2xl bg-plum-50 px-4 py-3.5">
            <input
              id="gdpr"
              name="gdpr"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-coral-500"
            />
            <span className="text-xs leading-relaxed text-plum-900/80">
              Am citit și sunt de acord cu{' '}
              {/* Filă nouă intenționat: navigarea în aceeași filă golea formularul completat. */}
              <a
                href="/confidentialitate"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
              >
                Politica de confidențialitate
                <span className="sr-only"> (se deschide în filă nouă)</span>
              </a>{' '}
              (GDPR). *
            </span>
          </label>

          <div className="cta-row">
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Se trimite…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" /> Trimite cererea
                </>
              )}
            </button>
            <RatingBadge />
          </div>

          <p className="text-xs leading-relaxed text-plum-900/70">
            Datele tale sunt folosite exclusiv pentru gestionarea programării. Nu trimitem spam.
          </p>
        </form>
      )}
    </div>
  )
}
