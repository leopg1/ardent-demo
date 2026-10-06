/**
 * Generează câte un HTML static pentru fiecare rută, după `vite build`.
 *
 * DE CE: aplicația e randată în întregime de JavaScript, iar Vercel servea același
 * `index.html` pe toate adresele. Consecințe reale, nu teoretice:
 *   · orice link trimis pe WhatsApp, Facebook sau LinkedIn arăta titlul și descrierea
 *     paginii principale — inclusiv linkul către un articol de blog sau către implantologie;
 *   · crawlerele care nu execută JavaScript (o bună parte dintre cele ale modelelor de
 *     limbaj, cele care alimentează răspunsurile de tip „recomandă-mi o clinică în Arad”)
 *     vedeau un singur titlu pentru tot site-ul;
 *   · nicio pagină nu avea `canonical` în HTML-ul servit.
 *
 * CE FACE: copiază `dist/index.html` în `dist/<rută>/index.html`, înlocuind în `<head>`
 * titlul, descrierea, Open Graph-ul și canonical-ul cu cele ale rutei. Corpul paginii
 * rămâne randat de React, ca până acum — nimic din comportamentul vizibil nu se schimbă.
 *
 * NU înlocuiește randarea pe server: conținutul propriu-zis tot are nevoie de JavaScript.
 * Pasul următor, dacă se dorește maximum pentru GEO, e randare statică completă.
 */
import { createServer } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const RADACINA = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(RADACINA, 'dist')

/** Aceeași regulă ca în src/lib/seo.ts, ca adresele să nu diverjeze. */
const BASE = (process.env.VITE_SITE_URL || 'https://ardental-arad.ro').replace(/\/$/, '')

/**
 * Pentru fiecare rută fixă, fișierul care trebuie să conțină același titlu.
 * Dacă textele divergă, build-ul se oprește — altfel HTML-ul static ar promite
 * crawlerelor un titlu, iar vizitatorul cu JavaScript ar vedea altul.
 */
const SURSA = {
  '/': 'src/pages/Home.tsx',
  '/despre': 'src/pages/Despre.tsx',
  '/echipa': 'src/pages/Echipa.tsx',
  '/servicii': 'src/pages/ServiciiIndex.tsx',
  '/cazuri': 'src/pages/Cazuri.tsx',
  '/testimoniale': 'src/pages/Testimoniale.tsx',
  '/oferte': 'src/pages/Oferte.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/blog': 'src/pages/Blog.tsx',
  '/confidentialitate': 'src/pages/Confidentialitate.tsx',
  '/servicii/implantologie': 'src/pages/servicii/Implantologie.tsx',
  '/servicii/estetica-dentara': 'src/pages/servicii/EsteticaDentara.tsx',
  '/servicii/coroane-zirconiu': 'src/pages/servicii/CoroaneZirconiu.tsx',
  '/servicii/endodontie': 'src/pages/servicii/Endodontie.tsx',
  '/servicii/igienizare': 'src/pages/servicii/Igienizare.tsx',
  '/servicii/ortodontie': 'src/pages/servicii/Ortodontie.tsx',
  '/servicii/parodontologie': 'src/pages/servicii/Parodontologie.tsx',
  '/servicii/chirurgie-orala': 'src/pages/servicii/ChirurgieOrala.tsx',
  '/servicii/stomatologie-generala': 'src/pages/servicii/StomatologieGenerala.tsx',
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Înlocuiește conținutul unui `<meta>` existent sau îl adaugă înainte de `</head>`. */
function setMeta(html, atribut, nume, valoare) {
  const re = new RegExp(`(<meta\\s+${atribut}="${nume}"\\s+content=")[^"]*(")`, 'i')
  if (re.test(html)) return html.replace(re, `$1${esc(valoare)}$2`)
  const reMultilinie = new RegExp(
    `<meta\\s*\\n?\\s*${atribut}="${nume}"\\s*\\n?\\s*content="[^"]*"\\s*\\n?\\s*/?>`,
    'i',
  )
  if (reMultilinie.test(html)) {
    return html.replace(reMultilinie, `<meta ${atribut}="${nume}" content="${esc(valoare)}" />`)
  }
  return html.replace('</head>', `    <meta ${atribut}="${nume}" content="${esc(valoare)}" />\n  </head>`)
}

async function main() {
  const server = await createServer({
    root: RADACINA,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  })
  let pageMeta
  try {
    ;({ pageMeta } = await server.ssrLoadModule('/src/lib/pageMeta.ts'))
  } finally {
    await server.close()
  }

  const sablon = await readFile(join(DIST, 'index.html'), 'utf8')

  // 1. Garda împotriva divergenței între pageMeta.ts și textul din pagină.
  const divergente = []
  for (const [ruta, fisier] of Object.entries(SURSA)) {
    const meta = pageMeta[ruta]
    if (!meta) {
      divergente.push(`${ruta}: lipsește din pageMeta.ts`)
      continue
    }
    const sursa = await readFile(join(RADACINA, fisier), 'utf8')
    if (!sursa.includes(meta.title)) {
      divergente.push(`${ruta}: titlul din pageMeta.ts nu se regăsește în ${fisier}\n      „${meta.title}”`)
    }
  }
  if (divergente.length) {
    console.error('\n✖ prerender: metadatele au divergat de pagini.\n')
    for (const d of divergente) console.error('   ' + d)
    console.error('\n   Aliniază src/lib/pageMeta.ts cu apelul usePageMeta din pagină (sau invers).\n')
    process.exit(1)
  }

  // 2. Câte un HTML pe rută.
  let scrise = 0
  for (const [ruta, meta] of Object.entries(pageMeta)) {
    // Acasă declară „…/” (cu slash), exact ca seo.ts la rulare; restul, fără slash final.
    // Altfel HTML-ul static și cel randat ar da două canonice diferite pentru aceeași pagină.
    const url = ruta === '/' ? BASE + '/' : BASE + ruta
    let html = sablon
      .replace(/<title>[^<]*<\/title>/i, `<title>${esc(meta.title)}</title>`)
      .replace(/<link rel="canonical"[^>]*>\s*/i, '')

    html = setMeta(html, 'name', 'description', meta.description)
    html = setMeta(html, 'property', 'og:title', meta.title)
    html = setMeta(html, 'property', 'og:description', meta.description)
    html = setMeta(html, 'property', 'og:url', url)
    if (meta.ogImage) html = setMeta(html, 'property', 'og:image', BASE + meta.ogImage)
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${esc(url)}" />\n  </head>`,
    )

    const dest = ruta === '/' ? join(DIST, 'index.html') : join(DIST, ruta, 'index.html')
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, html, 'utf8')
    scrise++
  }

  console.log(`✓ prerender: ${scrise} pagini cu <head> propriu (canonical, OG, descriere)`)
}

await main()
