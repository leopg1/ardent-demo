import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LINK_PATHS } from '../../lib/blog'

/**
 * Randează un paragraf de articol, transformând tokenurile {{link:SLUG:text}}
 * în <Link> către paginile interne. Tokenurile cu SLUG necunoscut cad înapoi
 * pe textul simplu — un articol greșit nu poate produce un link rupt.
 */
export default function RichParagraph({ text, className }: { text: string; className?: string }) {
  const parts: ReactNode[] = []
  const re = /\{\{link:([a-z-]+):([^}]+)\}\}/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const [, slug, label] = m
    const to = LINK_PATHS[slug]
    parts.push(
      to ? (
        <Link
          key={`${slug}-${m.index}`}
          to={to}
          className="font-semibold text-coral-600 underline decoration-coral-300 underline-offset-2 transition hover:text-coral-700"
        >
          {label}
        </Link>
      ) : (
        label
      ),
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <p className={className}>{parts}</p>
}
