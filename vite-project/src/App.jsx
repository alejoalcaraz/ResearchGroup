import { useState } from 'react'

import PaginaPrincipal from './pages/PaginaPrincipal';
import Research from './pages/Research';
import Team from './pages/Team';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { NavLink } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <div class="clear"></div>
      <div className="container-fluid fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-0 border-top">
          <p className="col-md-5 mb-0 text-body-secondary">© 2024 Universidad de los Andes</p>
          <ul className="nav col-md-5 justify-content">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="/Research" className="nav-link px-2 text-body-secondary">Research</a></li>
            <li className="nav-item"><a href="/Team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a target="_blank" href="https://www.minoruhiga.com" className="nav-link px-2 text-body-secondary">Minoru's Website</a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App
