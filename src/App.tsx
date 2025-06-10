import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmpoweringSection from './components/EmpoweringSection'
import Features from './components/Features'
import AppPromoSection from './components/AppPromoSection'
import OurFocusSection from './components/OurFocusSection'
import AboutUsSection from './components/AboutUsSection'
import Footer from './components/Footer'
import Learning from './pages/Learning'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-['Inter',_sans-serif]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <EmpoweringSection />
                <Features />
                <AppPromoSection />
                <OurFocusSection />
                <AboutUsSection />
              </>
            } />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
