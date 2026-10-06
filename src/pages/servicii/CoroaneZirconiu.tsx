import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const optiuni = [
  {
    title: 'Coroane din zirconiu',
    text: 'Rezistente și translucide, fără margine metalică. Sunt alegerea potrivită mai ales în zona vizibilă.',
  },
  {
    title: 'Coroane metalo-ceramice',
    text: 'Soluția clasică, verificată în timp, cu un raport bun între rezistență și cost.',
  },
  {
    title: 'Punți dentare',
    text: 'Când lipsesc unul sau mai mulți dinți alăturați, puntea reface continuitatea arcadei.',
  },
  {
    title: 'Proteze',
    text: 'Pentru situațiile în care lucrarea fixă nu este posibilă, protezele refac funcția și aspectul.',
  },
]

const faq = [
  {
    q: 'Zirconiu sau metalo-ceramică?',
    a: 'Zirconiul are un aspect mai natural, fiindcă nu are schelet metalic care să lase o umbră gri la nivelul gingiei. Metalo-ceramica rămâne o soluție solidă și mai accesibilă. Alegem împreună, în funcție de zonă, de aspectul dorit și de buget.',
  },
  {
    q: 'De ce se vede o linie gri lângă gingie la coroanele vechi?',
    a: 'Este marginea metalică a coroanei, care devine vizibilă pe măsură ce gingia se retrage. Coroanele din zirconiu nu au acest schelet metalic, deci nu apare umbra.',
  },
  {
    q: 'Cât rezistă o coroană?',
    a: 'Cu igienă corectă și controale periodice, o coroană bine făcută ține mulți ani. Important este să verificăm periodic și dintele de sub ea — sub o coroană veche se poate dezvolta o carie secundară.',
  },
  {
    q: 'Se poate plăti în rate?',
    a: 'Da, lucrările protetice ample se pot achita în rate flexibile, prin TBI Bank sau Banca Transilvania.',
  },
]

export default function CoroaneZirconiu() {
  return (
    <ServiceLayout
      slug="coroane-zirconiu"
      metaTitle="Coroane zirconiu & Protetică Arad — ARdental proSmile"
      metaDescription="Coroane din zirconiu și metalo-ceramice, punți și proteze dentare în Arad. Rezistență și estetică. Plata în rate. ☎ 0771 582 416"
      eyebrow="Protetică dentară"
      title={
        <>
          Coroane și lucrări protetice — <span className="text-coral-600">solide și discrete</span>
        </>
      }
      intro="O coroană bine făcută nu se observă. Refacem dinții distruși de carii sau fracturi cu coroane din zirconiu ori metalo-ceramice, punți și proteze — alese împreună cu tine, în funcție de zonă și de ce îți dorești."
      heroImage="/media/cases/zambet-metalo-ceramica.jpg"
      heroImageAlt="Caz real ARdental Arad: lucrare din metalo-ceramică finalizată — dinți albi, aliniați, cu aspect natural"
      badge="Caz real din clinică"
      highlights={[
        'Coroane din zirconiu, fără margine metalică vizibilă',
        'Coroane metalo-ceramice pentru un buget mai strâns',
        'Punți dentare și proteze',
        'Coroane înșurubabile pe implant',
      ]}
      faq={faq}
      ctaTitle="Programează o consultație de protetică"
    >
      <Reveal>
        <section aria-labelledby="protetica-optiuni">
          <h2 id="protetica-optiuni" className="h-display text-3xl md:text-4xl">
            Ce lucrări facem
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {optiuni.map((o, i) => (
              <div key={o.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 card-title">{o.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-plum-900/70">{o.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          aria-labelledby="protetica-atentie"
          className="rounded-3xl bg-plum-50 card-pad-lg"
        >
          <h2 id="protetica-atentie" className="h-display text-3xl md:text-4xl">
            Atenție la coroanele vechi
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            O coroană poate arăta întreagă la exterior și, în același timp, să ascundă o carie
            secundară dedesubt. De aceea, la fiecare control verificăm și lucrările existente,
            nu doar dinții naturali. Semnele care ne pun în alertă: o linie gri apărută la
            nivelul gingiei, sensibilitate la rece sau la masticație, sau o margine care „se
            simte” cu limba.
          </p>
          <img
            src="/media/services/coroane-comparatie.jpg"
            alt="Comparație între o lucrare protetică veche și una nouă, pe machete dentare"
            loading="lazy"
            width={900}
            height={783}
            className="mt-7 aspect-[900/783] w-full max-w-lg rounded-3xl object-cover shadow-soft"
          />
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog · Protetică și implantologie"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la ARdental Arad"
        >
          <p>
            Protetica înseamnă răbdare la detalii: o margine bine închisă și un contact corect
            cu dinții vecini fac diferența dintre o lucrare care ține ani buni și una care
            trebuie refăcută.
          </p>
          <p>
            Îți explicăm dinainte diferența dintre materiale și ce presupune fiecare, ca să
            alegi în cunoștință de cauză — nu pe baza unui nume comercial.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="protetica-faq">
          <h2 id="protetica-faq" className="h-display text-3xl md:text-4xl">
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
