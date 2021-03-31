import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const { id } = props;

    const deleteThing = () => {
        axios.delete(`http://localhost:8000/api/trucks/${id}`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'))
    }

    return (
        <button type="button" className="btn btn-danger col-sm-3" onClick={ deleteThing }>Delete</button>
    )
}

export default DeleteButton

