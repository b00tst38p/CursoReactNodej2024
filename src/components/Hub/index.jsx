import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList'
import { getMovies } from '../api/movies.api'

const Hub = () => {
  const [movies, setMovies] = useState([{ id: 1, titulo: "Yo, Robot", anio: 2000, genero: "drama" }, { id: 2, titulo: "Yo, Robot", anio: 2000, genero: "drama" }])

  useEffect(()=>{
    const cargarPeliculas = async () =>{
      try {
        const resultado = await getMovies()
        setMovies(resultado.data)
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    cargarPeliculas();    
  },[])

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