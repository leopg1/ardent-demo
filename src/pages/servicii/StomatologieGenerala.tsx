import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const servicii = [
  {
    title: 'Consultația',
    text: 'Examinare completă, radiografie dacă e nevoie și un plan de tratament explicat pe înțeles, cu costurile puse pe masă.',
  },
  {
    title: 'Carii și obturații',
    text: 'Tratăm caria și refacem dintele cu materiale fizionomice, potrivite la culoare cu dintele natural.',
  },
  {
    title: 'Urgențe',
    text: 'Durere apărută peste noapte, un dinte spart, o lucrare căzută — sună-ne și găsim cel mai apropiat loc liber.',
  },
  {
    title: 'Controale periodice',
    text: 'O dată la șase luni, împreună cu igienizarea. Aici se prind problemele cât sunt încă mici.',
  },
]

const faq = [
  {
    q: 'Nu am mai fost la dentist de ani buni. E prea târziu?',
    a: 'Nu. Primim frecvent pacienți care au amânat mult și le e teamă de reproșuri. Nu judecăm pe nimeni — ne uităm la situația de azi și construim un plan realist, în etape, începând cu ce e mai urgent.',
  },
  {
    q: 'O carie mică poate aștepta?',
    a: 'Nu merită. O carie mică ignorată ajunge la nerv, apoi la os. Ce se rezolva printr-o plombă simplă ajunge tratament de canal sau chiar extracție.',
  },
  {
    q: 'Cât durează o consultație?',
    a: 'De regulă între 30 și 45 de minute — suficient cât să examinăm tot, nu doar dintele care te supără, și să discutăm planul.',
  },
  {
    q: 'Cum îmi dau seama că am nevoie de control?',
    a: 'Ideal, nu aștepți semne: mergi la șase luni. Dar sensibilitatea la rece sau dulce, sângerarea gingiilor, respirația neplăcută persistentă și orice durere sunt motive să suni mai devreme.',
  },
]

export default function StomatologieGenerala() {
  return (
    <ServiceLayout
      slug="stomatologie-generala"
      metaTitle="Stomatologie generală Arad — ARdental proSmile"
      metaDescription="Consultații, tratamentul cariilor, obturații și urgențe dentare în Arad. Stomatologia de zi cu zi, făcută ca la carte. ☎ 0771 582 416"
      eyebrow="Stomatologie generală"
      title={
        <>
          Stomatologia de zi cu zi — <span className="text-coral-600">făcută ca la carte</span>
        </>
      }
      intro="Consultații, carii, plombe, o durere apărută peste noapte. Nu e partea spectaculoasă a stomatologiei, dar e cea care ține totul în picioare — și e locul de unde începe orice pacient nou la noi."
      heroImage="/media/clinic/tratament-wide.jpg"
      heroImageAlt="Consultație stomatologică în cabinetul ARdental din Arad"
      highlights={[
        'Consultație completă, cu plan de tratament explicat',
        'Tratamentul cariilor cu materiale fizionomice',
        'Urgențe dentare preluate cu prioritate',
        'Controale periodice la șase luni',
      ]}
      ctaTitle="Programează o consultație"
      ctaText="Fie că e un control de rutină sau o durere apărută azi-noapte, sună-ne."
    >
      <Reveal>
        <section aria-labelledby="general-servicii">
          <h2 id="general-servicii" className="h-display text-3xl md:text-4xl">
            Ce intră aici
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {servicii.map((s, i) => (
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
          aria-labelledby="general-frica"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[1fr_minmax(0,320px)]"
        >
          <div>
            <p className="eyebrow !text-teal-600">Dacă ți-e frică de dentist</p>
            <h2 id="general-frica" className="h-display mt-3 text-3xl md:text-4xl">
              Ești în locul potrivit
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              Este cel mai frecvent lucru pe care pacienții îl scriu în recenziile noastre: au
              venit tensionați și au plecat liniștiți. Nu grăbim nimic, explicăm fiecare pas
              înainte să îl facem și ne oprim ori de câte ori ai nevoie de o pauză.
            </p>
            <figure className="mt-6 border-l-2 border-coral-300 pl-4">
              <blockquote className="quote-serif">
                „A merge la dentist a fost mereu o teamă adâncă pentru mine, însă totul s-a
                schimbat când l-am întâlnit pe Dr. Lăbășan Bogdan și echipa de la ARdental.”
              </blockquote>
              <figcaption className="mt-2 text-xs font-semibold text-plum-900/70">
                — Bianca Gligor, recenzie Facebook
              </figcaption>
            </figure>
          </div>
          <img
            src="/media/clinic/receptie.jpg"
            alt="Recepția clinicii ARdental — spațiu luminos și primitor"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lift"
          />
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog"
          photo="/media/team/dr-bogdan-labasan.jpg"
          photoAlt="Dr. Bogdan Lăbășan, medic stomatolog la ARdental Arad"
          quote="Este un medic cum rar întâlnești — calm, atent, empatic și foarte dedicat."
          quoteAuthor="Bianca Gligor, recenzie Facebook"
        >
          <p>
            Orice pacient nou începe aici: o consultație în care ne uităm la tot, nu doar la
            dintele care supără, și stabilim împreună de unde pornim.
          </p>
          <p>
            Planul se face în etape, în ordinea urgenței, ca să știi de la început ce urmează
            și cât costă — fără surprize pe parcurs.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="general-faq">
          <h2 id="general-faq" className="h-display text-3xl md:text-4xl">
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
