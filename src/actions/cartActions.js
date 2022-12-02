import axios from "axios";
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SET_ITEM_QTY} from "../constants/cartConstants";
import {PRODUCT_LIST_FAIL} from "../constants/productConstants";

export const addToCart = async (dispatch, cartState, id, qty, isAdd) => {
    try {
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: isAdd ? CART_ADD_ITEM : CART_SET_ITEM_QTY,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
    } catch (e) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        })
    }
}

export const removeFromCart = async (dispatch, id) => {
    try {
        // const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: {
                id
            }
        })
    } catch (e) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        })
    }
}
