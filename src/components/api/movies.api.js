import axios from "axios";

export const getMovies = () => 
    axios.get('http://localhost:3000/movies')

export const getMovieById = (id) =>
    axios.get(`http://localhost:3000/movie/${id}`)

export const insertMovie = (movie) => 
    axios.post(`http://localhost:3000/insert`, movie)