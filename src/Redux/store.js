import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "../components/Login/redux/AuthReducer";

import ProductReducer from "../components/ProductPage/ProductReducer/productReducer";


import CartReducer from "../components/CartPage/redux/CartReducers";
const combinereducers = combineReducers({ AuthReducer, CartReducer,ProductReducer });
export const store = legacy_createStore(combinereducers);

