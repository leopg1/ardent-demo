# ARdental proSmile — Site de prezentare

Site de prezentare pentru **ARdental proSmile**, clinică dentară din Arad (Calea Aurel Vlaicu nr. 156).

Construit pe scheletul de frontend al proiectului DentaLine: aceleași componente, același sistem de
layout și aceleași utilitare. Ce s-a schimbat: paleta de culori (albastrul de brand ARdental), logo-ul,
toate textele, toate imaginile și structura de servicii.

## Stack

- **React 19 + TypeScript + Vite** (rolldown)
- **Tailwind CSS v4** — design tokens în `src/index.css`
- **react-router-dom 7** — 18 rute, lazy-loaded
- **lucide-react** — iconuri
- Fonturi self-hosted prin Fontsource: **Cormorant Garamond** (display) + **Manrope** (corp)

## Comenzi

```bash
npm install
npm run dev      # http://localhost:5186
npm run build    # typecheck + build de producție
npm run lint     # oxlint
```

## Structură

| Cale | Ce conține |
|---|---|
| `src/lib/site.ts` | **Sursa unică de adevăr**: contact, program, cele 9 servicii, echipa, testimoniale. Importă de aici, nu hardcoda telefonul sau adresa. |
| `src/lib/faq.ts` | Întrebările frecvente — răspunsurile sunt preluate din materialele educaționale publicate de clinică. |
| `src/lib/seo.ts` | `usePageMeta` (title/description/canonical/OG) + `BASE_URL`. |
| `src/index.css` | Design tokens. Scările se numesc `plum` / `coral` / `teal` din motive istorice; valorile sunt cele ale ARdental. |
| `src/components/` | Componente partajate. `ServiceLayout` este scheletul comun al paginilor de serviciu. |
| `public/media/` | Imaginile site-ului, generate din materialele clinicii cu `../research/prep-media-site.py`. |

## Paletă

Numele scărilor Tailwind sunt moștenite din schelet, dar valorile sunt ale ARdental:

| Scară | Rol | Cheie |
|---|---|---|
| `plum-*` | bleumarin structural — text, fundaluri închise, footer | `plum-950` `#16283C` |
| `coral-*` | **albastrul de brand** — butoane, accente, linkuri active | `coral-500` `#5078BE` (din logo), `coral-600` `#3F63A3` (butoane) |
| `teal-*` | cyan-ul din cover-ul lor — accente pe fundal închis | `teal-300` `#7FD4E8` |
| `gold-*` | stele de rating | `gold-400` `#D4AF6A` |

## Imagini

Clinica nu are ședință foto profesională. Toate imaginile din `public/media/` sunt extrase din
materialele lor publice (Facebook, Instagram) și procesate cu `../research/prep-media-site.py`.

Reels-urile au **subtitrări arse în cadru**, așa că decupajele folosesc doar benzile verificate ca
fiind curate. Dacă regenerezi imaginile, verifică vizual rezultatul înainte de publicare.

Rezoluția reală a surselor este 540×960 (cadre din reels Facebook) și 360×640 (Instagram), deci unele
imagini sunt mărite. **Prioritatea numărul unu după semnarea contractului: o ședință foto.**

## Sursa de conținut

Toate datele vin din [`../ARDENTAL-PROSMILE-dosar-complet.md`](../ARDENTAL-PROSMILE-dosar-complet.md)
(research 29 iulie 2026). Nu inventa prețuri, nume sau cifre care nu sunt acolo.

## De confirmat înainte de lansare

Marcat cu `TODO` în cod:

- **Domeniul.** `ardental.ro` nu mai aparține clinicii — găzduiește acum un site de factoring.
  URL-urile absolute folosesc temporar `ardental-arad.ro` (în `src/lib/seo.ts`, `index.html`,
  `public/sitemap.xml`, `public/robots.txt`).
- **Denumirea juridică, CUI și Reg. Com.** — footerul le afișează doar după completare în `site.ts`.
- **Programul.** „Luni–Vineri 10:00–20:00" vine dintr-o postare din februarie 2025. De confirmat,
  inclusiv dacă se lucrează sâmbăta.
