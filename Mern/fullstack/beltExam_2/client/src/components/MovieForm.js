import React from 'react'
import { navigate } from '@reach/router';

const MovieForm = (props) => {
    const { movie, errors, movieHandler, reviewHandler, submitHandler, review } = props;

    return (
        <form onSubmit={submitHandler}>
            <div>
                {
                    errors.title ?
                        <span>{errors.title.message}</span>
                        : ''
                }
                <label htmlFor="title" >title: </label>
                <input type="text" name="title" onChange={e => movieHandler(e)} value={movie.title} />
            </div>
            <div>
                {
                    errors['reviews.0.name']?
                        <p className>{errors['reviews.0.name'].message}</p>
                        :
                        ''
                }
                <label htmlFor="name" className="col-sm-4">Name:</label>
                <input type="text" name="name" value={review.name} onChange={e => reviewHandler(e)} />
            </div>
            <div className="form-group col-sm-6">
                {
                    errors['reviews.0.rating']?
                        <p className>{errors['reviews.0.rating'].message}</p>
                        :
                        ''
                }
                <label htmlFor="rating" >Rating:</label>
                <select name="rating" onChange={e => reviewHandler(e)} value={review.rating} >
                    <option value={1}>1 star</option>
                    <option value={2}>2 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={5}>5 stars</option>
                </select>
            </div>

            <div className="form-group row">
                <div className="form-group col-sm-6">
                    {
                        errors['reviews.0.review']?
                            <p className="col-sm-12">{errors['reviews.0.review'].message}</p>
                            :
                            ''
                    }
                    <label htmlFor="review" >Review: </label>
                    <textarea name="review" rows="5" className="col-sm-8 form-control" value={review.review} onChange={e => reviewHandler(e)}></textarea>
                </div>

                <button type="button" className="btn btn-secondary col-sm-3" onClick={() => navigate('/')}>Cancel</button>
                <input type="submit" value="Submit" className="btn btn-primary col-sm-3" />
            </div>
        </form >
    )
}

export default MovieForm
