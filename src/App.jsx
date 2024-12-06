import { NavBar } from "./components"
import { Hero, Sponsors } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <Sponsors />
    </div>
  )
}

export default App
