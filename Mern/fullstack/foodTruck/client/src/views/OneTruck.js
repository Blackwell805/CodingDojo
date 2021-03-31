import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import TruckInfo from '../components/TruckInfo';
import ReviewForm from '../components/ReviewForm';

const OneTruck = props => {
    const { id } = props;
    const [truck, setTruck] = useState({
        reviews: []
    });
    const [review, setReview] = useState({
        name: "",
        rating: 3,
        review: ""
    });
    const [reviewErrors, setReviewErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trucks/${id}`)
            .then(response => {
                if(response.data.message === "success" && response.data.results === null){
                    navigate('/');
                } else {
                    let gottenTruck = response.data.results;
                    gottenTruck.reviews.sort((a,b) => b.rating - a.rating);
                    setTruck(gottenTruck);
                }
            })
            .catch(err => console.log(err));
    }, [])

    const changeHandler = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/trucks/${id}/review`, review)
            .then(response => {
                if(response.data.message === "error"){
                    console.log(response.data.errors);
                    setReviewErrors(response.data.errors);
                } else {
                    let gottenTruck = response.data.results;
                    gottenTruck.reviews.sort((a,b) => b.rating - a.rating);
                    setTruck(gottenTruck);
                    setReview({
                        name: "",
                        rating: 3,
                        review: ""
                    });
                    setReviewErrors({});
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <TruckInfo truck={truck}/>
            <ReviewForm 
                review={review} 
                setReview={setReview}
                changeHandler={changeHandler} 
                errors={reviewErrors} 
                setErrors={setReviewErrors}
                submitHandler={submitHandler} 
            />
        </div>
    )
}

export default OneTruck
