import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const pasi = [
  {
    title: 'Detartraj ultrasonic',
    text: 'Îndepărtează tartrul și placa bacteriană, inclusiv de sub marginea gingiei, acolo unde periuța nu ajunge.',
  },
  {
    title: 'AirFlow',
    text: 'Un jet fin de pulbere și apă care elimină petele și depunerile subțiri de pe suprafața dintelui.',
  },
  {
    title: 'Periaj profesional',
    text: 'Netezește suprafața dinților și reduce bacteriile — pe un dinte neted, placa se depune mai greu.',
  },
]

const semne = [
  'Respirație neplăcută persistentă',
  'Depuneri vizibile de tartru, mai ales în zona gingiilor',
  'Sângerare gingivală la periaj sau spontan',
  'Gingii sensibile, roșii ori inflamate',
  'Retracție gingivală',
  'Pete pe dinți cauzate de cafea, ceai sau tutun',
  'Senzația de dinți „aspri” sau încărcați',
]

const faq = [
  {
    q: 'Pot să îmi îndepărtez singur tartrul acasă?',
    a: 'Nu. Odată format, tartrul aderă ferm la suprafața dintelui și poate fi eliminat doar cu instrumente profesionale, utilizate de medicul stomatolog. Încercarea de a-l îndepărta acasă poate duce la zgârierea smalțului, retracție gingivală și inflamații. Periajul zilnic și ața dentară previn formarea tartrului, dar nu îl pot elimina după ce s-a format.',
  },
  {
    q: 'Igiena de acasă nu este suficientă?',
    a: 'Igiena orală zilnică este esențială, însă nu poate înlocui igienizarea profesională. Periajul și ața dentară îndepărtează placa bacteriană de la suprafață, dar tartrul deja format nu poate fi eliminat în siguranță acasă.',
  },
  {
    q: 'Se albesc dinții după igienizare?',
    a: 'Igienizarea nu este un tratament de albire, însă dinții pot părea mai albi, pentru că se îndepărtează tartrul, placa și petele superficiale. Rezultatul este un zâmbet mai curat și mai luminos, cu aspect natural. Pentru o schimbare reală de culoare este necesar un tratament de albire dedicat.',
  },
  {
    q: 'Cafeaua sau sucurile acidulate înainte de detartraj sunt o problemă?',
    a: 'Nu reprezintă o contraindicație — detartrajul se poate face fără probleme. Pe termen lung însă, consumul frecvent de cafea, tutun și sucuri acidulate afectează smalțul și favorizează apariția petelor și a sensibilității.',
  },
  {
    q: 'Cât de des trebuie făcută?',
    a: 'De regulă, o dată la șase luni. Este cel mai ieftin tratament din stomatologie și cel care previne cele mai multe probleme costisitoare de mai târziu.',
  },
]

export default function Igienizare() {
  return (
    <ServiceLayout
      slug="igienizare"
      metaTitle="Igienizare profesională & Detartraj Arad — ARdental proSmile"
      metaDescription="Detartraj ultrasonic, AirFlow și periaj profesional în Arad. Igienizare completă în trei pași, o dată la șase luni. ☎ 0771 582 416"
      eyebrow="Profilaxie"
      title={
        <>
          Igienizare profesională — <span className="text-coral-600">cel mai ieftin tratament din stomatologie</span>
        </>
      }
      intro="O igienizare la șase luni previne aproape tot ce urmează după: carii, gingii inflamate, tratamente de canal, extracții. Nu înseamnă doar un simplu detartraj — este un proces în trei pași, făcut cap-coadă."
      heroImage="/media/services/igienizare-lucru.jpg"
      heroImageAlt="Igienizare profesională în curs, în cabinetul ARdental din Arad"
      heroImageClassName="object-top"
      highlights={[
        'Detartraj ultrasonic, AirFlow și periaj profesional',
        'Recomandată o dată la șase luni',
        'Previne cariile și inflamațiile gingivale',
        'Baza pe care se sprijină orice lucrare estetică',
      ]}
      ctaTitle="Programează-ți igienizarea"
      ctaText="O ședință, o dată la șase luni. Restul stomatologiei devine mult mai simplu."
    >
      <Reveal>
        <section aria-labelledby="igiena-pasi">
          <h2 id="igiena-pasi" className="h-display text-3xl md:text-4xl">
            Cei trei pași ai unei igienizări corecte
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            Igienizarea profesională nu înseamnă doar un simplu detartraj. Este un proces
            realizat în mai mulți pași, esențial pentru sănătatea dinților și a gingiilor.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3 lg:gap-8">
            {pasi.map((pas, i) => (
              <div key={pas.title} className="card-surface card-pad-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-600 font-display text-xl font-semibold text-white shadow-soft">
                  {i + 1}
                </span>
                <h3 className="card-title mt-5">{pas.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">{pas.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby="igiena-semne" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="igiena-semne" className="h-display text-3xl md:text-4xl">
            Semne că ai nevoie de o igienizare
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            Chiar dacă te speli zilnic pe dinți, pot apărea situații în care igiena de acasă nu
            mai este suficientă:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {semne.map((s) => (
              <li key={s} className="flex items-start gap-3 text-base leading-relaxed text-plum-900/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section
          aria-labelledby="igiena-sterilizare"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[minmax(0,300px)_1fr]"
        >
          <img
            src="/media/clinic/sterilizare.jpg"
            alt="Instrumentar dentar pregătit și dezinfectat în cabinetul ARdental"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <p className="eyebrow !text-teal-600">Siguranță</p>
            <h2 id="igiena-sterilizare" className="h-display mt-3 text-3xl md:text-4xl">
              Curățare, dezinfectare, sterilizare
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              Igienizarea și sterilizarea corectă a echipamentelor medicale sunt esențiale
              pentru siguranța fiecărui pacient. Aceste procese previn transmiterea
              infecțiilor și asigură desfășurarea actului medical în condiții controlate.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              Respectăm strict protocoalele, cu proceduri conforme standardelor medicale
              actuale — pentru fiecare instrument, de fiecare dată.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog · Profilaxie și tratamente de bază"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la ARdental Arad"
        >
          <p>
            Periajul corect nu ține doar de frecvență, ci mai ales de tehnică: de două ori pe
            zi, minimum două minute, cu o periuță adaptată și mișcări blânde, dinspre gingie
            spre dinte.
          </p>
          <p>
            La fiecare igienizare îți arătăm exact unde rămâne placa la tine — fiecare gură
            are punctele ei slabe, iar tehnica se corectează în cinci minute.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="igiena-faq">
          <h2 id="igiena-faq" className="h-display text-3xl md:text-4xl">
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
