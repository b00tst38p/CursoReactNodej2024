import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hub from './components/Hub'
import MovieRegister from './components/MovieRegister'
import NotFound from './components/NotFount'


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
                <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Nueva Película</Link>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 2, width: '100%', padding: '20px' }}>
            <Routes>
              <Route path='/' element={<Hub />} />
              <Route path='/register' element={<MovieRegister />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </>
  )
}

export default App
