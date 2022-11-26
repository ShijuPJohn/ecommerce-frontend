import React, {useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";

function CartScreen(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const qty = searchParams.get("qty")
    const cartState = useSelector(state => state.cart)
    useEffect(() => {
        if (!isNaN(qty)) {
            addToCart(dispatch, cartState, id, qty)
        }

    }, [])
    console.log(cartState)
    return (
        <>
            <h1>Cart : {qty}</h1>
        </>
    );
}

export default CartScreen;