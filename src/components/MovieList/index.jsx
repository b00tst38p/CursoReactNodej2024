import React from 'react'
import MovieCard from '../MovieCard'
import { Grid } from '@mui/material'

const MovieList = (props) => {
    return (
        <div>
            <Grid container spacing={3}>
                {props.movies.map((m) => {
                    return (
                        <Grid item key={m.id} xs={12} md={6} lg={3}>
                            <MovieCard
                                pelicula={m}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default MovieList