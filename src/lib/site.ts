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
  // TODO: al doilea număr nu e afișat nicăieri pe site. De confirmat cu clinica dacă mai e
  // activ: dacă da, merită pus lângă primul în footer și pe /contact (pacientul care prinde
  // linia ocupată rămâne acum fără alternativă); dacă nu, se șterg ambele câmpuri.
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
    image: '/media/cases/fatete-dupa.jpg',
    imageAlt: 'Caz real ARdental Arad: zâmbet cu fațete, natural și luminos',
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
  /** Poate fi gol pentru membrii al căror titlu de card e deja rolul — evită eticheta dublată. */
  role: string
  /** Opțional: unii membri nu au încă un portret propriu, cardul afișează atunci inițiala. */
  photo?: string
  bio: string
  areas: string[]
  quote?: string
  quoteAuthor?: string
}

/**
 * Componența confirmată de proprietară (14 aug 2026): Dr. Bogdan Lăbășan și
 * Dr. Geanina Bindea (pedodonție). Dr. Petru Bodea a fost adăugat după acea discuție.
 * TODO: de reconfirmat cu clinica lista completă a medicilor, exact în ordinea de aici —
 * ea e enumerată și în meta description-ul paginii /echipa.
 * Directoarele medicale mai listează trei medici care nu apar în niciun material
 * recent al clinicii — rămân neincluși.
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
  {
    slug: 'dr-geanina-bindea',
    name: 'Dr. Geanina Bindea',
    role: 'Medic stomatolog · Stomatologie pediatrică',
    photo: '/media/team/dr-geanina-bindea.jpg',
    bio: 'Dr. Geanina Bindea se ocupă de cei mici — de la primul control, făcut în joacă, până la tratamentele de care au nevoie. Copiii descoperă instrumentele pe o jucărie de pluș înainte să se așeze pe scaun, iar fiecare pas se face în ritmul lor, fără grabă și fără forțare. Scopul ei: copii care pleacă zâmbind și se întorc fără frică.',
    areas: [
      'Stomatologie pentru copii (pedodonție)',
      'Prima vizită la stomatolog',
      'Tratamente blânde, pe înțelesul celor mici',
    ],
  },
  {
    slug: 'dr-petru-bodea',
    name: 'Dr. Petru Bodea',
    role: 'Medic stomatolog',
    // TODO: specializarea exactă — de confirmat cu clinica (în materialele primite
    // apare lucrând la microscopul dentar și în echipa din sala de intervenții).
    photo: '/media/team/dr-petru-bodea.jpg',
    bio: 'Îl găsești cel mai des cu ochii în microscopul dentar al clinicii — noua achiziție pe care a montat-o chiar el, alături de echipă. La măririle microscopului, detaliile invizibile cu ochiul liber devin vizibile și controlabile, iar tratamentele se fac la alt nivel de precizie.',
    areas: [
      'Tratamente de precizie la microscopul dentar',
    ],
  },
]

/**
 * Echipa de sprijin — confirmată de proprietară (14 aug 2026).
 * Niciuna dintre cele două nu are deocamdată un portret propriu, de aceea `photo` lipsește
 * la amândouă și cardurile afișează inițiala. TODO: de cerut clinicii câte o fotografie
 * de portret (cadru vertical, cu fața în imagine) și numele real al asistentei.
 */
export const assistants: TeamMember[] = [
  {
    slug: 'asistenta-medicala',
    // Fără numele real, titlul cardului e chiar rolul: „Asistenta noastră" peste eticheta
    // „Asistentă medicală" se citea ca text nefinalizat. De aceea `role` rămâne gol aici.
    name: 'Asistentă medicală',
    role: '',
    bio: 'Dedicată în totalitate pacienților: pregătește fiecare cabinet, stă lângă medic la fiecare tratament și are grijă ca protocoalele de sterilizare să fie respectate la literă.',
    areas: [],
  },
  {
    slug: 'gabriela-dumea',
    name: 'Gabriela Dumea',
    role: 'Recepție',
    // Fotografia /media/team/echipa-receptie.jpg nu e un portret al ei: sunt două persoane,
    // una filmată din spate. A rămas doar în galeria paginii /echipa, unde e descrisă corect.
    bio: 'Prima voce pe care o auzi la telefon și primul zâmbet când intri pe ușă. Gabriela te întâmpină cu drag, îți găsește ora potrivită și îți răspunde la întrebările despre costuri și plata în rate.',
    areas: [],
  },
]

export type Reel = {
  id: string
  src: string
  poster: string
  /** Raportul de aspect al videoclipului (clasă Tailwind). */
  aspectClass: string
  title: string
}

