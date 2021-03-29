import React from 'react'
import {navigate} from '@reach/router';

const TruckForm = (props) => {
    const {truck, errors, inputHandler, submitHandler, DeleteBtn } = props;
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    {
                        errors.name ?
                        <span className="col-sm-12">{errors.name.message}</span>
                        : ""
                    }
                    <label htmlFor="name" className="col-sm-4">Name: </label>
                    <input type="text" name="name" onChange={inputHandler}  className="col-sm-8 form-control" value={truck.name}/>
                </div>
                <div>
                    {
                        errors.type ?
                        <span className="col-sm-12">{errors.type.message}</span>
                        : ""
                    }
                    <label htmlFor="type" className="col-sm-4">Type: </label>
                    <input type="text" name="type" onChange={inputHandler}  className="col-sm-8 form-control" value={truck.type}/>
                </div>
                <div>
                    {
                        errors.description ?
                        <span className="col-sm-12">{errors.description.message}</span>
                        : ""
                    }
                    <label htmlFor="description" className="col-sm-4">Description: </label>
                    <textarea name="description" onChange={inputHandler}  className="col-sm-8 form-control" rows="4" value={truck.description}></textarea>
                </div>
                <div className="form-group row">
                    {
                        DeleteBtn ?
                        <DeleteBtn id={truck._id}/>
                        :
                        " "
                    }
                    <button disabled="disabled" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
                    <input type="submit" value="Submit" className="btn btn-primary col-sm-3"/>
                </div>
            </form>
            
        </div>
    )
}

export default TruckForm
