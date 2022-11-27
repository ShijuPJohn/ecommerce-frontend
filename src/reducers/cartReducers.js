import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SET_ITEM_QTY} from "../constants";

export const cartReducer = (state = {cartItems: []}, action) => {
    let item = {}
    let existingItem = {}
    if (action.type === CART_ADD_ITEM || action.type === CART_SET_ITEM_QTY) {
        item = action.payload
        existingItem = state.cartItems.find(x => (x.product === item.product))
    }

    switch (action.type) {
        case CART_ADD_ITEM:
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
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => (item.product !== action.payload.id))
            }
        case CART_SET_ITEM_QTY:

            return {
                ...state,
                cartItems: state.cartItems.map(x => (
                    x.product === existingItem.product ? {...x, qty: parseInt(item.qty)} : x
                ))
            }
        default:
            return state
    }
}