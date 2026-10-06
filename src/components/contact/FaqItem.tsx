import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = {
  question: string
  children: ReactNode
}

/** Element de acordeon accesibil pe <details>/<summary>, în stilul ARdental. */
export default function FaqItem({ question, children }: Props) {
  return (
    <details className="group card-surface overflow-hidden transition hover:border-plum-200">
      {/* Întrebarea e titlu (h3), nu doar text îngroșat: cititoarele de ecran navighează
          lista de FAQ prin titluri, iar altfel tot blocul apare ca o singură secțiune. */}
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3 className="flex items-center justify-between gap-4 px-6 py-5 text-base font-bold leading-snug text-plum-950">
          {question}
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum-600 transition duration-300 group-open:rotate-180 group-open:bg-coral-50 group-open:text-coral-600"
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </h3>
      </summary>
      <div className="border-t border-plum-100 px-6 pb-6 pt-4 text-base leading-relaxed text-plum-900/75">
        {children}
      </div>
    </details>
  )
}
