import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const interventii = [
  {
    title: 'Extracții simple',
    text: 'Dinți care nu mai pot fi salvați, scoși cu anestezie și fără dramatism.',
  },
  {
    title: 'Extracții complexe',
    text: 'Dinți fracturați, cu rădăcini curbate sau incluși — inclusiv măsele de minte.',
  },
  {
    title: 'Adiție osoasă',
    text: 'Refacem volumul de os acolo unde s-a resorbit, ca zona să poată primi ulterior un implant.',
  },
  {
    title: 'Pregătirea pentru implant',
    text: 'Planificăm extracția gândindu-ne deja la ce urmează — nu ca la o procedură izolată.',
  },
]

const faq = [
  {
    q: 'Extracția doare?',
    a: 'Nu, se face sub anestezie locală. Disconfortul apare de obicei după, când trece anestezia, și se ține ușor sub control cu analgezicele recomandate.',
  },
  {
    q: 'Ce fac după extracție?',
    a: 'Primești indicații clare în scris: ce să mănânci, ce să eviți, cum să îngrijești zona în primele zile. Cele mai importante reguli sunt în primele 24 de ore, iar noi rămânem disponibili la telefon dacă apare ceva neașteptat.',
  },
  {
    q: 'Trebuie să scot musai măseaua de minte?',
    a: 'Nu întotdeauna. Dacă are loc suficient, a erupt corect și se poate curăța, poate rămâne. Se extrage atunci când provoacă dureri, împinge dinții vecini, se cariază repetat sau nu poate fi igienizată.',
  },
  {
    q: 'Cât aștept până pot pune implantul?',
    a: 'De regulă câteva luni, ca osul să se vindece. Dacă a fost nevoie de adiție osoasă, intervalul e mai lung. Îți spunem calendarul exact la consultație.',
  },
]

export default function ChirurgieOrala() {
  return (
    <ServiceLayout
      slug="chirurgie-orala"
      metaTitle="Extracții dentare & Chirurgie orală Arad — ARdental proSmile"
      metaDescription="Extracții simple și complexe, măsele de minte și adiții osoase în Arad. Cu anestezie și indicații clare după intervenție. ☎ 0771 582 416"
      eyebrow="Chirurgie orală"
      title={
        <>
          Extracții și chirurgie orală — <span className="text-coral-600">calm și fără surprize</span>
        </>
      }
      intro="Extracția este ultima opțiune, nu prima. Dar când un dinte nu mai poate fi salvat, e mai bine să fie scos la timp decât ținut cu orice preț — mai ales dacă întreține o infecție. Lucrăm cu anestezie și îți explicăm dinainte fiecare pas."
      heroImage="/media/clinic/chirurgie-echipa.jpg"
      heroImageAlt="Echipa ARdental în timpul unei intervenții de chirurgie orală, lucrând în patru mâini"
      badge="Echipa noastră, la lucru"
      highlights={[
        'Extracții simple și complexe, inclusiv măsele de minte',
        'Adiții osoase pentru pregătirea implanturilor',
        'Anestezie locală și indicații scrise pentru acasă',
        'Planificăm extracția gândindu-ne la ce urmează după',
      ]}
      faq={faq}
      ctaTitle="Programează o consultație"
    >
      <Reveal>
        <section aria-labelledby="chir-interventii">
          <h2 id="chir-interventii" className="h-display text-3xl md:text-4xl">
            Ce intervenții facem
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {interventii.map((i2, i) => (
              <div key={i2.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 card-title">{i2.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-plum-900/70">{i2.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby="chir-amanare" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="chir-amanare" className="h-display text-3xl md:text-4xl">
            Ce se întâmplă dacă amâni
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            Un dinte compromis, ținut cu orice preț, întreține o infecție care se extinde în
            os și poate ajunge la dinții vecini. Extracția făcută la timp păstrează mai mult
            os sănătos — exact osul de care e nevoie mai târziu pentru un implant.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            În plus, după pierderea unui dinte osul din zonă începe să se resoarbă, iar dinții
            vecini se înclină spre spațiul gol. De aceea discutăm despre înlocuire încă din
            momentul extracției.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog"
          photo="/media/team/dr-labasan-la-lucru.jpg"
          photoAlt="Dr. Bogdan Lăbășan lucrând în cabinetul ARdental din Arad"
          quote="M-a tratat cu respect, răbdare și empatie — calități rare, dar esențiale în meseria aceasta."
          quoteAuthor="Bianca Gligor, recenzie Facebook"
        >
          <p>
            Pentru mulți pacienți, extracția este exact procedura de care se tem cel mai
            tare. Nu grăbim nimic: explicăm pas cu pas, verificăm anestezia înainte să
            începem și ne oprim ori de câte ori e nevoie.
          </p>
          <p>
            După intervenție rămânem disponibili la telefon — dacă apare ceva neobișnuit în
            primele zile, vrem să aflăm de la tine, nu peste o săptămână.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="chir-faq">
          <h2 id="chir-faq" className="h-display text-3xl md:text-4xl">
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
