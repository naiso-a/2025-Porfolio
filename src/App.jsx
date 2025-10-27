
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  NavBar, Home, Footer, About, Projects
} from '../src/components/index';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col"> 
        <Router basename='/2025-Porfolio'>
          <NavBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
