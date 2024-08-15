import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hub from './components/Hub'
import MovieDetails from './components/MovieDetails'


function App() {

  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', height: '100vh' }}>
          <nav style={{ width: '200px', backgroundColor: '#333', color: '#fff', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
              </li>
              <li>
                <Link to="/movies" style={{ color: '#fff', textDecoration: 'none' }}>Películas</Link>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1, width: '100%', padding: '20px' }}>
            <Routes>
              <Route path='/' element={<Hub />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </>
  )
}

export default App
