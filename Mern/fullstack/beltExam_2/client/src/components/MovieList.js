import React from 'react'
import { navigate } from '@reach/router';

const MovieList = props => {
    const { movie } = props;

    return (
        <div className="row">
            <div>
                <h5>{movie.title}</h5>
            </div>
            <div>
                <button onClick={() => navigate(`/movies/${movie._id}`)}>Read Reviews</button>
                <button onClick={ () => navigate(`/movies/${movie._id}/review`)}>Write a Review</button>
            </div>
        </div>
    )
}

export default MovieList