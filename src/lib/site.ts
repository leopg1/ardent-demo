/**
 * Datele centrale ale site-ului ARdental proSmile (Arad).
 * Sursa de adevăr: ../../../ARDENTAL-PROSMILE-dosar-complet.md (research 29.07.2026,
 * extras din Facebook, Instagram, recenzii Google și directoare medicale).
 *
 * NU inventați date. Tot ce e marcat `TODO` trebuie confirmat cu clinica înainte de lansare.
 */

export const site = {
  name: 'ARdental proSmile',
  tagline: 'Clinică dentară în Arad',
  slogan: 'Viața trebuie trăită zâmbind',
  signature: 'Zâmbetul tău este important pentru noi',
  // TODO: denumirea juridică, CUI și Reg. Com. — de cerut de la clinică pentru footer și pagini legale.
  legalName: '',
  cui: '',
  regCom: '',
  phone: '0771 582 416',
  phoneHref: 'tel:+40771582416',
  phoneSecondary: '0743 748 951',
  phoneSecondaryHref: 'tel:+40743748951',
  email: 'ardentalpro.smile@yahoo.com',
  address: 'Calea Aurel Vlaicu nr. 156, Arad 310365',
  addressShort: 'Calea Aurel Vlaicu nr. 156, Arad',
  addressHint: 'Pe Calea Aurel Vlaicu, la numărul 156',
  // Sursa: postarea Instagram din 6 februarie 2025. TODO: de confirmat dacă se lucrează și sâmbăta.
  schedule: 'Luni – Vineri: 10:00 – 20:00',
  scheduleNote: 'Sună-ne pentru confirmarea disponibilității',
  rating: '4,9',
  // TODO: numărul variază între surse (46–62, în funcție de platformă și dată). De confirmat.
  reviewCount: 61,
  // TODO: butonul „Scrie o recenzie" duce acum la o CĂUTARE Maps, nu la dialogul de recenzie —
  // pacientul trebuie să mai facă 3 clicuri, iar mulți renunță. Înlocuiți cu linkul direct:
  //   https://search.google.com/local/writereview?placeid=<PLACE_ID>
  // Place ID-ul se ia gratuit din Google Place ID Finder (developers.google.com/maps/documentation/places/web-service/place-id)
  // sau din Google Business Profile → „Cere recenzii".
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=ARdental+Arad',
  facebook: 'https://www.facebook.com/ArdentalProsmile/',
  instagram: 'https://www.instagram.com/ardental_prosmile/',
  mapsQuery:
    'https://www.google.com/maps/search/?api=1&query=ARdental+Calea+Aurel+Vlaicu+156+Arad',
  mapsEmbed: 'https://www.google.com/maps?q=ARdental+Calea+Aurel+Vlaicu+156+Arad&output=embed',
} as const

/**
 * Ratingul ca număr, derivat din `site.rating` (stocat cu virgulă, pentru afișare).
 * Folosiți-l oriunde e nevoie de valoare numerică (stele), ca să nu diverjeze de cifra afișată.
 */
export const ratingValue = Number.parseFloat(site.rating.replace(',', '.'))

