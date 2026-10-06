/**
 * Întrebări frecvente — folosite pe Oferte (integral) și Contact (subset).
 * Răspunsurile sunt preluate din materialele educaționale publicate chiar de clinică
 * pe Facebook și Instagram (vezi §9 din dosarul de research).
 */

import { site } from './site'

export type FaqItem = { q: string; a: string }

export const faqItems: FaqItem[] = [
  {
    q: 'Cât costă o consultație?',
    // Numărul vine din site.phone: dacă se schimbă, se schimbă și în datele
    // structurate trimise la Google, nu doar în footer.
    a: `Sună-ne la ${site.phone} pentru tariful actual. La consultație primești evaluarea completă și planul de tratament, cu toate costurile explicate pe înțeles, înainte să înceapă orice procedură.`,
  },
  {
    q: 'Tratamentele dor?',
    a: 'Lucrăm cu anestezie locală și pe îndelete, iar confortul tău e prioritar la fiecare pas. Mulți dintre pacienții noștri spun în recenzii exact asta: că aici au scăpat de frica de dentist. „Totul a decurs rapid și fără durere” este una dintre cele mai frecvente formulări.',
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da. Oferim plata în rate flexibile prin TBI Bank și Banca Transilvania, pentru implanturi, coroane, fațete sau reabilitări orale complexe. Cererea se completează la noi în clinică, iar răspunsul vine rapid.',
  },
  // „Pot să îmi îndepărtez singur tartrul acasă?” și „Se albesc dinții după igienizare?”
  // au fost scoase de aici: există, cu răspunsuri proprii, pe /servicii/igienizare.
  // Aceleași întrebări marcate FAQPage pe două pagini fac Google să ignore marcajul.
  {
    q: 'Ce presupune o igienizare profesională?',
    a: 'Nu înseamnă doar un simplu detartraj. Este un proces în trei pași: detartraj ultrasonic (îndepărtează tartrul și placa bacteriană), AirFlow (elimină petele și depunerile fine) și periaj profesional (curăță suprafața dinților și reduce bacteriile).',
  },
  {
    q: 'De unde știu că am nevoie de o igienizare?',
    a: 'Semnele obișnuite sunt: respirație neplăcută persistentă, depuneri vizibile de tartru mai ales lângă gingii, sângerare gingivală la periaj, gingii sensibile sau inflamate, retracție gingivală, pete de la cafea, ceai sau tutun și senzația de dinți „aspri”.',
  },
  {
    q: 'Cât durează un implant dentar?',
    a: 'Inserarea durează de regulă sub o oră. Integrarea în os ia între 3 și 6 luni, apoi se montează lucrarea finală. Primești calendarul complet la consultație, înainte să începem.',
  },
  {
    q: 'Cum se face sterilizarea instrumentarului?',
    a: 'Respectăm strict protocoalele de igienă și sterilizare, cu proceduri conforme standardelor medicale actuale: curățare, dezinfectare și sterilizare pentru fiecare instrument. Siguranța pacienților și a echipei este o prioritate la fiecare etapă.',
  },
  {
    q: 'Cât de des ar trebui să vin la control?',
    a: 'O dată la șase luni pentru control și igienizare profesională. Este cel mai ieftin tratament din stomatologie și cel care previne majoritatea problemelor costisitoare de mai târziu.',
  },
]

/**
 * Subsetul afișat pe pagina de Contact, lângă formular: doar întrebările pe care
 * oamenii le pun chiar înainte de programare. Selecția e pe întrebare, nu pe poziție,
 * ca o reordonare a listei de pe /oferte să nu schimbe tăcut pagina de contact.
 */
const intrebariDeDinainteaProgramarii = [
  'Cât costă o consultație?',
  'Tratamentele dor?',
  'Pot plăti în rate?',
  'Cât de des ar trebui să vin la control?',
]

export const contactFaq: FaqItem[] = faqItems.filter((item) =>
  intrebariDeDinainteaProgramarii.includes(item.q),
)