/**
 * Videoclipuri scurte din pagina de Facebook a clinicii, alese de proprietară
 * (14 aug 2026). Găzduite local, re-encodate pentru web. Fiecare e plasat în
 * pagina al cărei subiect îl ilustrează — nu într-o galerie generică:
 *   turulClinicii      → Despre (parcursul unei vizite, povestit de gazdă)
 *   vinoInClinica      → Contact (POV: ce vezi când intri pe ușă)
 *   surprizaPacientilor→ Testimoniale (momente cu pacienții)
 *   cariaSiTartrul     → Igienizare (prevenție, explicată din cabinet)
 *   planulPeEcran      → Implantologie (consultația: radiografia, pe ecran)
 *   echipaLaLucru      → Echipa (pregătirea sterilă și o intervenție reală)
 */
export const reels = {
  turulClinicii: {
    id: '1166159822037332',
    src: '/media/videos/reel-1166159822037332.mp4',
    poster: '/media/videos/reel-1166159822037332-poster.jpg',
    aspectClass: 'aspect-[9/16]',
    title: 'De la primul pas până la zâmbetul final — o vizită la ARdental',
  },
  vinoInClinica: {
    id: '24965515463086852',
    src: '/media/videos/reel-24965515463086852.mp4',
    poster: '/media/videos/reel-24965515463086852-poster.jpg',
    aspectClass: 'aspect-[9/16]',
    title: 'Deschizi ușa și asta găsești: recepția, salonul de așteptare, cabinetele',
  },
  surprizaPacientilor: {
    id: '776749625136644',
    src: '/media/videos/reel-776749625136644.mp4',
    poster: '/media/videos/reel-776749625136644-poster.jpg',
    aspectClass: 'aspect-[9/16]',
    title: 'Uneori facem câte o surpriză pacienților noștri',
  },
  cariaSiTartrul: {
    id: '685756944533314',
    src: '/media/videos/reel-685756944533314.mp4',
    poster: '/media/videos/reel-685756944533314-poster.jpg',
    aspectClass: 'aspect-[9/16]',
    title: 'Caria și tartrul — cum le previi, explicat din cabinet',
  },
  planulPeEcran: {
    id: '795666866843298',
    src: '/media/videos/reel-795666866843298.mp4',
    poster: '/media/videos/reel-795666866843298-poster.jpg',
    aspectClass: 'aspect-[720/638]',
    title: 'Consultația: radiografia panoramică, explicată pe ecran',
  },
  echipaLaLucru: {
    id: '318183760227824',
    src: '/media/videos/reel-318183760227824.mp4',
    poster: '/media/videos/reel-318183760227824-poster.jpg',
    aspectClass: 'aspect-square',
    title: 'Echipa, în timpul unei intervenții — de la pregătirea sterilă la ultimul pas',
  },
  nouaAchizitie: {
    id: 'noua-achizitie-microscop',
    src: '/media/videos/reel-noua-achizitie.mp4',
    poster: '/media/videos/reel-noua-achizitie-poster.jpg',
    aspectClass: 'aspect-[9/16]',
    title: 'Ziua în care am montat microscopul dentar — cea mai nouă achiziție a clinicii',
  },
} as const satisfies Record<string, Reel>

export type Testimonial = {
  text: string
  author: string
  source: string
}

/**
 * Recenzia despre echipă, citată pe pagina /echipa. E ținută separat de lista de mai jos
 * tocmai ca să nu apară de două ori: Bianca Gligor a lăsat mai multe recenzii, iar pe
 * pagina de testimoniale e păstrată una singură, ca să nu pară recenzii umflate.
 */
export const teamTestimonial: Testimonial = {
  text: 'Echipa ARdental este mai mult decât o echipă – este o familie care te primește cu grijă, profesionalism și blândețe. M-am simțit văzută, ascultată și sprijinită la fiecare pas.',
  author: 'Bianca Gligor',
  source: 'Facebook',
}

/**
 * Recenzii reale Google și Facebook, transcrise din materialele publicate de clinică.
 * Un singur text per autor — a treia recenzie a Biancăi Gligor („Este un medic cum rar
 * întâlnești — calm, atent, empatic și foarte dedicat. M-a făcut mereu să mă simt în
 * siguranță și înțeleasă, explicându-mi cu răbdare fiecare pas.") a fost scoasă din listă
 * din același motiv; textul rămâne aici ca să nu se piardă.
 * TODO: de cerut clinicii 2 recenzii Google de la autori diferiți, ca să revenim la 12 carduri.
 */
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
    text: 'O experiență minunată!',
    author: 'Patri Patricia',
    source: 'Google',
  },
]
