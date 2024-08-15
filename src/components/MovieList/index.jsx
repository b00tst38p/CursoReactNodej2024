import React from 'react'
import MovieCard from '../MovieCard'
import { Grid } from '@mui/material'

const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((m) => {
                return (
                    <MovieCard
                        key={m.id}
                        pelicula={m}
                    />
                )
            })}
        </div>
    )
}

export default MovieList