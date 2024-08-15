import { Card, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { titulo, anio, id } = props.pelicula
    return (
        <div>
            <h3>titulo</h3>
            <p>anio</p>
        </div>
    )
}

export default MovieCard