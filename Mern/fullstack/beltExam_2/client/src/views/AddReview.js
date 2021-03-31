import React, {useState, useEffect} from 'react';
import ReviewForm from '../components/ReviewForm';
import { navigate } from '@reach/router';
import axios from 'axios';

const AddReview = (props) => {
    const { id } = props;
    const [movie, setMovie] = useState({
        reviews: []
    });
    const [review, setReview] = useState({
        name: "",
        rating: 3,
        review: ""
    });
    const [reviewErrors, setReviewErrors] = useState({});
    const [errors, setErrors] = useState({
        title: null,
    });

    const reviewHandler = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
    }

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

    const submitHandler = e => {
        e.preventDefault();
        let movieCopy = {...movie}
        movieCopy.reviews.push(review)
        axios.post(`http://localhost:8000/api/movies/${id}/review`, review)
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
            <h3>Add a Review for {movie.title}</h3>
            <ReviewForm 
            movie={movie} 
            setMovie={setMovie}
            review={review} 
            setReview={setReview}
            reviewHandler={ reviewHandler } 
            errors={errors} 
            setErrors={setReviewErrors}
            submitHandler={submitHandler} 
            />
        </div>
    )
}

export default AddReview
