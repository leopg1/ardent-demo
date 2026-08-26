/**
 * Blogul clinicii. Articolele sunt scrise pe vocea site-ului și ancorate STRICT
 * în faptele din site.ts — fără prețuri, statistici inventate sau promisiuni.
 *
 * Linkurile interne din text folosesc tokenul {{link:SLUG:text vizibil}},
 * randat de <RichParagraph>. SLUG-urile permise sunt cheile din LINK_PATHS.
 */

export type ArticleSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type ArticleFaq = { q: string; a: string }

export type Article = {
  slug: string
  category: string
  /** ISO, ex. „2026-06-11" — apare și în JSON-LD. */
  date: string
  image: string
  imageAlt: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  intro: string[]
  sections: ArticleSection[]
  faq: ArticleFaq[]
  ctaText: string
  /** Slug-urile a două articole înrudite, afișate la final. */
  related: [string, string]
}

/** Țintele permise pentru tokenurile {{link:...}} din articole. */
export const LINK_PATHS: Record<string, string> = {
  implantologie: '/servicii/implantologie',
  'estetica-dentara': '/servicii/estetica-dentara',
  'coroane-zirconiu': '/servicii/coroane-zirconiu',
  endodontie: '/servicii/endodontie',
  igienizare: '/servicii/igienizare',
  ortodontie: '/servicii/ortodontie',
  parodontologie: '/servicii/parodontologie',
  'chirurgie-orala': '/servicii/chirurgie-orala',
  'stomatologie-generala': '/servicii/stomatologie-generala',
  contact: '/contact',
  echipa: '/echipa',
  cazuri: '/cazuri',
}

export function articleBySlug(slug: string | undefined): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

/** Minute de citit, calculate din conținut (~180 de cuvinte/min) — nu se pot învechi. */
export function readingMinutes(a: Article): number {
  const text = [
    ...a.intro,
    ...a.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]),
    ...a.faq.flatMap((f) => [f.q, f.a]),
  ].join(' ')
  const words = text.replace(/\{\{link:[^:]+:([^}]+)\}\}/g, '$1').split(/\s+/).length
  return Math.max(2, Math.round(words / 180))
}

const dateFmt = new Intl.DateTimeFormat('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })

export function formatArticleDate(iso: string): string {
  return dateFmt.format(new Date(`${iso}T12:00:00`))
}

/** Cel mai recent articol primul. */
export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date))
}

