import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then(response=>{ //This is clearing out the input areas after pushing submitting
            setTitle('')
            setPrice(0)
            setDescription('')
            props.setProducts([...props.products, response.data])
        })
        .catch(err=>console.log(err))
    }

    return (
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

    )
}

export default ProductForm
