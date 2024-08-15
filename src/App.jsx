import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hub from './components/Hub'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFount'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hub />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
