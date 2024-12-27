import { NavBar } from "./components"
import { Hero, Sponsors, Services, CaseStudies, OurWorkingProcess, Team, Testimonials, Contact, Footer } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <Sponsors />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
