import { NavBar } from "./components"
import { Hero, Sponsors, Services, CaseStudies } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <Sponsors />
      <Services />
      <CaseStudies />
    </div>
  )
}

export default App
