import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const semne = [
  'Durere puternică, care apare mai ales noaptea',
  'Sensibilitate care persistă după contactul cu rece sau cald',
  'Durere la masticație sau la atingerea dintelui',
  'Umflătură sau sensibilitate a gingiei în dreptul dintelui',
  'Schimbarea culorii unui singur dinte',
]

const pasi = [
  {
    title: 'Diagnostic',
    text: 'Examinare și radiografie, ca să vedem exact care dinte e afectat și cât de departe a ajuns infecția.',
  },
  {
    title: 'Anestezie și izolare',
    text: 'Lucrăm sub anestezie și cu câmp izolat, ca zona tratată să rămână curată pe tot parcursul.',
  },
  {
    title: 'Curățarea canalelor',
    text: 'Îndepărtăm țesutul infectat, curățăm și dezinfectăm canalele pe toată lungimea lor.',
  },
  {
    title: 'Obturarea și refacerea',
    text: 'Sigilăm canalele, apoi refacem dintele cu o obturație sau, dacă e mult distrus, cu o coroană.',
  },
]

const faq = [
  {
    q: 'Tratamentul de canal doare?',
    a: 'Nu. Se face sub anestezie locală, iar de cele mai multe ori chiar el este cel care oprește durerea cu care ai venit. Disconfortul de după este de obicei mic și trece în câteva zile.',
  },
  {
    q: 'De ce nu trece durerea cu antibiotic?',
    a: 'Antibioticul poate calma temporar o infecție, dar nu ajunge în interiorul canalului, unde se află țesutul afectat. Fără curățarea canalului, problema revine.',
  },
  {
    q: 'Pot pierde dintele dacă amân?',
    a: 'Da. O carie ignorată ajunge la nerv, iar de la nerv la os. Cu cât se intervine mai devreme, cu atât sunt mai mari șansele să păstrăm dintele — în loc să ajungem la extracție.',
  },
  {
    q: 'Câte ședințe sunt necesare?',
    a: 'Depinde de dinte și de cât de avansată e infecția. Unele cazuri se rezolvă într-o singură ședință, altele au nevoie de două sau trei. Îți spunem la consultație la ce să te aștepți.',
  },
]

export default function Endodontie() {
  return (
    <ServiceLayout
      slug="endodontie"
      metaTitle="Tratament de canal Arad — ARdental proSmile"
      metaDescription="Tratament endodontic (de canal) în Arad, cu anestezie și izolare corectă. Salvăm dinții care dor. ☎ 0771 582 416"
      eyebrow="Endodonție"
      title={
        <>
          Tratament de canal — <span className="text-coral-600">salvăm dintele, nu îl extragem</span>
        </>
      }
      intro="Când caria ajunge la nerv, dintele începe să doară — de obicei noaptea și de obicei într-un moment prost. Tratamentul de canal oprește durerea și, în cele mai multe cazuri, păstrează dintele pe loc. Făcut corect și pe îndelete, cu dintele refăcut după tratament, poate ține zeci de ani."
      heroImage="/media/services/tratament-lucru.jpg"
      heroImageAlt="Medic stomatolog lucrând cu lupe de mărire în cabinetul ARdental din Arad"
      highlights={[
        'Lucrăm sub anestezie, fără grabă',
        'Curățare și dezinfectare completă a canalelor',
        'Refacerea dintelui după tratament, cu obturație sau coroană',
        'Urgențele cu durere sunt preluate cu prioritate',
      ]}
      faq={faq}
      ctaTitle="Te doare un dinte? Sună-ne"
      ctaText="Durerea dentară nu trece de la sine. Sună-ne și găsim cel mai apropiat loc liber."
    >
      <Reveal>
        <section aria-labelledby="endo-semne" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="endo-semne" className="h-display text-3xl md:text-4xl">
            Semne că ai nevoie de un tratament de canal
          </h2>
          {/* role="list" pentru că preflight-ul Tailwind pune list-style: none, iar
              Safari/VoiceOver scoate atunci rolul de listă — se pierde numărul de semne. */}
          <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
            {semne.map((s) => (
              <li key={s} className="flex items-start gap-3 text-base leading-relaxed text-plum-900/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plum-900/70">
            Dacă recunoști două sau mai multe dintre ele, nu aștepta să treacă de la sine.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby="endo-pasi">
          <h2 id="endo-pasi" className="h-display text-3xl md:text-4xl">
            Cum decurge tratamentul
          </h2>
          {/* Idem: aici ordinea e chiar sensul listei, deci rolul trebuie păstrat explicit. */}
          <ol role="list" className="mt-7 space-y-0">
            {pasi.map((pas, i) => (
              <li key={pas.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < pasi.length - 1 && (
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
                  <h3 className="card-title">{pas.title}</h3>
                  <p className="mt-1.5 max-w-xl text-base leading-relaxed text-plum-900/70">{pas.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <MedicServiciu
          name="Dr. Bogdan Lăbășan"
          role="Medic stomatolog · Endodonție și tratamente de bază"
          photo="/media/team/dr-labasan-la-lucru.jpg"
          photoAlt="Dr. Bogdan Lăbășan lucrând cu lupe de mărire, în cabinetul ARdental"
          quote="Dr. Lăbășan are o liniște în felul lui de a fi care te face să respiri mai ușor chiar și în cele mai dificile momente."
          quoteAuthor="Bianca Gligor, recenzie Facebook"
        >
          <p>
            Un tratament de canal reușit ține de răbdare: canale găsite toate, curățate pe
            toată lungimea și sigilate etanș. Nu e o procedură care se face în grabă.
          </p>
          <p>
            Pentru pacienții care vin cu frică — și sunt mulți la această procedură —
            explicăm fiecare pas înainte să îl facem și ne oprim ori de câte ori e nevoie.
          </p>
        </MedicServiciu>
      </Reveal>

      <Reveal>
        <section aria-labelledby="endo-faq">
          <h2 id="endo-faq" className="h-display text-3xl md:text-4xl">
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
