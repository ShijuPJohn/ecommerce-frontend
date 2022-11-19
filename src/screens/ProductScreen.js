import React from 'react';
import products from "../products";
import {useParams} from "react-router-dom";

function ProductScreen() {
    const {id} = useParams()
    const product = products.find((p) => (p._id === id))
    console.log(product)
    return (
        <>
            <h1>{product.name}</h1>
            <img src={product.image} alt=""/>
        </>
    );
}

export default ProductScreen;