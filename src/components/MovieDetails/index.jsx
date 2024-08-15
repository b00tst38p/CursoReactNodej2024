import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const id = useParams().id
  return (
    <div>Detalles de pelicula {id}

    </div>
  )
}

export default MovieDetails