export type Service = {
  slug: string
  title: string
  menuTitle: string
  short: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'implantologie',
    title: 'Implantologie dentară',
    menuTitle: 'Implantologie',
    short:
      'Îți redăm dinții lipsă cu implanturi și lucrări protetice fixe — inclusiv adiții osoase și coroane înșurubabile.',
    image: '/media/cases/caz-01-dupa.jpg',
    imageAlt: 'Caz real ARdental Arad: arcadă refăcută complet cu o lucrare protetică fixă',
  },
  {
    slug: 'estetica-dentara',
    title: 'Fațete & Estetică dentară',
    menuTitle: 'Fațete & Estetică',
    short:
      'Fațete dentare și albire profesională, pentru un zâmbet luminos care arată natural.',
    image: '/media/services/zambet-estetica.jpg',
    imageAlt: 'Zâmbet luminos după un tratament de estetică dentară',
  },
  {
    slug: 'coroane-zirconiu',
    title: 'Coroane din zirconiu & Protetică',
    menuTitle: 'Coroane & Protetică',
    short:
      'Coroane metalo-ceramice sau din zirconiu, punți și proteze — rezistență și estetică deopotrivă.',
    image: '/media/cases/caz-02-dupa.jpg',
    imageAlt: 'Caz real ARdental Arad: lucrare din metalo-ceramică finalizată, cu aspect natural',
  },
  {
    slug: 'endodontie',
    title: 'Endodonție — tratament de canal',
    menuTitle: 'Tratament de canal',
    short:
      'Salvăm dinții care dor, cu tratamente de canal făcute pe îndelete și corect de prima dată.',
    image: '/media/services/tratament-lucru.jpg',
    imageAlt: 'Medic stomatolog lucrând cu lupe de mărire în cabinetul ARdental',
  },
  {
    slug: 'igienizare',
    title: 'Igienizare profesională & Profilaxie',
    menuTitle: 'Igienizare & AirFlow',
    short:
      'Detartraj ultrasonic, AirFlow și periaj profesional — cei trei pași care previn aproape tot restul.',
    image: '/media/services/igienizare-lucru.jpg',
    imageAlt: 'Igienizare profesională în cabinetul ARdental din Arad',
  },
  {
    slug: 'ortodontie',
    title: 'Ortodonție & Aparate dentare',
    menuTitle: 'Ortodonție',
    short:
      'Îndreptăm dinții cu aparate dentare sau cu Inman Aligner, pentru corecții rapide în zona din față.',
    image: '/media/services/zambet-femeie.jpg',
    imageAlt: 'Pacientă zâmbind după un tratament ortodontic',
  },
  {
    slug: 'parodontologie',
    title: 'Parodontologie',
    menuTitle: 'Parodontologie',
    short:
      'Tratăm gingiile care sângerează, se retrag sau se inflamează — înainte să ajungă să miște dinții.',
    image: '/media/services/zambet-prim-plan.jpg',
    imageAlt: 'Zâmbet sănătos, cu gingii îngrijite',
  },
  {
    slug: 'chirurgie-orala',
    title: 'Chirurgie orală & Extracții',
    menuTitle: 'Chirurgie & Extracții',
    short:
      'Extracții simple și complexe și adiții osoase — pregătim terenul pentru implanturi atunci când e nevoie.',
    image: '/media/clinic/cabinet-tratament.jpg',
    imageAlt: 'Intervenție în cabinetul stomatologic ARdental',
  },
  {
    slug: 'stomatologie-generala',
    title: 'Stomatologie generală',
    menuTitle: 'Stomatologie generală',
    short:
      'Consultații, carii, plombe și durerile apărute peste noapte — stomatologia de zi cu zi, făcută ca la carte.',
    image: '/media/clinic/tratament-wide.jpg',
    imageAlt: 'Consultație stomatologică la clinica ARdental Arad',
  },
]

export type TeamMember = {
  slug: string
  name: string
  role: string
  photo: string
  bio: string
  areas: string[]
  quote?: string
  quoteAuthor?: string
}

/**
 * Dr. Bogdan Lăbășan este singurul medic confirmat prin conținutul propriu al clinicii
 * (recenzii Google 2025–2026, hashtag #DrLabasan, prezent în toate materialele video).
 *
 * TODO: directoarele medicale mai listează Conf. Univ. Dr. Sorin Mihali, Dr. Adrian Jantea
 * și Dr. Carina Trif. Nu apar în niciun material recent al clinicii, așa că NU au fost
 * incluși aici. De confirmat componența actuală a echipei și de adăugat cu fotografii reale.
 */
export const doctors: TeamMember[] = [
  {
    slug: 'dr-bogdan-labasan',
    name: 'Dr. Bogdan Lăbășan',
    role: 'Medic stomatolog',
    photo: '/media/team/dr-bogdan-labasan.jpg',
    bio: 'Dacă citești recenziile clinicii, un nume revine în aproape fiecare: Dr. Bogdan Lăbășan. Pacienții îl descriu drept calm, răbdător și „cu mâna ușoară” — medicul lângă care oamenii care au amânat ani întregi vizita la dentist ajung să se relaxeze din prima consultație. Lucrează pe toată paleta: de la igienizare și tratamente de canal, până la implanturi, fațete și reabilitări orale complexe. Explică fiecare pas înainte să îl facă, iar planul de tratament se stabilește împreună cu pacientul, nu în locul lui.',
    areas: [
      'Implantologie dentară',
      'Estetică dentară & fațete',
      'Protetică și coroane din zirconiu',
      'Endodonție și tratamente de bază',
    ],
    quote:
      'Dacă vrei un dentist calm, profi și cu mâna ușoară, ăsta e omul. Pentru mine, Dr. Bogdan Lăbășan este, în primul rând, un om și un prieten, apoi un dentist.',
    quoteAuthor: 'Alexandru Frincu, recenzie Google',
  },
]

