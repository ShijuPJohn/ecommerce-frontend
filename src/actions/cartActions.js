import {CART_ADD_ITEM, CART_SET_ITEM_QTY, PRODUCT_LIST_FAIL} from "../constants";
import axios from "axios";

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
