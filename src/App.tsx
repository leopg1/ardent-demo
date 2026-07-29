import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'

const Despre = lazy(() => import('./pages/Despre'))
const Echipa = lazy(() => import('./pages/Echipa'))
const ServiciiIndex = lazy(() => import('./pages/ServiciiIndex'))
const Implantologie = lazy(() => import('./pages/servicii/Implantologie'))
const EsteticaDentara = lazy(() => import('./pages/servicii/EsteticaDentara'))
const CoroaneZirconiu = lazy(() => import('./pages/servicii/CoroaneZirconiu'))
const Endodontie = lazy(() => import('./pages/servicii/Endodontie'))
const Igienizare = lazy(() => import('./pages/servicii/Igienizare'))
const Ortodontie = lazy(() => import('./pages/servicii/Ortodontie'))
const Parodontologie = lazy(() => import('./pages/servicii/Parodontologie'))
const ChirurgieOrala = lazy(() => import('./pages/servicii/ChirurgieOrala'))
const StomatologieGenerala = lazy(() => import('./pages/servicii/StomatologieGenerala'))
const Cazuri = lazy(() => import('./pages/Cazuri'))
const Testimoniale = lazy(() => import('./pages/Testimoniale'))
const Oferte = lazy(() => import('./pages/Oferte'))
const Contact = lazy(() => import('./pages/Contact'))
const Confidentialitate = lazy(() => import('./pages/Confidentialitate'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#continut"
        className="btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Sari la conținut
      </a>
      <Header />
      <main id="continut" tabIndex={-1} className="flex-1">
        <Suspense fallback={<div className="section-pad container-site" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/echipa" element={<Echipa />} />
            <Route path="/servicii" element={<ServiciiIndex />} />
            <Route path="/servicii/implantologie" element={<Implantologie />} />
            <Route path="/servicii/estetica-dentara" element={<EsteticaDentara />} />
            <Route path="/servicii/coroane-zirconiu" element={<CoroaneZirconiu />} />
            <Route path="/servicii/endodontie" element={<Endodontie />} />
            <Route path="/servicii/igienizare" element={<Igienizare />} />
            <Route path="/servicii/ortodontie" element={<Ortodontie />} />
            <Route path="/servicii/parodontologie" element={<Parodontologie />} />
            <Route path="/servicii/chirurgie-orala" element={<ChirurgieOrala />} />
            <Route path="/servicii/stomatologie-generala" element={<StomatologieGenerala />} />
            <Route path="/cazuri" element={<Cazuri />} />
            <Route path="/testimoniale" element={<Testimoniale />} />
            <Route path="/oferte" element={<Oferte />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confidentialitate" element={<Confidentialitate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
