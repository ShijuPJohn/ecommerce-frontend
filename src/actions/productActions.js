import axios from "axios";
import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";

export const listProducts = async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch (e) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.detail : e.message
        })
    }
}
export const productDetailsAction = async (pid, dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${pid}`)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (e) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.detail : e.message
        })
    }
}