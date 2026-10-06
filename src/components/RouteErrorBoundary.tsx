import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { site } from '../lib/site'

type Props = { children: ReactNode }
type State = { aEșuat: boolean }

/**
 * Plasă de siguranță pentru rutele încărcate leneș (React.lazy).
 *
 * Cazul real: un vizitator ține pagina deschisă, se face un deploy nou, iar el
 * navighează mai departe. Fișierele vechi de JavaScript nu mai există pe server,
 * importul leneș eșuează și pagina rămâne complet albă — fără niciun mesaj.
 * Pentru o clinică, un ecran alb înseamnă un pacient pierdut, nu o eroare tehnică.
 *
 * Aici prindem eroarea și oferim două ieșiri: reîncărcarea paginii (care rezolvă
 * cazul de mai sus, fiindcă aduce fișierele noi) și numărul de telefon.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { aEșuat: false }

  static getDerivedStateFromError(): State {
    return { aEșuat: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Fără serviciu de raportare deocamdată; consola rămâne singura urmă.
    console.error('Eroare la încărcarea paginii:', error, info.componentStack)
  }

  render() {
    if (!this.state.aEșuat) return this.props.children

    return (
      <section className="section-pad">
        <div className="container-site mx-auto max-w-xl text-center">
          <h1 className="h-display text-3xl md:text-4xl">Pagina nu s-a încărcat complet</h1>
          <p className="mt-5 text-base leading-relaxed text-plum-900/75">
            Se întâmplă de obicei după o actualizare a site-ului, dacă pagina a stat mult timp
            deschisă. O reîncărcare rezolvă aproape întotdeauna problema.
          </p>
          <div className="cta-row mt-8 justify-center">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary max-sm:w-full"
            >
              Reîncarcă pagina
            </button>
            <a href={site.phoneHref} className="btn-secondary max-sm:w-full">
              Sună-ne: <span className="whitespace-nowrap">{site.phone}</span>
            </a>
          </div>
        </div>
      </section>
    )
  }
}
