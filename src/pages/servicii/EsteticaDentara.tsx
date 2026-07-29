import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import BeforeAfter from '../../components/BeforeAfter'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const solutii = [
  {
    title: 'Fațete dentare',
    text: 'Lamele fine aplicate pe fața vizibilă a dintelui — schimbă forma, culoarea și alinierea, cu un aspect natural.',
  },
  {
    title: 'Albire profesională',
    text: 'Deschide cu câteva nuanțe culoarea dinților. Se face doar după ce sănătatea dentară este stabilă.',
  },
  {
    title: 'Reconstrucții estetice',
    text: 'Refacem dinții ciobiți sau uzați, ca să nu se mai deosebească de cei naturali.',
  },
  {
    title: 'Transformare completă',
    text: 'Când sunt mai mulți dinți de refăcut, planificăm întreaga zonă frontală ca un tot unitar.',
  },
]

const faq = [
  {
    q: 'Se albesc dinții după igienizare?',
    a: 'Igienizarea profesională nu este un tratament de albire, însă dinții pot părea mai albi după procedură, pentru că se îndepărtează tartrul, placa bacteriană și petele superficiale de la cafea, ceai sau tutun. Pentru o schimbare reală de culoare este necesar un tratament de albire dedicat.',
  },
  {
    q: 'Fațetele arată artificial?',
    a: 'Nu, dacă sunt planificate corect. Alegem forma și nuanța împreună cu tine, ținând cont de trăsăturile feței și de dinții naturali rămași — scopul este un zâmbet care să pară al tău, nu unul „pus”.',
  },
  {
    q: 'Cât rezistă o albire?',
    a: 'Depinde mult de obiceiuri: cafeaua, ceaiul negru, vinul roșu și tutunul repigmentează dinții în timp. Cu igienizare profesională regulată, rezultatul se menține considerabil mai mult.',
  },
  {
    q: 'Pot plăti în rate o lucrare estetică?',
    a: 'Da. Fațetele și lucrările estetice ample se pot achita în rate flexibile, prin TBI Bank sau Banca Transilvania.',
  },
]

export default function EsteticaDentara() {
  return (
    <ServiceLayout
      slug="estetica-dentara"
      metaTitle="Fațete dentare & Albire Arad — ARdental proSmile"
      metaDescription="Fațete dentare, albire profesională și reconstrucții estetice în Arad. Rezultate naturale, planificate împreună cu tine. ☎ 0771 582 416"
      eyebrow="Estetică dentară"
      title={
        <>
          Fațete și albire — <span className="text-coral-600">un zâmbet care arată natural</span>
        </>
      }
      intro="Estetica dentară nu înseamnă dinți nefiresc de albi. Înseamnă un zâmbet echilibrat, potrivit cu fața ta, pe care să nu-l mai ascunzi în poze. Lucrăm cu fațete, albire profesională și reconstrucții estetice — separat sau împreună, în funcție de ce ai nevoie."
      heroImage="/media/services/zambet-estetica.jpg"
      heroImageAlt="Zâmbet luminos și natural după un tratament de estetică dentară"
      highlights={[
        'Fațete dentare cu aspect natural',
        'Albire profesională, după stabilizarea sănătății dentare',
        'Reconstrucții pentru dinți ciobiți sau uzați',
        'Planificare împreună cu tine, înainte să începem',
      ]}
      ctaTitle="Programează o consultație de estetică dentară"
    >
      <Reveal>
        <section aria-labelledby="estetica-solutii">
          <h2 id="estetica-solutii" className="h-display text-3xl md:text-4xl">
            Ce putem face pentru zâmbetul tău
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {solutii.map((s, i) => (
              <div key={s.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 card-title">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          aria-labelledby="estetica-caz"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[minmax(0,320px)_1fr]"
        >
          <BeforeAfter
            beforeSrc="/media/cases/ba-inainte.jpg"
            afterSrc="/media/cases/ba-dupa.jpg"
            alt="transformare estetică a zâmbetului"
            ratioClass="aspect-[16/9]"
            className="shadow-lift"
          />
          <div>
            <p className="eyebrow !text-teal-600">Caz real din clinică</p>
            <h2 id="estetica-caz" className="h-display mt-3 text-3xl md:text-4xl">
              Înainte și după
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              Același pacient, aceeași încadratură. Sus, dinți uzați și pătați, cu obturații
              vechi vizibile. Jos, rezultatul după refacerea completă a zonei frontale.
            </p>
            <Link to="/cazuri" className="btn-secondary mt-7">
              Vezi toate cazurile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog · Estetică dentară și protetică"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la ARdental Arad"
          quote="Mi-am pus dinții la punct și… surpriză: NU mi-am pierdut nici capul, nici portofelul, nici nervii!"
          quoteAuthor="Alexandru Frincu, recenzie Google"
        >
          <p>
            Lucrările estetice se planifică înainte să se execute. Discutăm forma, nuanța și
            proporțiile, iar tu știi la ce să te aștepți încă de la prima ședință.
          </p>
          <p>
            Regula casei: estetica vine după sănătate. Dacă există carii, tartru sau probleme
            gingivale, le rezolvăm întâi — altfel, lucrarea frumoasă stă pe un teren
            nesigur.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="estetica-faq">
          <h2 id="estetica-faq" className="h-display text-3xl md:text-4xl">
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
