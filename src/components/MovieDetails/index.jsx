import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../api/movies.api'

const MovieDetails = () => {
    const id = useParams().id
      const [movie, setMovie] = React.useState({})
    useEffect(()=>{
      const cargarDatos = async () => {
        try {
          const resultado = await getMovieById(id);
          console.log(resultado.data[0]);
          setMovie(resultado.data[0])
        } catch (error) {
          console.log(error);
        }
      }
      cargarDatos()
    },[])
  return (
    <div>
      <h1>{movie.titulo}</h1>
      <h3>{movie.anio}</h3>
      <h4>{movie.genero}</h4>
      <h4>{movie.director}</h4>
    </div>
  )
}

export default MovieDetails
