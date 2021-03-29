import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
const {id} = props;


const deleteThing = () => {
    axios.delete(`http://localhost:8000/api/trucks/${id}`)
    .then(response=>navigate('/'))
    .catch(err=>navigate('/'))
}
    return (
        <button className='btn btn-danger col-sm-3' onClick={deleteThing}>Delete</button>
    )
}

export default DeleteButton
