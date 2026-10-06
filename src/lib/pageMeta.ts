import { articles } from './blog'
import { site } from './site'

/**
 * Metadatele fiecărei rute, într-un singur loc.
 *
 * Există pentru că `npm run build` generează, după Vite, câte un HTML static per rută
 * (scripts/prerender.mjs). Fără el, Vercel servea același `<head>` pe toate cele 25 de
 * adrese: orice link dat pe WhatsApp sau Facebook arăta titlul paginii principale, iar
 * crawlerele care nu execută JavaScript — inclusiv o parte dintre cele ale modelelor de
 * limbaj — vedeau un singur titlu pentru tot site-ul.
 *
 * Paginile își păstrează propriile apeluri `usePageMeta`; scriptul de build verifică la
 * fiecare rulare că textele de aici se regăsesc în fișierul paginii și oprește build-ul
 * dacă au divergat. Deci: când schimbi un titlu, schimbă-l în amândouă locurile.
 */
export type MetaRuta = {
  title: string
  description: string
  /** Cale relativă la rădăcină; devine og:image absolut. */
  ogImage?: string
}

/** Imaginea de distribuire implicită: 1200×630, formatul cerut de rețelele sociale. */
export const OG_IMPLICIT = '/media/social/og-cover.jpg'

const paginiFixe: Record<string, MetaRuta> = {
  '/': {
    title: 'Clinică dentară Arad — ARdental proSmile · Implant & fațete',
    description: 'Clinică stomatologică în Arad: implant dentar, fațete, coroane zirconiu, igienizare profesională. 4,9★ pe Google. Plata în rate. ☎ 0771 582 416',
  },
  '/despre': {
    title: 'Despre noi — ARdental proSmile, clinică dentară în Arad',
    description: `Clinică dentară pe Calea Aurel Vlaicu, în Arad. ${site.rating}★ pe Google, tratamente fără durere, plata în rate. Află cum lucrăm.`,
  },
  '/echipa': {
    title: 'Echipa — ARdental proSmile, clinică dentară Arad',
    description: 'Dr. Bogdan Lăbășan, Dr. Geanina Bindea și Dr. Petru Bodea — echipa ARdental Arad: implanturi, tratamente la microscop și stomatologie pentru copii.',
  },
  '/servicii': {
    title: 'Servicii stomatologice Arad — ARdental proSmile',
    description: 'Serviciile ARdental Arad: implant dentar, fațete, coroane zirconiu, tratament de canal, igienizare, ortodonție, parodontologie și chirurgie orală.',
  },
  '/servicii/implantologie': {
    title: 'Implant dentar Arad — ARdental proSmile',
    description: 'Implant dentar în Arad: implanturi, adiții osoase și coroane înșurubabile. Plata în rate prin TBI Bank și Banca Transilvania. ☎ 0771 582 416',
    ogImage: '/media/cases/profil-metalo-ceramica.jpg',
  },
  '/servicii/estetica-dentara': {
    title: 'Fațete dentare & Albire Arad — ARdental proSmile',
    description: 'Fațete dentare, albire profesională și reconstrucții estetice în Arad. Rezultate naturale, planificate împreună cu tine. ☎ 0771 582 416',
    ogImage: '/media/cases/fatete-dupa.jpg',
  },
  '/servicii/coroane-zirconiu': {
    title: 'Coroane zirconiu & Protetică Arad — ARdental proSmile',
    description: 'Coroane din zirconiu și metalo-ceramice, punți și proteze dentare în Arad. Rezistență și estetică. Plata în rate. ☎ 0771 582 416',
    ogImage: '/media/cases/zambet-metalo-ceramica.jpg',
  },
  '/servicii/endodontie': {
    title: 'Tratament de canal Arad — ARdental proSmile',
    description: 'Tratament endodontic (de canal) în Arad, cu anestezie și izolare corectă. Salvăm dinții care dor. ☎ 0771 582 416',
    ogImage: '/media/services/tratament-lucru.jpg',
  },
  '/servicii/igienizare': {
    title: 'Igienizare profesională & Detartraj Arad — ARdental proSmile',
    description: 'Detartraj ultrasonic, AirFlow și periaj profesional în Arad. Igienizare completă în trei pași, o dată la șase luni. ☎ 0771 582 416',
    ogImage: '/media/services/igienizare-lucru.jpg',
  },
  '/servicii/ortodontie': {
    title: 'Aparat dentar & Ortodonție Arad — ARdental proSmile',
    description: 'Aparate dentare și Inman Aligner în Arad. Corecții pentru dinți înghesuiți sau spațiați, la orice vârstă. ☎ 0771 582 416',
    ogImage: '/media/services/zambet-femeie.jpg',
  },
  '/servicii/parodontologie': {
    title: 'Parodontologie Arad — tratament gingii — ARdental proSmile',
    description: 'Tratamente parodontale în Arad: gingii care sângerează, retracție gingivală, dinți mobili. Diagnostic și plan de menținere. ☎ 0771 582 416',
    ogImage: '/media/services/zambet-prim-plan.jpg',
  },
  '/servicii/chirurgie-orala': {
    title: 'Extracții dentare & Chirurgie orală Arad — ARdental proSmile',
    description: 'Extracții simple și complexe, măsele de minte și adiții osoase în Arad. Cu anestezie și indicații clare după intervenție. ☎ 0771 582 416',
    ogImage: '/media/clinic/chirurgie-echipa.jpg',
  },
  '/servicii/stomatologie-generala': {
    title: 'Stomatologie generală Arad — ARdental proSmile',
    description: 'Consultații, tratamentul cariilor, obturații și urgențe dentare în Arad. Stomatologia de zi cu zi, făcută ca la carte. ☎ 0771 582 416',
    ogImage: '/media/clinic/tratament-wide.jpg',
  },
  '/cazuri': {
    title: 'Înainte și după — Cazuri ARdental proSmile Arad',
    description: 'Transformări reale din clinica ARdental Arad: reabilitări complete cu metalo-ceramică și fațete dentare. Vezi comparațiile înainte/după.',
  },
  '/testimoniale': {
    title: 'Testimoniale — Recenzii pacienți ARdental proSmile Arad',
    description: `Ce spun pacienții despre ARdental: ${site.rating} din 5 stele, din ${site.reviewCount} de recenzii pe Google. Păreri reale despre medicii și echipa clinicii dentare din Arad.`,
  },
  '/oferte': {
    title: 'Plata în rate & Facilități — ARdental proSmile Arad',
    description: 'Plata în rate prin TBI Bank și Banca Transilvania la ARdental Arad. Plan de tratament transparent, cu etape și costuri clare de la început.',
  },
  '/contact': {
    title: 'Contact & Programări — ARdental proSmile Arad',
    description: 'Programează-te la ARdental: Calea Aurel Vlaicu nr. 156, Arad. ☎ 0771 582 416 · L–V 10:00–20:00.',
  },
  '/blog': {
    title: 'Blog — Sfaturi de la medicii ARdental proSmile Arad',
    description: 'Ghiduri scrise de echipa clinicii ARdental din Arad: frica de dentist, tartru, implanturi, gingii, copii la stomatolog. Explicate pe înțeles, fără jargon.',
  },
  '/confidentialitate': {
    title: 'Politica de confidențialitate — ARdental proSmile Arad',
    description: 'Cum prelucrează ARdental proSmile Arad datele tale personale: ce colectăm prin formularul de programare, în ce scop, temeiul legal și drepturile tale GDPR.',
  },
}

/** Rutele de blog se derivă din articole, ca să nu poată rămâne în urmă. */
const paginiBlog: Record<string, MetaRuta> = Object.fromEntries(
  articles.map((a) => [
    `/blog/${a.slug}`,
    { title: a.metaTitle, description: a.metaDescription, ogImage: a.image },
  ]),
)

export const pageMeta: Record<string, MetaRuta> = { ...paginiFixe, ...paginiBlog }

/** Toate rutele indexabile, în ordinea din meniu. */
export const ruteIndexabile = Object.keys(pageMeta)
