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
export default function Reveal({ children, delay = 0, className, y = 24, initialVisible = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(initialVisible)

  useEffect(() => {
    if (initialVisible) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
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
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.55s cubic-bezier(0.21, 0.65, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
