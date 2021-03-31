import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link,navigate} from '@reach/router'


const Detail = (props) => {
    const [ product, setProduct ] = useState([]);

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response=>{
                setProduct(response.data) 
            })      
    }, []);

    const deleteProduct = productID=>{
        axios.delete(`http://localhost:8000/api/product/${productID}`)
        .then(navigate('/')
        )};

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/'+product._id+'/edit'}>Edit</Link>
            <p onClick={e=> deleteProduct(product._id)}>Delete</p>
        </div>
    )
}

export default Detail
