import React from 'react'

const ReviewForm = props => {
    const { review, setReview, changeHandler, submitHandler, errors, setErrors } = props;

    const clearForm = () => {
        setReview({
            name: "",
            rating: 3,
            review: ""
        });
        setErrors({});
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group row">
                <div className="form-group col-sm-6">
                    {
                        errors.name ? 
                        <p className="col-sm-12">{errors.name.message}</p>
                        :
                        ''
                    }
                    <label htmlFor="name" className="col-sm-4">Name:</label>
                    <input type="text" name="name" value={review.name} onChange={changeHandler} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group col-sm-6">
                    {
                        errors.rating ? 
                        <p className="col-sm-12">{errors.rating.message}</p>
                        :
                        ''
                    }
                    <label htmlFor="rating" className="col-sm-4">Rating:</label>
                    <select name="rating" onChange={changeHandler} value={review.rating} className="col-sm-8 form-control">
                        <option value={1}>1 star</option>
                        <option value={2}>2 stars</option>
                        <option value={3}>3 stars</option>
                        <option value={4}>4 stars</option>
                        <option value={5}>5 stars</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="form-group col-sm-6">
                    {
                        errors.review ? 
                        <p className="col-sm-12">{errors.review.message}</p>
                        :
                        ''
                    }
                    <label htmlFor="review" className="col-sm-4">Review: </label>
                    <textarea name="review" rows="5" className="col-sm-8 form-control" value={review.review} onChange={changeHandler}></textarea>
                </div>
                <div className="form-group col-sm-6">
                    <button type="button" className="btn btn-secondary col-sm-3" onClick={clearForm}>Cancel</button>
                    <input type="submit" value="Submit" className="btn btn-primary col-sm-3"/>
                </div>
            </div>
        </form>
    )
}

export default ReviewForm