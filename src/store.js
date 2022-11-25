import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetailsR: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) //TODO createStore() is deprecated

export default store
