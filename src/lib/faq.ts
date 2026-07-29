/**
 * Întrebări frecvente — folosite pe Oferte (integral) și Contact (subset).
 * Răspunsurile sunt preluate din materialele educaționale publicate chiar de clinică
 * pe Facebook și Instagram (vezi §9 din dosarul de research).
 */

export type FaqItem = { q: string; a: string }

export const faqItems: FaqItem[] = [
  {
    q: 'Cât costă o consultație?',
    a: 'Sună-ne la 0771 582 416 pentru tariful actual. La consultație primești evaluarea completă și planul de tratament, cu toate costurile explicate pe înțeles, înainte să înceapă orice procedură.',
  },
  {
    q: 'Tratamentele dor?',
    a: 'Lucrăm cu anestezie locală și pe îndelete, iar confortul tău e prioritar la fiecare pas. Mulți dintre pacienții noștri spun în recenzii exact asta: că aici au scăpat de frica de dentist. „Totul a decurs rapid și fără durere” este una dintre cele mai frecvente formulări.',
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da. Oferim plata în rate flexibile prin TBI Bank și Banca Transilvania, pentru implanturi, coroane, fațete sau reabilitări orale complexe. Cererea se completează la noi în clinică, iar răspunsul vine rapid.',
  },
  {
    q: 'Pot să îmi îndepărtez singur tartrul acasă?',
    a: 'Nu. Odată format, tartrul aderă ferm la suprafața dintelui și poate fi eliminat doar cu instrumente profesionale, de către medicul stomatolog. Încercarea de a-l îndepărta acasă poate duce la zgârierea smalțului, retracție gingivală și inflamații. Periajul zilnic și ața dentară previn formarea tartrului, dar nu îl pot elimina după ce s-a format.',
  },
  {
    q: 'Ce presupune o igienizare profesională?',
    a: 'Nu înseamnă doar un simplu detartraj. Este un proces în trei pași: detartraj ultrasonic (îndepărtează tartrul și placa bacteriană), AirFlow (elimină petele și depunerile fine) și periaj profesional (curăță suprafața dinților și reduce bacteriile).',
  },
  {
    q: 'De unde știu că am nevoie de o igienizare?',
    a: 'Semnele obișnuite sunt: respirație neplăcută persistentă, depuneri vizibile de tartru mai ales lângă gingii, sângerare gingivală la periaj, gingii sensibile sau inflamate, retracție gingivală, pete de la cafea, ceai sau tutun și senzația de dinți „aspri”.',
  },
  {
    q: 'Se albesc dinții după igienizare?',
    a: 'Igienizarea nu este un tratament de albire, însă dinții pot părea mai albi după procedură, pentru că se îndepărtează tartrul, placa și petele superficiale. Pentru o schimbare reală de culoare este nevoie de un tratament de albire dedicat.',
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

/** Subsetul afișat pe pagina de Contact, lângă formular. */
export const contactFaq = faqItems.slice(0, 4)
