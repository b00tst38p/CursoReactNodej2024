import { Card, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { titulo, anio, id } = props.pelicula
    return (
        <div>
            <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
                <Card>
                    <CardHeader
                        title={titulo}
                        subheader={anio}
                    />
                </Card>
            </Link>
        </div>
    )
}

export default MovieCard