- **Numărul de recenzii.** Sursele variază între 46 și 62, în funcție de platformă și dată.
- **Componența echipei.** Doar Dr. Bogdan Lăbășan este confirmat prin conținut recent. Directoarele
  mai listează trei medici care nu apar în niciun material din 2025–2026; nu au fost incluși.
- **Numele asistentelor** — nu sunt publice.
- **Lista de prețuri** — nu e publică nicăieri; pagina `/oferte` prezintă doar plata în rate.

## Deploy (Vercel)

`vercel.json` este validat strict după schema Vercel: **orice cheie necunoscută face
deploy-ul să pice la validare, înainte de build**. JSON nu acceptă comentarii, așa că
explicațiile stau aici, nu în fișier.

- **`/assets/*` → `immutable`, un an.** Numele sunt generate de Vite cu hash, deci
  un fișier nou primește mereu alt nume.
- **`/media/*` → o zi cache + o săptămână revalidare în fundal.** Aici numele NU au
  hash (`hero-poster.jpg` rămâne `hero-poster.jpg`). Cu `immutable`, o poză înlocuită
  ar rămâne cea veche în cache-ul vizitatorilor până la un an. Dacă vrei totuși
  `immutable`, atunci orice imagine înlocuită trebuie să primească nume nou.
- **Rewrite-ul `/(.*)` → `/index.html`** face ca orice rută să returneze 200, inclusiv
  cele inexistente. De aceea pagina 404 trimite `robots: noindex` și nu declară canonical
  (vezi `usePageMeta(..., { noindex: true })` în `src/pages/NotFound.tsx`).

## Formularul de contact

Cererile de programare se trimit prin `VITE_FORM_ENDPOINT` — orice serviciu care
acceptă un `POST` cu `FormData` și răspunde 2xx (Formspree, Web3Forms, o funcție
serverless proprie). Se setează în Vercel → Settings → Environment Variables:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/XXXXXXXX
```

Cât timp variabila nu e setată, formularul **nu pretinde** că a trimis cererea:
afișează starea de eroare, care trimite pacientul la telefon. Comportamentul e
intenționat — o confirmare falsă înseamnă un pacient care așteaptă un telefon ce
nu vine niciodată.

Formularul are și un câmp-capcană (`website`, ascuns): dacă e completat, cererea
e ignorată în tăcere. Nu înlocuiește protecția anti-spam a serviciului ales, dar
oprește roboții simpli.

## HTML static per rută (prerender)

`npm run build` rulează, după Vite, `scripts/prerender.mjs`. Acesta scrie câte un
`dist/<rută>/index.html` pentru fiecare dintre cele 25 de adrese, fiecare cu propriul
`<title>`, `description`, `canonical` și Open Graph.

**De ce contează.** Aplicația e randată de JavaScript, iar Vercel servea același
`index.html` peste tot. Deci: orice link trimis pe WhatsApp sau Facebook — către un
articol, către implantologie, oriunde — afișa titlul paginii principale; nicio pagină
nu avea `canonical` în HTML-ul servit; iar crawlerele care nu execută JavaScript (printre
ele o parte dintre cele care alimentează răspunsurile modelelor de limbaj) vedeau un
singur titlu pentru tot site-ul.

**Sursa de adevăr** e `src/lib/pageMeta.ts`. Paginile își păstrează apelurile
`usePageMeta`, iar scriptul verifică la fiecare build că textele coincid: dacă divergă,
**build-ul se oprește** cu numele rutei și al fișierului. Când schimbi un titlu sau o
descriere, schimb-o în ambele locuri. Rutele de blog se derivă automat din `articles`.

**Ce NU face.** Corpul paginii tot are nevoie de JavaScript. Pentru maximum pe partea de
GEO, pasul următor este randarea statică completă (de exemplu `vite-react-ssg`), care ar
livra și textul articolelor în HTML. Prerenderul de acum rezolvă metadatele și
previzualizările sociale, care sunt partea vizibilă imediat.
