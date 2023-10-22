import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "../components/Login/redux/AuthReducer";
import ProductReducer from "../components/ProductPage/ProductReducer/productReducer";
const combinereducers = combineReducers({ AuthReducer,ProductReducer });
export const store = legacy_createStore(combinereducers);