import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { insertMovie } from '../api/movies.api'
import { RollerSkating } from '@mui/icons-material'

const MovieRegister = () => {
    const [movie, setMovie] = useState({ titulo: "", anio: 0, genero: "", director: "" })

    const handleChange = (event) => {
        setMovie({...movie, [event.target.name]:event.target.value})        
    }

    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const result = await insertMovie(movie)
            console.log('result',result)
            if(result.status === 200)
                alert('Pelicula guardada exitosamente')
        } catch (error) {
            console.log(error);
            alert('ERROR !!')
        }
    }

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>Registro de peliculas</h1>
            </Grid>

            <Grid item xs={12}>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={3}>
                            <TextField label="Título"
                                type="text"
                                fullWidth
                                name='titulo'
                                onChange={handleChange} 
                                style={{background: '#fff'}}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                        <TextField 
                                type="number"
                                fullWidth
                                name='anio'
                                onChange={handleChange} 
                                style={{background: '#fff'}}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                        <TextField label="Género"
                                type="text"
                                fullWidth
                                name='genero'
                                onChange={handleChange} 
                                style={{background: '#fff'}}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                        <TextField label="Director"
                                type="text"
                                fullWidth
                                name='director'
                                onChange={handleChange} 
                                style={{background: '#fff'}}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <button onClick={(e) => handleSumbit(e)}>Guardar</button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>

    )
}

export default MovieRegister