export const articles: Article[] = [
  {
    slug: 'frica-de-dentist',
    category: 'Ghiduri pentru pacienți',
    date: '2026-08-12',
    image: '/media/clinic/receptie-wide.jpg',
    imageAlt: 'Recepția primitoare a clinicii ARdental din Arad, cu lumină naturală',
    title: 'Ți-e frică de dentist? Anxietatea dentară la adulți',
    metaTitle: 'Frica de dentist și cum o tratăm — ARdental Arad',
    metaDescription: 'Frica de dentist ține mulți adulți departe de cabinet. Află ce poți cere la telefon, ce facem diferit în cabinet și de ce amânarea costă mai mult.',
    excerpt: 'Anxietatea dentară e reală și se lucrează. Ce poți cere la telefon, ce facem diferit în cabinet și de ce amânarea nu te ajută.',
    intro: [
      'Frica de dentist nu e o rușine și nu e o raritate. O vedem săptămânal: adulți care n-au mai trecut pragul unui cabinet de cinci, zece, uneori douăzeci de ani. Nu pentru că nu-i doare nimic, ci pentru că amintirea unei experiențe vechi cântărește mai greu decât durerea de acum.',
      'Anxietatea dentară, însă, se lucrează. Nu cu vorbe mari, ci cu lucruri mici — o programare fără niciun tratament, o explicație înainte de fiecare pas, un semn din mână care oprește totul. Despre astea e articolul.',
    ],
    sections: [
      {
        heading: 'De unde vine, de fapt, teama',
        paragraphs: [
          'Aproape întotdeauna, în spatele fricii stă o experiență veche. O extracție din copilărie, un medic grăbit, o anestezie care n-a prins. Stomatologia de acum treizeci de ani chiar era altfel — iar creierul tău ține minte exact varianta aia, nu ce s-a schimbat între timp.',
          'Peste amintire se adaugă restul: sunetul frezei, senzația că stai pe spate cu gura deschisă și nu controlezi nimic, teama că vei fi certat pentru cât ai amânat. Pe aceasta din urmă o auzim cel mai des. Ca s-o spunem o dată clar: nu certăm pe nimeni. Am văzut de toate și nimic nu ne mai surprinde.',
        ],
      },
      {
        heading: 'Spune-ne la telefon. Chiar ajută.',
        paragraphs: [
          'Cel mai util lucru pe care îl poți face nu se întâmplă în cabinet, ci la telefon. Când suni pentru programare, spune direct: „mi-e teamă de dentist”. Nu e o mărturisire ciudată — o auzim des și schimbă felul în care îți pregătim vizita. Rezervăm mai mult timp, nu te înghesuim între două urgențe și știm din prima clipă că nu grăbim nimic.',
          'Al doilea lucru: cere ca prima programare să fie doar o {{link:stomatologie-generala:consultație}}. Fără freză, fără tratament, fără decizii pe loc. Ai tot dreptul să pui condiția asta, iar noi o respectăm. Ne găsești la {{link:contact:0771 582 416}}, de luni până vineri între 10:00 și 20:00.',
        ],
      },
      {
        heading: 'Prima vizită: ne uităm, discutăm, atât',
        paragraphs: [
          'La consultație se întâmplă exact ce sună: ne uităm la dinți, îți spunem pe înțeles ce am găsit și îți arătăm ordinea logică a lucrurilor — ce e urgent, ce mai poate aștepta. Pleci acasă cu un plan, nu cu obligații. Mulți pacienți anxioși ne spun după aceea că partea cea mai grea a fost drumul până la ușă.',
          'Nu e doar impresia noastră: multe dintre cele 61 de recenzii Google din spatele ratingului de 4,9 din 5 pomenesc exact calmul și răbdarea din cabinet. Iar dacă te liniștește să știi dinainte cine te așteaptă, poți citi despre {{link:echipa:medicii noștri}} — Dr. Bogdan Lăbășan și Dr. Geanina Bindea — înainte să vii.',
        ],
      },
      {
        heading: 'Ce facem diferit când știm că ți-e teamă',
        paragraphs: [
          'Mulți ne găsesc căutând „dentist fără durere” în Arad. Formula mai corectă ar fi „dentist fără surprize”, pentru că exact surprizele hrănesc frica. Concret, așa arată o ședință cu un pacient anxios la noi:',
        ],
        list: [
          'Explicăm înainte de fiecare pas. Auzi „acum vei simți o apăsare” înainte s-o simți, nu după.',
          'Stabilim un semn de stop. Ridici mâna stângă și ne oprim. De fiecare dată, fără discuții.',
          'Anesteziem în două trepte: întâi un gel care amorțește gingia, apoi injectarea, făcută lent. Cei mai mulți pacienți simt doar o presiune scurtă.',
          'Începem cu ce e simplu — un control, o igienizare — ca prima experiență să fie una ușoară.',
        ],
      },
      {
        heading: 'Amânarea e cel mai scump tratament',
        paragraphs: [
          'Frica are un preț — și nu e doar emoțional. O carie mică ignorată ajunge la nerv, apoi la os. Ce se rezolvă printr-o plombă simplă ajunge tratament de canal sau chiar extracție — mai multe ședințe, costuri mai mari și, culmea, exact genul de experiență de care te temeai.',
          'Mai e un mecanism pe care îl vedem des: cu fiecare an de amânare, prima vizită pare tot mai grea. „Sigur e dezastru acolo, mai bine nu aflu.” De regulă e mai bine decât crezi. Iar dacă nu e, tot varianta de azi rămâne cea mai simplă din câte vor urma.',
        ],
      }
    ],
    faq: [
      { q: 'Mi-e rușine de cum arată dinții. O să mă certați?', a: 'Nu. Nimeni de aici nu te ceartă și nu ține predici. Treaba noastră e să vedem ce e de făcut de azi înainte, nu să dezbatem trecutul. Vii, ne uităm, îți spunem calm care sunt opțiunile.' },
      { q: 'Pot să vin doar să vorbim, fără să-mi faceți nimic?', a: 'Da, și chiar te încurajăm. Spune la telefon că vrei doar o consultație și exact asta va fi: ne uităm, discutăm, primești un plan. Nu pornim niciun tratament fără acordul tău.' },
      { q: 'Anestezia doare?', a: 'Punem întâi un gel care amorțește locul, apoi injectăm lent — cei mai mulți pacienți descriu doar o presiune scurtă. Nu lucrăm până nu ne confirmi că zona e complet amorțită. Iar dacă totuși simți ceva pe parcurs, ridici mâna și ne oprim.' },
    ],
    ctaText: 'Primul pas nu e scaunul din cabinet, e telefonul. Sună la 0771 582 416, spune-ne că ți-e teamă, iar noi pregătim prima vizită în ritmul tău.',
    related: ['prima-vizita-copil-stomatolog', 'detartraj-tartru-acasa'],
  },
  {
    slug: 'detartraj-tartru-acasa',
    category: 'Prevenție',
    date: '2026-07-28',
    image: '/media/services/igienizare-lucru.jpg',
    imageAlt: 'Igienizare profesională în desfășurare, în cabinetul ARdental',
    title: 'De ce nu poți scoate tartrul acasă — și ce funcționează',
    metaTitle: 'Detartraj: de ce tartrul nu pleacă acasă — ARdental Arad',
    metaDescription: 'Bicarbonat, oțet, scobitori — de ce nu scot tartrul de pe dinți și ce face de fapt un detartraj profesional în Arad. Explicat simplu, fără sperieturi.',
    excerpt: 'Placa devine tartru în vreo 48 de ore și de acolo nu mai pleacă cu periuța. Ce funcționează de fapt — și de ce trucurile de pe internet îți zgârie smalțul.',
    intro: [
      'Ai frecat cu periuța, ai schimbat pasta, poate ai încercat și bicarbonatul — și piatra gălbuie de la baza dinților e tot acolo. Nu e vina ta și nici a periuței. Tartrul e depunere minerală, practic piatră lipită de dinte, iar singurul lucru care o scoate fără pagube e un detartraj profesional.',
      'Ca să înțelegi de ce, ajunge să știi un singur lucru: diferența dintre placă și tartru se joacă în aproximativ 48 de ore. De aici pornește tot articolul.',
    ],
    sections: [
      {
        heading: 'Placă sau tartru? Diferența se face în 48 de ore',
        paragraphs: [
          'Placa bacteriană e stratul moale, albicios, care se depune zilnic pe dinți. Cât e moale, periuța și ața dentară o scot fără probleme — de asta contează periajul de seară mai mult decât orice truc. Problema începe când placa rămâne pe loc: mineralele din salivă intră în ea și o întăresc, iar în aproximativ 48 de ore începe să se transforme în tartru.',
          'Odată mineralizat, tartrul aderă ferm la suprafața dintelui. Nu se mai dizolvă, nu se mai perie, nu se mai clătește. O parte din el se formează chiar sub gingie, acolo unde nici nu-l vezi — și exact acela face cele mai multe pagube.',
        ],
      },
      {
        heading: 'Bicarbonat, oțet, scobitori: ce pățește smalțul între timp',
        paragraphs: [
          'Rețetele de pe internet au toate aceeași problemă: ori sunt prea slabe ca să miște tartrul, ori destul de agresive încât să strice smalțul. Bicarbonatul e abraziv — frecat des, lasă zgârieturi fine în smalț, iar pe o suprafață zgâriată placa se prinde și mai repede. Obții fix opusul a ce voiai.',
          'Oțetul și lămâia atacă altfel: acidul înmoaie smalțul, iar dacă periezi imediat după, cureți din dinte, nu doar din depuneri. Cât despre scobitori, ace sau kiturile de „detartraj acasă” de comandat online — cu ele nu vezi ce faci sub gingie, dar gingia simte. Smalțul pierdut nu se reface; asta e, de fapt, toată discuția.',
        ],
      },
      {
        heading: 'Cei trei pași ai unei igienizări făcute ca la carte',
        paragraphs: [
          'O {{link:igienizare:igienizare profesională}} completă nu înseamnă doar „datul cu aparatul”. La noi are trei pași, toți în aceeași ședință:',
          'Toată ședința durează de regulă între 30 și 60 de minute, în funcție de cât s-a adunat. Pleci cu dinții netezi la limbă — senzația aia pe care acasă n-o mai obții orice ai face.',
        ],
        list: [
          'Detartrajul cu ultrasunete — un vârf metalic care vibrează foarte fin sparge tartrul de pe dinte, sub jet de apă. Se aude un țiuit subțire și simți vibrația, dar nu taie și nu pilește nimic.',
          'AirFlow — un jet de aer, apă și pulbere fină care curăță petele de cafea, ceai sau tutun și ajunge în locurile unde periuța nu intră.',
          'Periajul profesional — o pastă specială și o periuță rotativă lustruiesc suprafața dintelui, ca placa nouă să se prindă mai greu.',
        ],
      },
      {
        heading: 'Ce se întâmplă dacă îl lași acolo',
        paragraphs: [
          'Tartrul nu stă cuminte. E o suprafață aspră, plină de bacterii, lipită permanent de gingie — iar gingia răspunde cu inflamație. Întâi sângerezi la periaj, apoi gingia se retrage, apoi se topește osul de sub ea. Un strat de tartru ignorat ani la rând ajunge boală parodontală, iar dinți perfect sănătoși încep să se miște.',
          'Partea bună: prins la timp, lanțul ăsta se întrerupe simplu, cu o igienizare la momentul potrivit. Dacă gingiile îți sângerează deja des sau s-au retras vizibil, e nevoie de o evaluare de {{link:parodontologie:parodontologie}}, nu doar de un detartraj.',
        ],
      },
      {
        heading: 'De ce „la 6 luni” și nu „când îmi aduc aminte”',
        paragraphs: [
          'Șase luni e intervalul în care, la majoritatea oamenilor, depunerile ajung din nou la un nivel care merită curățat — destul de des ca tartrul să nu apuce să facă pagube, destul de rar ca să nu fie o corvoadă. Dacă fumezi, bei multă cafea sau porți aparat dentar, s-ar putea să ai nevoie mai des; îți spunem exact la prima vizită.',
          'Mai e un motiv, mai puțin vizibil: la fiecare igienizare, medicul vede toți dinții de aproape. O carie mică prinsă acum e o plombă simplă; aceeași carie peste doi ani poate fi tratament de canal. Dacă nu mai știi când ai fost ultima dată la detartraj, răspunsul e aproape sigur „prea demult” — ne găsești ușor prin pagina de {{link:contact:contact}}, pe Calea Aurel Vlaicu nr. 156, în Arad.',
        ],
      }
    ],
    faq: [
      { q: 'Doare detartrajul?', a: 'De regulă nu — simți vibrația și apa rece, cam atât. Dacă ai gingii retrase sau mult tartru sub gingie, pot apărea zone sensibile, dar ne spui pe loc și ajustăm intensitatea. Teama dinainte e aproape mereu mai mare decât ședința în sine.' },
      { q: 'Am auzit că detartrajul subțiază smalțul. E adevărat?', a: 'Nu. Ultrasunetele sparg depunerile lipite de dinte, nu smalțul în sine — vibrația e gândită exact pentru asta. Senzația de „dinți răriți” de după vine din faptul că tartrul care umplea spațiile a dispărut, nu dintr-un dinte pilit. Ce subțiază smalțul cu adevărat sunt bicarbonatul și oțetul folosite acasă.' },
      { q: 'Cât durează și cât de des trebuie să vin?', a: 'O ședință completă — detartraj, AirFlow și periaj profesional — durează de obicei între 30 și 60 de minute. Pentru majoritatea oamenilor, o dată la șase luni e suficient. Dacă a trecut mai mult, nu-i nimic grav: prima ședință durează poate puțin mai mult, atât.' },
    ],
    ctaText: 'Dinții netezi la limbă sunt la un telefon distanță: 0771 582 416, luni–vineri între 10:00 și 20:00 — sau lasă-ne un mesaj și te programăm noi.',
    related: ['gingii-care-sangereaza', 'albirea-dintilor-mituri'],
  },
  {
    slug: 'prima-vizita-copil-stomatolog',
    category: 'Copii',
    date: '2026-08-05',
    image: '/media/team/dr-bindea-tratament.jpg',
    imageAlt: 'Dr. Geanina Bindea în timpul unui tratament, în cabinetul ARdental',
    title: 'Prima vizită a copilului la stomatolog: ghid pentru părinți',
    metaTitle: 'Prima vizită la dentist a copilului — ARdental Arad',
    metaDescription: 'Când duci copilul prima dată la stomatolog și cum îl pregătești fără să-l sperii. Ghid practic de stomatologie copii în Arad, de la ARdental proSmile.',
    excerpt: 'La ce vârstă duci copilul prima dată la dentist, cum îl pregătești fără să-l sperii și cum decurge vizita la noi. Un ghid calm pentru părinți.',
    intro: [
      'Prima vizită la dentist e mai simplă decât îți imaginezi — dacă vii la momentul potrivit. Mulți părinți ne sună abia când copilul are deja o carie și îl doare ceva. Iar atunci prima vizită devine, din păcate, și prima amintire neplăcută. Se poate și altfel.',
      'Am scris ghidul ăsta pentru că primim aceleași întrebări la telefon aproape zilnic: la ce vârstă îl aduc, ce-i spun acasă, ce faceți dacă plânge. Le luăm pe rând.',
    ],
    sections: [
      {
        heading: 'Primul dinte sau prima aniversare — care vine primul',
        paragraphs: [
          'Regula e simplă: primul control se face când erupe primul dinte, cel târziu în jurul vârstei de un an. Pare devreme, știm. Părinții ne întreabă adesea dacă nu e păcat de drum pentru „doi dinți și jumătate”. Nu e. La vârsta asta nu tratăm nimic — verificăm cum erup dinții, ne uităm la gingii și vorbim despre biberon, suzetă și periaj. Zece minute, poate cincisprezece.',
          'Rostul adevărat al vizitei timpurii e altul: copilul învață că la stomatolog se merge normal, ca la orice alt control, nu doar când doare ceva. Apoi ritmul e simplu — control la fiecare șase luni. Dinții de lapte au smalțul mai subțire, iar o carie avansează pe ei mult mai repede decât la adult.',
        ],
      },
      {
        heading: 'Cuvintele care sperie mai tare decât cabinetul',
        paragraphs: [
          'Cea mai frecventă greșeală o fac părinții bine intenționați: „Stai liniștit, nu doare, nu-ți face injecție.” Copilul nu auzise de durere sau de injecții până atunci. Acum știe că există și că sunt destul de serioase încât mama să le pomenească de trei ori pe drum. Din negarea ta, el reține exact cuvintele pe care voiai să le eviți.',
          'Ce funcționează e limbajul simplu și pozitiv: doctorul îți numără dinții, se uită dacă sunt puternici, scaunul urcă și coboară ca un lift. Fără detalii tehnice, fără promisiuni. Ajută mult și joaca de acasă — numărați-vă dinții unul altuia, „consultați” ursulețul cu o linguriță. Și încă un lucru: nu folosi stomatologul ca amenințare. „Dacă nu te speli pe dinți, te duc la dentist” construiește exact frica pe care încercăm cu toții s-o prevenim.',
        ],
      },
      {
        heading: 'La ARdental, primul pacient e ursulețul de pluș',
        paragraphs: [
          'Copiii ajung la noi în grija {{link:echipa:doctoriței Geanina Bindea}}, care face stomatologie pediatrică — pedodonție, dacă vrei termenul din manual. La ea, instrumentele nu apar din senin lângă obrazul copilului: întâi le descoperă pe o jucărie de pluș. Oglinjoara se uită în gura ursulețului, aspiratorul își face zgomotul caraghios pe blăniță, și abia apoi, dacă micuțul e curios, vine rândul lui.',
          'Mergem în ritmul copilului, nu al programării. Dacă la prima vizită reușim doar să numărăm dinții și să facem o plimbare cu scaunul, e o vizită reușită — data viitoare urcă singur. Nimeni nu ține copilul cu forța și nimeni nu se grăbește. Dacă al tău e mai emotiv de felul lui, spune-ne asta când {{link:contact:faci programarea}} — rezervăm mai mult timp și facem totul pe îndelete.',
        ],
      },
      {
        heading: '„Oricum cad” — de ce merită tratați dinții de lapte',
        paragraphs: [
          'E replica pe care o auzim cel mai des, spusă cu toată sinceritatea. Da, dinții de lapte cad. Dar până atunci au o treabă serioasă: păstrează locul dinților definitivi. Un dinte de lapte pierdut prea devreme lasă un gol în care vecinii lui se înclină, iar dintele definitiv nu mai are pe unde să iasă drept. Ce se rezolvă printr-o plombă mică ajunge, peste câțiva ani, aparat ortodontic.',
          'Mai e ceva. O carie netratată pe un dinte de lapte poate ajunge infecție, iar infecția stă chiar deasupra mugurelui dintelui definitiv, care se formează în os exact sub ea. Plus lucrurile la care nu te gândești imediat: copilul mestecă, pronunță și zâmbește cu dinții ăștia câțiva ani buni.',
        ],
      },
      {
        heading: 'Ce poți face acasă între controale',
        paragraphs: [
          'Partea bună e că prevenția la copii ține mai mult de rutină decât de eroism. Astea sunt lucrurile care contează cu adevărat:',
          'Și nu uita de tine. Copiii copiază ce văd: un părinte care merge relaxat la control își convinge copilul mai bine decât orice discurs. Dacă a trecut ceva vreme de la ultima ta vizită, o poți lega de programarea copilului — acoperim și {{link:stomatologie-generala:stomatologia generală}} a întregii familii.',
        ],
        list: [
          'Periaj de două ori pe zi, iar până pe la 7–8 ani finisezi tu — copiii nu au încă dexteritatea pentru un periaj corect.',
          'Pastă de dinți cu fluor, în cantitate cât un bob de mazăre.',
          'Fără biberon cu suc, lapte îndulcit sau ceai dulce la culcare — e rețeta clasică pentru carii pe dinții din față.',
          'Dulciurile la finalul mesei, nu ronțăite toată ziua. Între mese, apă.',
        ],
      }
    ],
    faq: [
      { q: 'De la ce vârstă primiți copii la cabinet?', a: 'De la primul dinte, adică în jurul vârstei de un an. Prima vizită e scurtă și blândă: verificăm erupția, gingiile și vorbim cu tine despre periaj și obiceiuri. Dacă copilul e mai măricel și n-a fost niciodată la stomatolog, nu-i nicio problemă — începem cu o vizită de acomodare.' },
      { q: 'Ce faceți dacă plânge și nu deschide gura?', a: 'Nu îl forțăm, în niciun caz. Dr. Geanina Bindea lucrează în ritmul copilului: uneori prima ședință înseamnă doar joacă, ursulețul de pluș și o plimbare cu scaunul. Pare puțin, dar exact așa se construiește încrederea — la vizita următoare, mulți copii urcă singuri.' },
      { q: 'Dintele de lapte cariat se tratează sau se scoate?', a: 'De regulă se tratează, pentru că ține locul dintelui definitiv. Extracția rămâne ultima variantă, când dintele nu mai poate fi salvat. Decidem după consult, în funcție de cât de avansată e caria și cât mai are dintele până cade natural.' },
    ],
    ctaText: 'Dacă i-a apărut primul dinte sau vrei doar să vezi cum se împacă micuțul tău cu ursulețul nostru, sună la 0771 582 416 — vă așteptăm pe amândoi, fără grabă.',
    related: ['frica-de-dentist', 'detartraj-tartru-acasa'],
  },
  {
    slug: 'implant-dentar-intrebari',
    category: 'Tratamente',
    date: '2026-06-17',
    image: '/media/cases/profil-metalo-ceramica.jpg',
    imageAlt: 'Lucrare protetică fixă finalizată, văzută din profil — caz real ARdental',
    title: 'Implantul dentar, pe înțelesul tuturor: ce ne întreabă pacienții',
    metaTitle: 'Implant dentar: întrebările pacienților — ARdental Arad',
    metaDescription: 'Doare un implant dentar? Cât durează și cât rezistă? Răspundem la întrebările pe care ni le pun pacienții la telefon, în clinica noastră din Arad.',
    excerpt: 'Doare? Cât durează? Cât rezistă? Răspunsuri simple la întrebările despre implantul dentar, exact cum le primim la telefon.',
    intro: [
      'Un implant dentar în Arad se pune azi mai simplu decât își imaginează majoritatea pacienților. Știm asta pentru că le auzim reacția la final: „Atât a fost?”. Și totuși, până la prima programare, aproape toți sună cu aceleași temeri.',
      'Am strâns aici întrebările care revin cel mai des la telefon — despre durere, durată, os și bani — și răspundem exact cum am face-o în cabinet: calm, pe înțeles, fără promisiuni umflate.',
    ],
    sections: [
      {
        heading: '„Doare?” — întrebarea numărul unu, de departe',
        paragraphs: [
          'Răspunsul scurt: intervenția în sine nu doare. Se face cu anestezie locală, aceeași pe care o știi de la o plombă mai serioasă. Simți presiune, auzi instrumentele, atât. Mulți pacienți ne spun după aceea că se așteptau la ceva mult mai dramatic — unii o compară cu o extracție ușoară.',
          'Zilele de după sunt partea despre care lumea uită să întrebe. Poate apărea o umflătură discretă și o jenă care cedează la antiinflamatoarele obișnuite. La noi, intervențiile de {{link:implantologie:implantologie}} le face dr. Bogdan Lăbășan, pe care pacienții îl descriu simplu: calm, cu mâna ușoară.',
        ],
      },
      {
        heading: 'Cât durează un implant, de la consultație la dintele final',
        paragraphs: [
          'Aici facem o distincție la aproape fiecare telefon: intervenția durează puțin, procesul durează luni. Montarea unui implant se termină de multe ori în mai puțin de o oră. Apoi începe partea nevăzută — osteointegrarea.',
          'Timp de 3–6 luni, osul crește în jurul implantului și îl prinde ca pe o rădăcină proprie. În perioada asta nu ai treabă aproape deloc: câteva controale scurte, atât. Abia după integrare se montează coroana definitivă. Nu e un proces rapid, dar nici unul care să-ți ocupe viața.',
        ],
      },
      {
        heading: 'Adiția osoasă: de ce uneori construim înainte să punem',
        paragraphs: [
          'Uneori, la consultație, îi dăm pacientului o veste la care nu se aștepta: nu are suficient os. Se întâmplă des la dinții scoși cu ani în urmă, pentru că osul rămas fără dinte se topește încet, ca un mușchi nefolosit.',
          'Adiția osoasă e soluția: adăugăm material de augmentare acolo unde osul s-a retras, iar organismul îl transformă treptat în os propriu. Da, prelungește procesul cu câteva luni. Dar diferența e ca între o casă pe fundație solidă și una pe nisip — implantul are nevoie de os în care să se ancoreze.',
        ],
      },
      {
        heading: 'Un dinte lipsă nu e doar o gaură în zâmbet',
        paragraphs: [
          '„Nu se vede, e în spate, mă descurc.” Auzim varianta asta des. Problema e că un dinte lipsă nu stă cuminte — mai exact, ceilalți nu stau. Vecinii migrează spre spațiul gol, dintele de pe arcada opusă coboară în căutarea perechii, iar mușcătura se dezechilibrează încet.',
          'Sub gingie se petrece partea și mai tăcută: osul care nu mai are ce susține se resoarbe. Cu cât aștepți mai mult, cu atât crește șansa să ai nevoie de adiția de la capitolul anterior. Poți vedea în {{link:cazuri:cazurile noastre}} cum arată reabilitările făcute la timp — și unele începute târziu, dar duse până la capăt.',
        ],
      },
      {
        heading: 'Cât rezistă un implant și ce depinde de tine',
        paragraphs: [
          'Cu igienă corectă, un implant rezistă decenii — pentru mulți pacienți, tot restul vieții. Titanul nu face carii, dar gingia și osul din jurul lui rămân țesuturi vii, care se pot inflama exact ca la un dinte natural. Partea ta de treabă e simplă și scurtă:',
        ],
        list: [
          'Periaj de două ori pe zi, plus curățarea spațiilor dintre dinți — implantul se îngrijește ca orice dinte.',
          'Igienizare profesională regulată, ca placa și tartrul să nu ajungă sub gingie.',
          'Un control periodic, ca să prindem orice inflamație când e încă o nimica toată.',
        ],
      },
      {
        heading: 'Da, se poate plăti în rate',
        paragraphs: [
          'Costul e prima sau a doua întrebare din aproape orice telefon — și e firesc. Suma exactă depinde de caz: câte implanturi, dacă e nevoie de adiție, ce coroană alegi. O stabilim după consultație și radiografie, nu din vorbe.',
          'Ce putem spune de pe acum: plata se poate face în rate, prin TBI Bank sau Banca Transilvania. {{link:contact:Scrie-ne sau sună-ne}} și îți explicăm cum funcționează, cu tot cu pașii concreți.',
        ],
      }
    ],
    faq: [
      { q: 'Mi-am scos dintele acum zece ani. Mai pot pune implant?', a: 'De cele mai multe ori, da. E posibil ca osul să se fi retras între timp, așa că facem întâi o radiografie și vedem exact cu ce lucrăm. Dacă osul nu ajunge, există adiția osoasă — durează mai mult, dar rezolvă problema.' },
      { q: 'Sunt fumător. Se prinde implantul?', a: 'Fumatul scade șansele de integrare și încetinește vindecarea, dar nu e o interdicție automată. La consultație discutăm deschis riscurile din cazul tău, iar ideal ar fi măcar o pauză în perioada de vindecare. Ți-o spunem direct, pentru că preferăm să știi înainte, nu după.' },
      { q: 'Rămân fără dinte cât se integrează implantul?', a: 'Nu, dacă zona se vede sau te încurcă la masticație. Există soluții provizorii pentru perioada de integrare, pe care le stabilim de la început, ca să nu ai surprize și să nu stai luni de zile cu un spațiu gol la vedere.' },
    ],
    ctaText: 'Dacă ai un dinte lipsă și întrebări care nu și-au găsit locul aici, sună-ne la 0771 582 416 — ne găsești de luni până vineri, între 10:00 și 20:00, pe Calea Aurel Vlaicu 156, în Arad.',
    related: ['frica-de-dentist', 'gingii-care-sangereaza'],
  },
  {
    slug: 'gingii-care-sangereaza',
    category: 'Prevenție',
    date: '2026-07-09',
    image: '/media/services/tratament-lucru.jpg',
    imageAlt: 'Medic stomatolog lucrând cu lupe de mărire, în cabinetul ARdental',
    title: 'Gingii care sângerează la periaj: ce înseamnă și ce faci',
    metaTitle: 'Gingii care sângerează: cauze și tratament — ARdental Arad',
    metaDescription: 'Gingiile care sângerează la periaj nu sunt normale. Află diferența dintre gingivită și parodontoză și când e momentul să ajungi la un consult.',
    excerpt: 'Sângerarea gingiilor nu e „așa la toată lumea”. Îți explicăm ce o provoacă, ce e reversibil și care sunt semnele care cer un consult.',
    intro: [
      'Te speli pe dinți, scuipi, iar în chiuvetă e roz. Gingii care sângerează la periaj — pentru mulți, o rutină atât de veche încât nici nu o mai bagă în seamă. Doar că gingia sănătoasă nu sângerează. Nici la periaj, nici la ață, nici din senin.',
      'Sângerarea e felul gingiei de a-ți spune că e inflamată. Vestea bună: prinsă la timp, inflamația se rezolvă complet. Vestea mai puțin bună: ignorată ani la rând, ajunge la osul care ține dintele. Și acolo discuția se schimbă.',
    ],
    sections: [
      {
        heading: '„Așa e la toată lumea” — mitul care costă dinți',
        paragraphs: [
          '„Doctore, dar mie îmi sângerează de când mă știu. Și mamei la fel.” Auzim asta la aproape fiecare prim consult. Sângerarea pare normală tocmai pentru că e frecventă — dar frecvent și normal nu sunt același lucru. Multă lume are carii; asta nu face caria sănătoasă.',
          'Gândește-te așa: dacă ți-ar sângera mâinile de fiecare dată când te speli pe ele, nu ai da vina pe săpun. Cu gingia e la fel. Când sângerează la o atingere blândă cu periuța, e deja inflamată — de regulă din cauza plăcii bacteriene adunate la limita dintre dinte și gingie, exact acolo unde periuța ajunge mai greu.',
        ],
      },
      {
        heading: 'Gingivită sau parodontită? Granița dintre reversibil și ireversibil',
        paragraphs: [
          'Gingivita e primul stadiu: gingia e roșie, umflată, sângerează ușor, dar osul de sub ea e intact. Aici totul e reversibil. O igienizare profesională, un periaj corect acasă, și în două-trei săptămâni gingia se strânge la loc, revine la roz și nu mai lasă urme pe periuță.',
          'Parodontita — parodontoza, cum îi spune toată lumea — e etapa următoare. Inflamația a coborât sub gingie și a început să topească osul care susține dintele. Iar osul pierdut nu crește înapoi de la sine. Tratamentul de {{link:parodontologie:parodontologie}} oprește boala și stabilizează ce a rămas, dar nu dă timpul înapoi. De asta contează atât de mult stadiul în care ajungi la noi.',
        ],
      },
      {
        heading: 'Trei semne care înseamnă drum la cabinet, nu doar pastă nouă',
        paragraphs: [
          'Sângerarea e semnalul timpuriu. Există însă câteva semne care arată că lucrurile au avansat și că nu mai e vorba de o pastă de dinți nepotrivită:',
          'Dacă ai bifat ceva din lista de mai sus, {{link:contact:sună-ne}} — ne spui la telefon ce ai observat și stabilim împreună cât de repede e nevoie să te vedem.',
        ],
        list: [
          'Retracția gingiei — dinții par mai lungi decât înainte, iar lângă gingie apare o zonă sensibilă la rece.',
          'Mobilitatea — un dinte care se mișcă discret la presiune, deși nu l-ai lovit niciodată.',
          'Respirația urât mirositoare care persistă oricât te-ai spăla — semn că bacteriile lucrează sub gingie, unde periuța nu are acces.',
        ],
      },
      {
        heading: 'Periaj corect nu înseamnă periaj cu forță',
        paragraphs: [
          'Reacția clasică la sângerare e una din două: fie apeși mai tare, ca să „cureți mai bine”, fie ocolești zona, ca să nu o mai superi. Ambele înrăutățesc situația. Periajul agresiv rănește gingia și, în timp, o retrage; ocolirea lasă placa exact acolo unde face rău.',
          'Periajul corect e blând și, sincer, cam plictisitor: periuță cu peri moi, ținută la 45 de grade spre gingie, mișcări mici, fără presiune, două minute, plus ață dentară sau periuțe interdentare seara. Dacă era doar gingivită, sângerarea scade vizibil în una-două săptămâni de periaj corect. Dacă nu scade, nu mai e o problemă de tehnică — e una de cabinet.',
        ],
      },
      {
        heading: 'Igienizarea profesională: de aici începe orice tratament',
        paragraphs: [
          'Orice tratament al gingiilor pornește de la același pas: curățarea a ceea ce periuța nu poate curăța. Tartrul, odată format, aderă ferm la dinte și nu pleacă nici cu cea mai scumpă pastă. La {{link:igienizare:igienizare}} îl îndepărtăm cu ultrasunete, curățăm placa și petele rămase cu un jet de aer, apă și pulbere fină, apoi încheiem cu un periaj profesional. Totul durează de regulă sub o oră, iar dacă gingiile sunt inflamate și unele zone se simt mai sensibile, lucrăm cu blândețe și facem pauze când ai nevoie.',
          'În gingivită, igienizarea plus periajul corect acasă rezolvă de obicei problema. În parodontită, e primul pas dintr-un plan mai lung, pe care îl stabilim după măsurarea pungilor parodontale și, la nevoie, o radiografie. Îți explicăm pe înțeles fiecare etapă — abia apoi decidem împreună cum mergem mai departe.',
        ],
      }
    ],
    faq: [
      { q: 'Îmi sângerează gingiile de ani de zile. Mai are rost să vin sau e prea târziu?', a: 'Are rost oricând, cu atât mai mult acum. Dacă e gingivită, se rezolvă complet. Dacă s-a instalat parodontita, tratamentul oprește pierderea de os și îți păstrează dinții pe care îi ai. Prea târziu e doar când un dinte nu mai poate fi salvat — și asta o putem spune abia după consult.' },
      { q: 'Doare igienizarea dacă am gingiile inflamate?', a: 'De regulă nu, dar zonele inflamate pot fi mai sensibile decât la o igienizare obișnuită. Lucrăm blând, cu pauze, și îți spunem dinainte la ce să te aștepți. După prima ședință, următoarele devin vizibil mai ușoare, pentru că gingia se dezinflamează.' },
      { q: 'Parodontoza se moștenește? Tata a rămas fără dinți din cauza ei.', a: 'Există o predispoziție moștenită, da — dar predispoziție nu înseamnă destin. Cu controale regulate, igienizări la timp și tratament parodontal atunci când e cazul, îți poți păstra dinții chiar dacă părinții tăi nu au reușit. Diferența o face de obicei momentul în care ajungi la medic, nu genele.' },
    ],
    ctaText: 'Dacă periuța iese roz în fiecare dimineață, hai să vedem împreună de ce — sună la 0771 582 416 și lămurim lucrurile la primul consult.',
    related: ['detartraj-tartru-acasa', 'implant-dentar-intrebari'],
  },
  {
    slug: 'albirea-dintilor-mituri',
    category: 'Estetică',
    date: '2026-05-21',
    image: '/media/services/zambet-estetica.jpg',
    imageAlt: 'Zâmbet luminos și natural, după un tratament de estetică dentară',
    title: 'Albirea dinților: ce e adevărat și ce e mit',
    metaTitle: 'Albirea dinților: mituri și adevăruri — ARdental Arad',
    metaDescription: 'Bicarbonat, lămâie, cărbune — funcționează la albirea dinților? Separăm miturile de adevăr și îți spunem cât ține rezultatul, cu explicații simple.',
    excerpt: 'Bicarbonatul și lămâia nu albesc — zgârie. Ce funcționează de fapt, de ce albirea se face doar pe dinți sănătoși și cât ține rezultatul.',
    intro: [
      'Dacă ai căutat vreodată „albire dentară” pe internet, ai dat peste toate: bicarbonat, lămâie, cărbune activ, benzi de la farmacie. Unele funcționează. Multe nu. Câteva chiar îți strică dinții.',
      'La telefon primim des întrebări despre dinți albi, așa că am pus lucrurile cap la cap: ce albește cu adevărat, ce doar zgârie smalțul și de ce nu orice dinte e pregătit pentru albire.',
    ],
    sections: [
      {
        heading: 'Bicarbonatul, lămâia și cărbunele: de ce par să funcționeze',
        paragraphs: [
          'Toate trei au același truc: sunt abrazive sau acide. Freacă stratul de la suprafața dintelui și dau jos o parte din petele de cafea sau tutun. Dinții par puțin mai luminoși o vreme, așa că mitul se întreține singur.',
          'Problema e ce se întâmplă dedesubt. Smalțul nu se reface — ce ai pilit cu bicarbonat rămâne pilit. Iar sub smalț stă dentina, care e gălbuie din naștere. Cu cât subțiezi smalțul, cu atât se vede dentina mai bine. Adică exact efectul invers: dinți mai galbeni pe termen lung, plus sensibilitate la rece.',
          'Pe scurt, ce fac de fapt „remediile” de pe internet:',
        ],
        list: [
          'Bicarbonatul — șlefuiește. Curăță niște pete, nu schimbă culoarea dintelui.',
          'Lămâia — acidul dizolvă smalțul. Cea mai proastă idee din toate.',
          'Cărbunele activ — abraziv și el, cu zero dovezi că albește ceva.',
        ],
      },
      {
        heading: 'Pete de cafea sau culoarea dintelui? Nu e același lucru',
        paragraphs: [
          'Multă lume vine „la albire” și pleacă mulțumită după o simplă curățare. Asta pentru că petele de la suprafață — cafea, ceai, tutun, vin roșu — nu se scot cu albire, ci cu o {{link:igienizare:igienizare profesională}}: detartraj cu ultrasunete, curățare cu jet de pulbere fină și periaj profesional. Dintele revine la culoarea lui reală, care de multe ori e mai deschisă decât te aștepți.',
          'Albirea propriu-zisă e altceva: un gel pe bază de peroxid care pătrunde în smalț și deschide culoarea dintelui însuși, nu doar suprafața. De aceea recomandăm mereu ordinea asta — întâi igienizare, apoi vedem dacă mai e nevoie de albire. Uneori nu mai e.',
        ],
      },
      {
        heading: 'Un dinte cu carie nu se albește. Se tratează',
        paragraphs: [
          'Gelul de albire nu știe să ocolească problemele. Dacă ai o carie, gelul ajunge prin ea direct la nerv — și durerea aia nu o uiți repede. Dacă ai tartru, gelul lucrează pe tartru în loc de dinte și rezultatul iese pătat. Dacă gingiile sângerează, gelul le irită.',
          'Așa că albirea începe, oricât de ciudat sună, cu un consult. Verificăm cariile, plombele vechi, starea gingiilor. Rezolvăm întâi ce e de rezolvat, apoi albim. Pe un dinte sănătos, albirea făcută corect nu strică smalțul — asta e partea pe care miturile o încurcă.',
        ],
      },
      {
        heading: 'Alb natural sau alb de neon: ce nuanță ți se potrivește',
        paragraphs: [
          'Dinții naturali nu sunt albi ca hârtia. Au o nuanță care ține de vârstă, de grosimea smalțului și, sincer, de noroc. Albirea deschide nuanța ta cu câteva trepte — dinții rămân ai tăi, doar mai luminoși. Un reper simplu: albul dinților să nu-l depășească pe cel al ochilor.',
          'Dacă vrei o schimbare mai mare decât poate da albirea — formă, aliniament, culoare uniformă — acolo intră {{link:estetica-dentara:fațetele dentare}}. Iar nuanța lor nu se alege din catalog „cel mai alb”, ci după fața ta: tenul, buzele, culoarea ochilor. Un alb de neon se vede de la un kilometru, și nu în sensul bun.',
        ],
      },
      {
        heading: 'Cât ține rezultatul și ce îl scurtează',
        paragraphs: [
          'Depinde aproape în întregime de tine. Cafeaua zilnică, vinul roșu, ceaiul negru și mai ales tutunul recolorează dinții treptat — la fel cum au făcut-o și înainte de albire. La cineva care fumează și bea trei cafele pe zi, efectul se duce vizibil mai repede decât la cineva care nu.',
          'În primele două zile după albire smalțul e mai primitor cu pigmenții, așa că ținem o regulă simplă: dacă pătează o cămașă albă, pătează și dinții. După aceea, o igienizare la șase luni întreține rezultatul mai bine decât orice pastă „whitening”. Iar dacă nu ești sigur de unde să începi — de la o curățare sau direct de la albire — {{link:contact:sună-ne}} și lămurim la telefon.',
        ],
      }
    ],
    faq: [
      { q: 'Doare albirea? Am auzit că rămâi cu dinții sensibili.', a: 'O sensibilitate ușoară la rece în primele zile e normală și trece de la sine. Nu e durere, e mai degrabă un junghi scurt la apă rece. Riscul scade mult când albirea se face pe dinți sănătoși, fără carii și fără smalț subțiat de bicarbonat — încă un motiv pentru consultul de dinainte.' },
      { q: 'Am plombe în față și o coroană. Se albesc și ele?', a: 'Nu. Gelul lucrează doar pe dintele natural — plombele și coroanele rămân la culoarea lor. De aceea planificăm în ordinea corectă: întâi albim dinții, apoi schimbăm plombele sau coroana vizibilă ca să se potrivească noii nuanțe. Invers nu funcționează.' },
      { q: 'Nu pot să folosesc benzile de albire de la farmacie?', a: 'Poți, dar pe riscul tău. Concentrația e mică, deci efectul e modest, iar dacă ai o carie nedescoperită sau tartru, gelul îți face mai mult rău decât bine. Măcar vino întâi la un control, să știm că dinții sunt pregătiți — după aceea alegerea e a ta.' },
    ],
    ctaText: 'Dacă vrei să vezi ce culoare au dinții tăi de fapt, sub petele de cafea, te așteptăm pe Calea Aurel Vlaicu 156 — sună la 0771 582 416 și găsim împreună o oră care îți convine.',
    related: ['detartraj-tartru-acasa', 'frica-de-dentist'],
  },
]
