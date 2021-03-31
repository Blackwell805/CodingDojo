import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import { Link } from '@reach/router';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(response => {
                setMovies(response.data.results)
                console.log(response)
            })
            .catch(err => console.log("Something went wrong: ", err));
    }, [])

    return (
        <div>
            <Link to='/movies/new' >Add a New Movie</Link>
            {
                movies.map((item, i) =>
                    <MovieList movie={item} key={i} />
                )
            }
        </div>
    )
}

export default Dashboard
