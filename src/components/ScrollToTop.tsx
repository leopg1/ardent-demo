import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Cât timp așteptăm apariția ancorei pe o rută lazy, înainte să renunțăm. */
const ANCHOR_TIMEOUT_MS = 2000

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    if (hash) {
      // Ruta e lazy: la prima încărcare a lui /contact#formular elementul încă nu
      // există la primul frame. Reîncercăm scurt până apare, cu fallback în sus.
      const id = hash.slice(1)
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const deadline = performance.now() + ANCHOR_TIMEOUT_MS
      let raf = 0

      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
          return
        }
        if (performance.now() < deadline) {
          raf = requestAnimationFrame(tryScroll)
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
        }
      }

      raf = requestAnimationFrame(tryScroll)
      return () => cancelAnimationFrame(raf)
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

    // La navigarea SPA, mutăm focusul pe conținut: altfel rămâne pe linkul din
    // Header/Footer, iar cititoarele de ecran nu anunță că s-a schimbat pagina.
    // Sărim peste primul render, ca să nu furăm focusul la încărcarea inițială.
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    document.getElementById('continut')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}
