import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';



const OneMovie = (props) => {
    const { id } = props;

    const [movie, setMovie] = useState({
        reviews: []
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then(response => {
                if(response.data.message === "success" && response.data.results === null){
                    navigate('/');
                } else {
                    setMovie(response.data.results);
                }
            })
            .catch(err => console.log(err));
    }, [])

    const deleteMovie = () => {
        axios.delete(`http://localhost:8000/api/movies/${movie._id}`)
        .then(res => {
            if(res.data.message === 'error'){
                alert("Did not delete!");
            }
            else if(res.data.results.deletedCount === 0){
                alert("That's already been deleted. Refresh!");
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h3>Reviews for {movie.title} </h3>
            <table>
                <thead>
                    <tr>
                        <th>Reviewer</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movie.reviews.map((tomato, i) => {
                            return (
                                <tr key={i}>
                                    <td>{tomato.name}</td>
                                    <td>{tomato.rating}</td>
                                    <td>{tomato.review}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h4>Delete Movie?</h4>
            <input type='submit' onClick={(e)=>deleteMovie(e.target.value)} />
        </div>
    )
}

export default OneMovie
