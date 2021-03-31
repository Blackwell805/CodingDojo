import React, {useState, useEffect } from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'

const Update = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response=>{
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
            })
            
    }, []);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${props.id}`, {
            title,
            price,
            description
        })
        .then(()=> navigate('/'))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>UPDATE PRODUCT</h1>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type='text' onChange={(e) =>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label>
                <input type='number' onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label>
                <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type='submit'/>
        </form>
        </div>
    )
}

export default Update
