import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "../components/Login/redux/AuthReducer";
import CartReducer from "../components/CartPage/redux/CartReducers";
const combinereducers = combineReducers({ AuthReducer, CartReducer });
export const store = legacy_createStore(combinereducers);
