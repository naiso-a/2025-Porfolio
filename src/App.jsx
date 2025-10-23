
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  NavBar, Home, Footer
} from '../src/components/index';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col"> 
        <Router>
          <NavBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
