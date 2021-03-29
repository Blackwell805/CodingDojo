import { navigate } from '@reach/router';
import React from 'react'

const TruckCard = props => {
    const {truck} = props;
    
    return (
        <div className="row">
            <div className="col-sm-6">
                <h5>{truck.name}</h5>
                <p>Style: {truck.style}</p>
                <p>Average Rating: {truck.reviews.length === 0 ? 0 : truck.reviews.reduce((sum, cur) => ({rating: sum.rating + cur.rating})).rating/truck.reviews.length } stars</p>
            </div>
            <div className="col-sm-6">
                <button className="btn btn-primary" onClick={()=>navigate(`/truck/${truck._id}/edit`)} >Edit</button>
                <button className="btn btn-secondary">Review</button>
            </div>

        </div>
    )
}

export default TruckCard
