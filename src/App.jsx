import { NavBar } from "./components"
import { Hero, Sponsors, Services } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <Sponsors />
      <Services />
    </div>
  )
}

export default App
