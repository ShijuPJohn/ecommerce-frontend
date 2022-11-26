import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants";

export const cartReducer = (state = {cartItems: []}, action) => {
    console.log("reducer works")
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existingItem = state.cartItems.find(x => (x.product === item.product))
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => (
                        x.product === existingItem.product ? {...x, qty: parseInt(x.qty) + parseInt(item.qty)} : x
                    ))
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {loading: false, product: action.payload}
        default:
            return state
    }
}