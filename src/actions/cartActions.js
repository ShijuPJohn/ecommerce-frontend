import {CART_ADD_ITEM, PRODUCT_LIST_FAIL} from "../constants";
import axios from "axios";

export const addToCart = async (dispatch, cartState, id, qty) => {
    try {
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.price,
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