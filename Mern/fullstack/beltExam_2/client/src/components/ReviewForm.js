import React from 'react';
import {navigate} from '@reach/router';

const ReviewForm = (props) => {
    const { review, reviewHandler, errors, submitHandler,
} = props;
    return (
        <form onSubmit={submitHandler}>
            <div>
                {
                    errors.name?
                        <p className>{errors.name.message}</p>
                        :
                        ''
                }
                <label htmlFor="name" className="col-sm-4">Name:</label>
                <input type="text" name="name" value={review.name} onChange={e => reviewHandler(e)} />
            </div>
            <div className="form-group col-sm-6">
                {
                    errors.rating?
                        <p className>{errors.rating.message}</p>
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
                        errors.review?
                            <p className="col-sm-12">{errors.review.message}</p>
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

export default ReviewForm
