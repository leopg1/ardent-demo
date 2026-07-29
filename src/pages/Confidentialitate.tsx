import type { ReactNode } from 'react'
import { site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-plum-950 md:text-3xl">{title}</h2>
      <div className="mt-3.5 space-y-3.5 text-base leading-relaxed text-plum-900/75">
        {children}
      </div>
    </section>
  )
}

function Li({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

export default function Confidentialitate() {
  usePageMeta(
    'Politica de confidențialitate — ARdental proSmile Arad',
    'Cum prelucrează ARdental proSmile Arad datele tale personale: ce colectăm prin formularul de programare, în ce scop, temeiul legal și drepturile tale GDPR.',
  )

  return (
    <>
      {/* Antet */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Informații legale</p>
            <h1 className="h-display mt-3 text-4xl md:text-5xl">Politica de confidențialitate</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/70">
              Îți respectăm datele personale la fel cum îți respectăm zâmbetul: cu grijă și
              transparență. Mai jos găsești, pe scurt, cum prelucrăm datele pe care ni le trimiți
              prin acest site.
            </p>
            <p className="mt-4 text-xs font-semibold text-plum-900/50">
              Ultima actualizare: iulie 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Conținut */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-12">
              <LegalSection title="1. Cine este operatorul de date">
                <p>
                  Operatorul datelor tale cu caracter personal este{' '}
                  <strong className="font-bold text-plum-950">{site.legalName}</strong> („
                  {site.name}”), {site.cui}, înregistrată la Registrul Comerțului sub nr.{' '}
                  {site.regCom}, cu punct de lucru în {site.address}.
                </p>
              </LegalSection>

              <LegalSection title="2. Ce date colectăm">
                <p>
                  Prin formularul „Cere o programare” de pe pagina de contact colectăm doar datele
                  pe care ni le oferi tu:
                </p>
                <ul className="space-y-2">
                  <Li>numele și prenumele;</Li>
                  <Li>numărul de telefon;</Li>
                  <Li>adresa de e-mail (opțional);</Li>
                  <Li>serviciul dorit și conținutul mesajului tău (opțional).</Li>
                </ul>
                <p>
                  Site-ul nu setează cookie-uri proprii de marketing sau de statistică și nu
                  colectează alte date personale în mod automat. Singura excepție este harta Google
                  Maps integrată în pagina de contact, care poate seta cookie-uri Google la
                  încărcare; modul în care Google le folosește este descris în{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
                  >
                    politica de confidențialitate Google
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection title="3. În ce scop folosim datele">
                <p>Folosim datele din formular exclusiv pentru:</p>
                <ul className="space-y-2">
                  <Li>gestionarea cererii tale de programare;</Li>
                  <Li>contactarea ta pentru confirmarea sau reprogramarea vizitei.</Li>
                </ul>
                <p>
                  Nu folosim datele în scop de marketing, nu trimitem spam și nu transmitem datele
                  tale către terți.
                </p>
              </LegalSection>

              <LegalSection title="4. Temeiul legal al prelucrării">
                <p>
                  Prelucrarea se bazează pe <strong className="font-bold text-plum-950">consimțământul tău</strong>{' '}
                  — art. 6 alin. (1) lit. (a) din Regulamentul (UE) 2016/679 (GDPR) — exprimat prin
                  bifarea căsuței de acord din formular. Îți poți retrage consimțământul oricând,
                  printr-un simplu mesaj la datele de contact de mai jos.
                </p>
              </LegalSection>

              <LegalSection title="5. Cât timp păstrăm datele">
                <p>
                  Păstrăm datele transmise prin formular doar atât cât este necesar pentru
                  gestionarea programării și a relației cu tine ca pacient, cu respectarea
                  obligațiilor legale aplicabile actului medical.
                </p>
              </LegalSection>

              <LegalSection title="6. Drepturile tale">
                <p>Conform GDPR, ai următoarele drepturi în legătură cu datele tale:</p>
                <ul className="space-y-2">
                  <Li>dreptul de acces la date;</Li>
                  <Li>dreptul la rectificarea datelor inexacte;</Li>
                  <Li>dreptul la ștergerea datelor („dreptul de a fi uitat”);</Li>
                  <Li>dreptul la restricționarea prelucrării;</Li>
                  <Li>dreptul la portabilitatea datelor;</Li>
                  <Li>dreptul la opoziție;</Li>
                  <Li>dreptul de a-ți retrage oricând consimțământul.</Li>
                </ul>
                <p>
                  Dacă ai nemulțumiri legate de modul în care îți prelucrăm datele, te poți adresa
                  Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal
                  (ANSPDCP) —{' '}
                  <a
                    href="https://www.dataprotection.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
                  >
                    www.dataprotection.ro
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection title="7. Contactul operatorului">
                <p>
                  Pentru orice întrebare legată de datele tale sau pentru exercitarea drepturilor de
                  mai sus, ne poți scrie la{' '}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
                  >
                    {site.email}
                  </a>{' '}
                  sau ne poți suna la{' '}
                  <a
                    href={site.phoneHref}
                    className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
                  >
                    {site.phone}
                  </a>
                  .
                </p>
              </LegalSection>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
