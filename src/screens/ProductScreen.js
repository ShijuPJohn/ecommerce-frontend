import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {productDetailsAction} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen() {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetailsR)

    const {id} = useParams()
    useEffect(() => {
        productDetailsAction(id, dispatch)
    }, [])
    const {error, loading, product} = productDetails
    return (<>
            {loading ? <Loader/> : error ? <Message variant={"danger"}>{error}</Message> :
            <>
                <Link to={"/"} className={'btn btn-light my-3'}>Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid/>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews}`} color={'#f8e825'}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3 style={{textTransform: "none"}}>{`Price: $${product.price}`}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p style={{textTransform: "none"}}>{`Description: ${product.description}`}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant={"flush"}>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            <strong> {product.countInStock > 0 ? 'In stock' : 'Out of stock'}</strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Button className={'btn-block'} type={"button"} disabled={product.countInStock === 0}>Add
                                        to cart</Button>
                                </ListGroupItem>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </>
            }
        </>
    );
}

export default ProductScreen;