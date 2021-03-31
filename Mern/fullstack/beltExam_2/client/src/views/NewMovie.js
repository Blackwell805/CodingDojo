import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import MovieForm from '../components/MovieForm'

const NewMovie = () => {
    const [movie, setMovie] = useState({
        title: "",
        reviews: []
    });
    const [errors, setErrors] = useState({
        title: null,
    });
    const [review, setReview] = useState({
        name: "",
        rating: 3,
        review: ""
    });
    const [reviewErrors, setReviewErrors] = useState({});

    const movieHandler = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }
    const reviewHandler = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        let movieCopy = {...movie}
        movieCopy.reviews.push(review)
        axios.post('http://localhost:8000/api/movies/new', movie)
            .then(response => {
                console.log(response.data)
                if(response.data.message === "error"){
                    setErrors(response.data.errors);
                } else {
                    navigate('/');
                }
            })
    }
    return (
        <div>
<h4>Submit a Movie and a Review</h4>
            <MovieForm
                movie={ movie }
                review={review}
                movieHandler={ movieHandler }
                reviewHandler={ reviewHandler }
                submitHandler={ submitHandler }
                setErrors={setReviewErrors}
                errors={ errors }
            />
        </div>
    )
}

export default NewMovie
