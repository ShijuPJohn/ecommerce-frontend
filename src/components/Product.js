import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import Rating from "./Rating";
import {Link} from "react-router-dom";
import axios from "axios";

function Product({product}) {

    return (<Card className={"my-3 p-3 rounded"}>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} alt="image"/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`} className={"product-name"}>
                <Card.Title as={"div"}>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as={"div"}>
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews}`} color={"#f8e825"}/>
                </div>
            </Card.Text>
            <Card.Text as={"h3"}>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>);
}

export default Product;