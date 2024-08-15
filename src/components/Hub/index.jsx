import React, { useState } from 'react'
import MovieList from '../MovieList'

const Hub = () => {
    const [movies, setMovies] = useState([{id: 1, titulo: "Yo, Robot", anio: 2000, genero:"drama"},{id: 2, titulo: "Yo, Robot", anio: 2000, genero:"drama"}])

  return (
    <div>
        <h1>Netflix</h1>
        <MovieList
            movies={movies}
        />
    </div>
  )
}

export default Hub