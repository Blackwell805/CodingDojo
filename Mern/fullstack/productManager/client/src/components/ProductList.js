import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';

const ProductList = (props) => {
    const {removeFromDOM, products} = props;
    const deleteProduct = productID=>{
        axios.delete(`http://localhost:8000/api/product/${productID}`)
        .then(removeFromDOM(productID))
    }
    return (
        <div>
            {
                products.map((product, i)=> {
                    const path=`/${product._id}`
                    return <p key={i}><Link to={path}>{product.title}</Link><button onClick={e=>(deleteProduct(product._id))}>Delete</button></p>
                })
            }
        </div>
    )
}

export default ProductList