/**
 * Echipa de sprijin. TODO: numele reale ale asistentelor nu sunt publice —
 * de completat după confirmarea cu clinica. Fotografiile sunt cadre reale din clinică.
 */
export const assistants: TeamMember[] = [
  {
    slug: 'echipa-cabinet',
    name: 'Asistentele noastre',
    role: 'Echipa medicală',
    photo: '/media/team/colega-cabinet.jpg',
    bio: 'Pregătesc fiecare cabinet, stau lângă medic la fiecare tratament și au grijă ca protocoalele de sterilizare să fie respectate la literă.',
    areas: [],
  },
  {
    slug: 'echipa-receptie',
    name: 'Recepția',
    role: 'Primul contact',
    photo: '/media/team/echipa-receptie.jpg',
    bio: 'Prima voce pe care o auzi la telefon și primul zâmbet când intri pe ușă. Aici se fac programările și tot aici primești răspuns la întrebările despre costuri și plata în rate.',
    areas: [],
  },
]

export type Testimonial = {
  text: string
  author: string
  source: string
}

/** Recenzii reale Google și Facebook, transcrise din materialele publicate de clinică. */
export const testimonials: Testimonial[] = [
  {
    text: 'Cine zice că nu poți să ai dinți faini și fără lacrimi pe scaunul stomatologic, clar n-a fost la Dr. Bogdan Lăbășan. Mi-am pus dinții la punct și… surpriză: NU mi-am pierdut nici capul, nici portofelul, nici nervii! Dacă vrei un dentist calm, profi și cu mâna ușoară, ăsta e omul.',
    author: 'Alexandru Frincu',
    source: 'Google',
  },
  {
    text: 'A merge la dentist a fost mereu o teamă adâncă pentru mine, însă totul s-a schimbat când l-am întâlnit pe Dr. Lăbășan Bogdan și echipa de la ARdental. Am găsit acolo oameni care știu să vindece nu doar dinții, ci și fricile.',
    author: 'Bianca Gligor',
    source: 'Facebook',
  },
  {
    text: 'Recomand cu încredere servicii profesioniste și personal super calificat și amabil.',
    author: 'Andrei Asanache',
    source: 'Google',
  },
  {
    text: 'Echipa ARdental este mai mult decât o echipă – este o familie care te primește cu grijă, profesionalism și blândețe. M-am simțit văzută, ascultată și sprijinită la fiecare pas.',
    author: 'Bianca Gligor',
    source: 'Facebook',
  },
  {
    text: 'Locație minunată, personal tânăr și dedicat. Atmosferă plăcută și profesionalism!',
    author: 'Ioana Haș',
    source: 'Google',
  },
  {
    text: 'Servicii la cele mai înalte standarde și o echipă de medici deosebiți.',
    author: 'N. B.',
    source: 'Google',
  },
  {
    text: 'Totul a decurs rapid și fără durere.',
    author: 'R. S.',
    source: 'Google',
  },
  {
    text: 'Profi, fără a fi reci. A fost mai curând ca în vacanță.',
    author: 'F. R.',
    source: 'Google',
  },
  {
    text: 'Foarte mulțumită de servicii, personal și prețuri!',
    author: 'P. B.',
    source: 'Google',
  },
  {
    text: 'Servicii perfecte într-un cabinet care ridică standardele la noi cote!',
    author: 'V. M.',
    source: 'Google',
  },
  {
    text: 'Este un medic cum rar întâlnești — calm, atent, empatic și foarte dedicat. M-a făcut mereu să mă simt în siguranță și înțeleasă, explicându-mi cu răbdare fiecare pas.',
    author: 'Bianca Gligor',
    source: 'Facebook',
  },
  {
    text: 'O experiență minunată!',
    author: 'Patri Patricia',
    source: 'Google',
  },
]
