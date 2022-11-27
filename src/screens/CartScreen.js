import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../actions/cartActions";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Message from "../components/Message";

function CartScreen(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()

    const [searchParams, setSearchParams] = useSearchParams();
    const qty = searchParams.get("qty")
    const cartState = useSelector(state => state.cart)
    useEffect(() => {
        if (!isNaN(qty) && id) {
            addToCart(dispatch, cartState, id, qty, true)
        }

    }, [dispatch, id, qty])

    function removeFromCartHandler(item) {
        removeFromCart(dispatch, item.product)
    }

    console.log(cartState.cartItems)
    return (
        <>
            <Row>
                <h1>Shopping Cart</h1>
                <Col md={8}>
                    {cartState.cartItems.length === 0 ? (
                        <><Message variant={'info'}> Your cart is empty

                        </Message>
                            <Button onClick={() => {
                                navigate("/")
                            }}>Go Back</Button></>
                    ) : <>
                        <ListGroup variant={"flush"}>
                            {cartState.cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={"product image"} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control
                                                as={"select"}
                                                value={item.qty}
                                                onChange={(e) => {
                                                    // setQty1(e.target.value)
                                                    addToCart(dispatch, cartState, item.product, parseInt(e.target.value), false)
                                                }}
                                            >
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Col md={1}>
                                            <Button type={"button"} variant={"light"} onClick={() => {
                                                removeFromCartHandler(item)
                                            }}>
                                                <i className={'fas fa-trash'}/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </>}
                </Col>

            </Row>
        </>
    );
}

export default CartScreen;