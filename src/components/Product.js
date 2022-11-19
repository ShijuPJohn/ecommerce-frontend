import React from 'react';

function Product({product}) {
    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt="image"/>
        </div>
    );
}

export default Product;