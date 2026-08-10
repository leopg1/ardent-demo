import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const optiuni = [
  {
    title: 'Aparat dentar fix',
    text: 'Soluția clasică pentru corecții ample: rezolvă înghesuirile, spațierile și problemele de mușcătură.',
  },
  {
    title: 'Inman Aligner',
    text: 'Un aparat detașabil, gândit pentru corecții rapide ale dinților din față. Se poartă câteva ore pe zi.',
  },
  {
    title: 'Contenția după tratament',
    text: 'După ce dinții ajung în poziția corectă, contenția îi ține acolo. Fără ea, revin în timp.',
  },
]

const motive = [
  'Dinții înghesuiți se curăță greu — placa rămâne în locurile la care periuța nu ajunge',
  'Mușcătura incorectă uzează smalțul neuniform, an după an',
  'Spațiile dintre dinți se pot mări în timp, dacă dinții migrează',
  'Un tratament estetic pe dinți nealiniați e o soluție de suprafață',
]

const faq = [
  {
    q: 'Cât durează un tratament ortodontic?',
    a: 'Depinde mult de situație. Corecțiile limitate la zona frontală, cu Inman Aligner, se rezolvă în câteva luni. Tratamentele complete cu aparat fix durează, de regulă, între unu și doi ani. Primești estimarea la consultație, după examinare.',
  },
  {
    q: 'Ce este Inman Aligner?',
    a: 'Este un aparat detașabil care corectează rapid dinții din față, folosind două arcuri care împing dintele din ambele direcții. Se potrivește pentru înghesuiri sau spațieri limitate la zona frontală — nu pentru probleme complexe de mușcătură.',
  },
  {
    q: 'Se poate face ortodonție la orice vârstă?',
    a: 'Da, dinții se pot deplasa la orice vârstă, atât timp cât osul și gingiile sunt sănătoase. Condiția e ca eventualele probleme de carii sau parodontale să fie rezolvate înainte.',
  },
  {
    q: 'Trebuie să fac igienizare înainte?',
    a: 'Da. Orice tratament ortodontic începe după ce gura e curată și fără carii — altfel, aparatul doar îngreunează igiena și accelerează problemele.',
  },
]

export default function Ortodontie() {
  return (
    <ServiceLayout
      slug="ortodontie"
      metaTitle="Aparat dentar & Ortodonție Arad — ARdental proSmile"
      metaDescription="Aparate dentare și Inman Aligner în Arad. Corecții pentru dinți înghesuiți sau spațiați, la orice vârstă. ☎ 0771 582 416"
      eyebrow="Ortodonție"
      title={
        <>
          Aparate dentare — <span className="text-coral-600">dinți drepți, la orice vârstă</span>
        </>
      }
      intro="Dinții strâmbi nu sunt doar o chestiune de aspect: se curăță mai greu, se uzează neuniform și complică orice lucrare ulterioară. Lucrăm cu aparate dentare clasice și cu Inman Aligner, pentru corecțiile rapide din zona din față."
      heroImage="/media/services/zambet-femeie.jpg"
      heroImageAlt="Pacientă zâmbind, cu dinți aliniați, după un tratament ortodontic"
      highlights={[
        'Aparate dentare fixe pentru corecții complete',
        'Inman Aligner pentru zona frontală',
        'Contenție după tratament, ca rezultatul să rămână',
        'Tratament posibil la orice vârstă',
      ]}
      faq={faq}
      ctaTitle="Programează o consultație de ortodonție"
    >
      <Reveal>
        <section aria-labelledby="orto-optiuni">
          <h2 id="orto-optiuni" className="h-display text-3xl md:text-4xl">
            Ce opțiuni ai
          </h2>
          <div className="mt-7 grid gap-6 md:grid-cols-3 lg:gap-8">
            {optiuni.map((o, i) => (
              <div key={o.title} className="card-surface card-pad-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-600 font-display text-xl font-semibold text-white shadow-soft">
                  {i + 1}
                </span>
                <h3 className="card-title mt-5">{o.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">{o.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby="orto-motive" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="orto-motive" className="h-display text-3xl md:text-4xl">
            De ce contează alinierea, dincolo de estetică
          </h2>
          <ul className="mt-6 space-y-3.5">
            {motive.map((m) => (
              <li key={m} className="flex items-start gap-3 text-base leading-relaxed text-plum-900/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la ARdental Arad"
        >
          <p>
            La prima consultație stabilim dacă situația ta se rezolvă cu o corecție limitată
            sau are nevoie de un tratament ortodontic complet — și îți spunem sincer care
            dintre ele are sens în cazul tău.
          </p>
          <p>
            Ortodonția e un drum lung, așa că merită început corect: cu gura curată, fără
            carii și cu un plan clar de la bun început.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="orto-faq">
          <h2 id="orto-faq" className="h-display text-3xl md:text-4xl">
            Întrebări frecvente
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
