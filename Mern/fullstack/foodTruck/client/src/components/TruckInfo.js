import React from 'react'
import ReviewInfo from './ReviewInfo';

const TruckInfo = props => {
    const { truck } = props;
    return (
        <>
        <div className="row">
            <h2>{truck.name}</h2>
            <p>Style: {truck.style}</p>
            <p>Description: {truck.description}</p>
            <p>Average Rating: { truck.reviews.length === 0 ? 0 : (truck.reviews.reduce((sum, cur) => ({ rating: sum.rating + cur.rating})).rating / truck.reviews.length).toFixed(1) } stars</p>
        </div>
        <div className="row" style={{ overflow: 'auto', height: '30vh'}}>
            {
                truck.reviews.map((review, i) => 
                    <ReviewInfo key={i} review={review}/>
                )
            }
        </div>
        </>
    )
}

export default TruckInfo