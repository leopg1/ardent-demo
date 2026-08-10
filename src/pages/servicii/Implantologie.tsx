import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import BeforeAfter from '../../components/BeforeAfter'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const probleme = [
  {
    title: 'Un singur dinte lipsă',
    text: 'Înlocuim dintele cu un implant, fără să șlefuim dinții vecini sănătoși.',
  },
  {
    title: 'Mai mulți dinți lipsă',
    text: 'Refacem zonele întinse cu lucrări protetice stabile, sprijinite pe implanturi.',
  },
  {
    title: 'Os insuficient',
    text: 'Facem adiție osoasă acolo unde osul s-a resorbit, ca implantul să aibă pe ce se sprijini.',
  },
  {
    title: 'Coroane pe implant',
    text: 'Coroane înșurubabile pe implant — fără ciment, ușor de întreținut și de verificat în timp.',
  },
]

const pasi = [
  {
    title: 'Consultație și plan de tratament',
    text: 'Examinare completă, radiografie și discuție despre opțiuni. Pleci știind exact ce urmează, în ce ordine și cât costă.',
  },
  {
    title: 'Pregătirea terenului',
    text: 'Dacă e nevoie, facem întâi extracția sau adiția osoasă. Nu grăbim etapa asta — de ea depinde tot restul.',
  },
  {
    title: 'Inserarea implantului',
    text: 'Procedura se face sub anestezie locală. Majoritatea pacienților o descriu ca fiind mai ușoară decât o extracție.',
  },
  {
    title: 'Integrarea și lucrarea finală',
    text: 'Implantul se integrează în os în 3–6 luni, apoi montăm coroana definitivă din zirconiu sau metalo-ceramică.',
  },
]

const faq = [
  {
    q: 'Doare inserarea unui implant?',
    a: 'Procedura se face cu anestezie locală, iar disconfortul de după este de obicei mic și trece cu analgezice uzuale. Pacienții noștri scriu constant în recenzii că tratamentele au decurs fără durere.',
  },
  {
    q: 'Cât durează tot procesul?',
    a: 'Inserarea propriu-zisă durează de regulă sub o oră per implant. Integrarea în os ia între 3 și 6 luni. Primești calendarul complet la consultație, înainte să începem.',
  },
  {
    q: 'Cât rezistă un implant dentar?',
    a: 'Cu igienă corectă acasă și igienizare profesională la șase luni, un implant poate rezista zeci de ani.',
  },
  {
    q: 'Pot plăti implantul în rate?',
    a: 'Da. Implanturile și reabilitările complexe se pot achita în rate flexibile, prin TBI Bank sau Banca Transilvania. Cererea se completează la noi în clinică.',
  },
]

export default function Implantologie() {
  return (
    <ServiceLayout
      slug="implantologie"
      metaTitle="Implant dentar Arad — ARdental proSmile"
      metaDescription="Implant dentar în Arad: implanturi, adiții osoase și coroane înșurubabile. Plata în rate prin TBI Bank și Banca Transilvania. ☎ 0771 582 416"
      eyebrow="Implantologie dentară"
      title={
        <>
          Implant dentar în Arad — <span className="text-coral-600">recâștigă-ți zâmbetul complet</span>
        </>
      }
      intro="Un dinte lipsă nu înseamnă doar un gol în zâmbet: în timp, afectează mestecarea, dinții vecini și osul. Implantul dentar este cea mai apropiată soluție de dintele natural — iar implantologia este unul dintre serviciile de bază ale clinicii."
      heroImage="/media/cases/profil-metalo-ceramica.jpg"
      heroImageAlt="Caz real din clinica ARdental Arad: lucrare protetică fixă finalizată, văzută din lateral"
      badge="Caz real din clinică"
      highlights={[
        'Implanturi pentru un dinte sau pentru zone întinse',
        'Adiții osoase atunci când osul nu este suficient',
        'Coroane înșurubabile pe implant, fără ciment',
        'Plata în rate prin TBI Bank și Banca Transilvania',
      ]}
      faq={faq}
      ctaTitle="Programează o consultație de implantologie"
    >
      {/* Ce rezolvăm */}
      <Reveal>
        <section aria-labelledby="implant-rezolvam">
          <h2 id="implant-rezolvam" className="h-display text-3xl md:text-4xl">
            Soluții pentru orice dinte lipsă
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {probleme.map((p, i) => (
              <div key={p.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 card-title">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-plum-900/70">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Procesul în 4 pași */}
      <Reveal>
        <section aria-labelledby="implant-proces" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="implant-proces" className="h-display text-3xl md:text-4xl">
            Drumul tău, pas cu pas
          </h2>
          <ol className="mt-7 space-y-0">
            {pasi.map((pas, i) => (
              <li key={pas.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < pasi.length - 1 && (
                  <span
                    className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-px bg-plum-200"
                    aria-hidden="true"
                  />
                )}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-600 font-display text-xl font-semibold text-white shadow-soft">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="card-title">{pas.title}</h3>
                  <p className="mt-1.5 max-w-xl text-base leading-relaxed text-plum-900/70">{pas.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* Caz real */}
      <Reveal>
        <section
          aria-labelledby="implant-caz"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[minmax(0,320px)_1fr]"
        >
          <BeforeAfter
            beforeSrc="/media/cases/caz-01-inainte.jpg"
            afterSrc="/media/cases/caz-01-dupa.jpg"
            alt="reabilitare totală cu lucrare din metalo-ceramică"
            ratioClass="aspect-[16/9]"
            className="shadow-lift"
          />
          <div>
            <p className="eyebrow !text-teal-700">Caz real din clinică</p>
            <h2 id="implant-caz" className="h-display mt-3 text-3xl md:text-4xl">
              Reabilitare orală completă
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              La prima consultație, dinții erau uzați și îngălbeniți, cu obturații vechi
              închise la culoare. A plecat cu arcada refăcută complet, printr-o lucrare din
              metalo-ceramică. Trage de cursor ca să vezi diferența.
            </p>
            <Link to="/cazuri" className="btn-secondary mt-7">
              Vezi cazurile înainte/după <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-plum-900/70">
              Caz tratat în clinica noastră, publicat cu acordul pacientului. Rezultatele
              diferă în funcție de fiecare caz.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Medicul */}
      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog · Implantologie și protetică"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la clinica ARdental din Arad"
          quote="Dacă vrei un dentist calm, profi și cu mâna ușoară, ăsta e omul."
          quoteAuthor="Alexandru Frincu, recenzie Google"
        >
          <p>
            Implantologia este unul dintre domeniile în care Dr. Bogdan Lăbășan lucrează
            constant: de la implantul pentru un singur dinte, până la reabilitări ample cu
            lucrări protetice pe implant.
          </p>
          <p>
            Fiecare caz începe cu o consultație atentă și un plan explicat pe înțeles. Același
            medic te însoțește la fiecare etapă, de la prima radiografie până la coroana
            finală.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section aria-labelledby="implant-faq">
          <h2 id="implant-faq" className="h-display text-3xl md:text-4xl">
            Întrebările pe care ni le pui cel mai des
          </h2>
          <div className="mt-7 space-y-4">
            {faq.map((item) => (
              <FaqItem key={item.q} question={item.q}>
                {item.a}
              </FaqItem>
            ))}
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
