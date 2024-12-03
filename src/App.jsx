import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Home, AboutUs, Services, UseCases, Pricing, Blog, ErrorPage, Layout } from "./pages"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
