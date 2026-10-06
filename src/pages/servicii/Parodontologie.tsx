import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const semne = [
  'Gingii care sângerează la periaj sau spontan',
  'Gingii roșii, umflate sau sensibile',
  'Retracție gingivală — dinții par „mai lungi”',
  'Respirație neplăcută care revine repede',
  'Dinți care se simt mobili',
  'Sensibilitate la nivelul coletului dintelui',
]

const etape = [
  {
    title: 'Evaluare parodontală',
    text: 'Verificăm starea gingiilor și a osului din jurul fiecărui dinte, ca să știm cât de avansată e problema.',
  },
  {
    title: 'Igienizare și detartraj profund',
    text: 'Îndepărtăm tartrul de deasupra și de sub marginea gingiei — sursa inflamației.',
  },
  {
    title: 'Tratament parodontal',
    text: 'Curățarea pungilor parodontale și tratament local, acolo unde inflamația a avansat.',
  },
  {
    title: 'Menținere',
    text: 'Controale mai dese și igienizări regulate. Parodontoza nu se vindecă definitiv, dar se ține sub control.',
  },
]

const faq = [
  {
    q: 'Sângerarea gingiilor e normală?',
    a: 'Nu. O gingie sănătoasă nu sângerează la periaj. Sângerarea este primul semn de inflamație și, în stadiul acesta, se rezolvă de cele mai multe ori doar cu o igienizare profesională și cu corectarea tehnicii de periaj.',
  },
  {
    q: 'Se poate opri retracția gingivală?',
    a: 'Retracția deja produsă nu se întoarce de la sine, dar procesul poate fi oprit. Cu cât se intervine mai devreme, cu atât se păstrează mai mult din osul și gingia din jurul dintelui.',
  },
  {
    q: 'Pot pierde dinți din cauza gingiilor?',
    a: 'Da. Boala parodontală afectează osul care susține dintele — dinții devin mobili și, în stadii avansate, se pierd, chiar dacă nu au nicio carie. De aceea gingiile sângerânde nu trebuie ignorate.',
  },
  {
    q: 'Cât de des trebuie să vin la control?',
    a: 'Pentru pacienții cu probleme parodontale, recomandarea obișnuită este la 3–4 luni, în loc de 6. Îți stabilim intervalul potrivit după evaluare.',
  },
]

export default function Parodontologie() {
  return (
    <ServiceLayout
      slug="parodontologie"
      metaTitle="Parodontologie Arad — tratament gingii — ARdental proSmile"
      metaDescription="Tratamente parodontale în Arad: gingii care sângerează, retracție gingivală, dinți mobili. Diagnostic și plan de menținere. ☎ 0771 582 416"
      eyebrow="Parodontologie"
      title={
        <>
          Gingii sănătoase — <span className="text-coral-600">temelia dinților tăi</span>
        </>
      }
      intro="Se pot pierde dinți perfect sănătoși, fără nicio carie, doar pentru că gingia și osul din jurul lor s-au retras. Boala parodontală avansează lent și fără durere — de aceea primele semne merită luate în serios."
      heroImage="/media/services/zambet-prim-plan.jpg"
      heroImageAlt="Zâmbet sănătos, cu gingii îngrijite"
      highlights={[
        'Evaluare completă a stării gingiilor și a osului',
        'Detartraj profund, deasupra și sub marginea gingiei',
        'Tratament pentru pungile parodontale',
        'Plan de menținere, cu controale mai dese',
      ]}
      faq={faq}
      ctaTitle="Îți sângerează gingiile? Programează o evaluare"
    >
      <Reveal>
        <section aria-labelledby="paro-semne" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="paro-semne" className="h-display text-3xl md:text-4xl">
            Semnele care nu trebuie ignorate
          </h2>
          {/* role="list": preflight-ul Tailwind pune list-style: none, iar Safari/VoiceOver
              scoate atunci rolul de listă — se pierde numărul semnelor de alarmă. */}
          <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
            {semne.map((s) => (
              <li key={s} className="flex items-start gap-3 text-base leading-relaxed text-plum-900/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plum-900/70">
            Boala parodontală nu doare până târziu. Când începe să doară sau când dintele se
            mișcă, o parte din os este deja pierdută.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby="paro-etape">
          <h2 id="paro-etape" className="h-display text-3xl md:text-4xl">
            Cum tratăm
          </h2>
          {/* Idem: aici ordinea etapelor e chiar sensul listei. */}
          <ol role="list" className="mt-7 space-y-0">
            {etape.map((e, i) => (
              <li key={e.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < etape.length - 1 && (
                  <span
                    className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-px bg-plum-200"
                    aria-hidden="true"
                  />
                )}
                {/* lining-nums: Cormorant are implicit cifre old-style („1" arată ca un I,
                    „3" și „4" coboară sub linia de bază), deci bulinele apăreau nealiniate.
                    aria-hidden: cifra dublează poziția anunțată oricum de <ol>. */}
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-600 font-display text-xl font-semibold lining-nums text-white shadow-soft"
                >
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="card-title">{e.title}</h3>
                  <p className="mt-1.5 max-w-xl text-base leading-relaxed text-plum-900/70">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
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
            Cele mai multe cazuri de gingii inflamate se opresc din evoluție cu o igienizare
            profesională corectă și cu o tehnică de periaj ajustată. Problema apare când se
            amână.
          </p>
          <p>
            Îți arătăm concret unde se depune placa la tine și cum să ajungi acolo acasă —
            pentru că tratamentul parodontal se câștigă în cea mai mare parte între vizite.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="paro-faq">
          <h2 id="paro-faq" className="h-display text-3xl md:text-4xl">
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
