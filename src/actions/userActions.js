import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../constants/userConstants";
import {PRODUCT_DETAILS_FAIL} from "../constants/productConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(
            "http://localhost:8000/api/users/login",
            {"username": email, password},
            config
        )
        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.detail : e.message
        })
    }
}