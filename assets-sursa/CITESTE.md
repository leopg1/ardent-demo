# Materiale care nu sunt folosite pe site

Fișierele de aici erau în `public/media/`, dar nu sunt referite din niciun fișier
sursă, din `index.html` sau din `sitemap.xml` — adică se publicau la fiecare deploy
fără ca vreun vizitator să le poată vedea (~1,3 MB).

Nu au fost șterse: unele pot fi conținut care s-a pierdut pe drum, nu surplus.
**De verificat cu clinica**, mai ales cele patru din `cases/`: dacă sunt lucrări
reale, locul lor e pe pagina /cazuri, nu aici.

- `brand/` — sursele logo-ului. Pe site sigla e SVG inline (`src/components/Logo.tsx`),
  deci fișierele astea folosesc doar în afara site-ului (tipar, rețele sociale).
- `cases/` — patru fotografii înainte/după nefolosite.
- `clinic/hero-poster.jpg` — posterul vechi al videoului din hero, înlocuit de
  `hero-video-poster.jpg`.
- restul — fotografii alternative, rămase după selecția finală.

Ca să repui una pe site: mut-o înapoi în `public/media/<folder>/` și referă-o din cod.
