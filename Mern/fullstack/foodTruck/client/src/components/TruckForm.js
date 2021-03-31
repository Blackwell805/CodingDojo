import React from 'react'
import { navigate } from '@reach/router';
const TruckForm = props => {
    const { truck, errors, inputHandler, submitHandler, DeleteBtn } = props;

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group row">
                {
                    errors.name ?
                        <span className="col-sm-12">{errors.name.message}</span>
                        : ''
                }
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" onChange={e => inputHandler(e)} className="col-sm-8 " value={truck.name} />
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                        <span className="col-sm-12">{errors.style.message}</span>
                        : ''
                }
                <label htmlFor="style" className="col-sm-4">Style: </label>
                <input type="text" name="style" className="col-sm-8 " value={truck.style} onChange={e => inputHandler(e)} />
            </div>
            <div className="form-group row">
                {
                    errors.description ?
                        <span className="col-sm-12">{errors.description.message}</span>
                        : ''
                }
                <label htmlFor="description" className="col-sm-4">Description: </label>
                <textarea name="description" onChange={e => inputHandler(e)} className="col-sm-8 " rows="4" value={truck.description}></textarea>
            </div>
            <div className="form-group row">
                {
                    DeleteBtn ?
                        DeleteBtn
                        :
                        ''
                }
                <button type="button" className="btn btn-secondary col-sm-3" onClick={() => navigate('/')}>Cancel</button>
                <input type="submit" value="Submit" className="btn btn-primary col-sm-3" />
            </div>
        </form>
    )
}

export default TruckForm