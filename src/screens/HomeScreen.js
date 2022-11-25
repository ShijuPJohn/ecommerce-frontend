import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import {listProducts} from "../actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(() => {
        listProducts(dispatch)
    }, [])
    return (<>

        {loading ? <Loader/> : error ? <Message variant={"danger"}>{error}</Message> : <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (<Col key={product._id} sm={12} md={2} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>))}
            </Row>
        </>}

    </>);
}

export default HomeScreen;