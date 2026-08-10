import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  /** Pentru conținutul din prima vizibilă (hero): randează vizibil instant, fără flash/LCP întârziat. */
  initialVisible?: boolean
}

/**
 * Fade-in + slide-up la intrarea în viewport — CSS pur + IntersectionObserver
 * (fără framer-motion). Respectă prefers-reduced-motion; animație scurtă,
 * ca secțiunile să nu pară goale la scroll rapid.
 */
/**
 * Citit sincron, ÎNAINTE de primul paint: dacă l-am fi verificat abia în useEffect,
 * blocul ar fi pornit la opacity 0 + translateY și ar fi animat oricum tranziția
 * spre starea vizibilă — exact mișcarea pe care setarea o refuză.
 */
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Reveal({ children, delay = 0, className, y = 24, initialVisible = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [reduced] = useState(prefersReducedMotion)
  const [visible, setVisible] = useState(initialVisible || reduced)

  useEffect(() => {
    if (initialVisible || reduced) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -36px 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [initialVisible, reduced])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: reduced
          ? 'none'
          : `opacity 0.5s ease-out ${delay}s, transform 0.55s cubic-bezier(0.21, 0.65, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
