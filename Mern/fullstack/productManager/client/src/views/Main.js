import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [ products, setProducts ] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(response=>{
                setProducts(response.data) 
                setLoaded(true)
            })      
    }, []);

    const removeFromDOM = productID=>{
        setProducts(products.filter(product=>product._id !== productID));
    }

    if(!loaded){
        return (
            <p>Loading....</p>
        )
    }
    return (
        <div>
            <ProductForm  products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} removeFromDOM={removeFromDOM} />
        </div>
    )
}
