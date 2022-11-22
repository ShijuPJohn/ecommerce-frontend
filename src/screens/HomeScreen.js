import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get('http://localhost:8000/api/products')
            setProducts(data)
        }

        fetchProducts()

    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={2} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default HomeScreen;