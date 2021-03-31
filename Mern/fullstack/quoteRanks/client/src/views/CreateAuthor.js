import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const CreateAuthor = () => {
const [author, setAuthor] = useState('')

const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/new', {
        author,
    })
    .then(response=>{
        console.log(response)
        navigate('/')
    })
    .catch(err=>console.log(err))
}

    return (
        <div>
            <AuthorForm onSubmitHandler={onSubmitHandler} setAuthor={e=>setAuthor(e.target.value)} author={author}/>
        </div>
    )
}

export default CreateAuthor
