import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "../components/Login/redux/AuthReducer";

const combinereducers = combineReducers({ AuthReducer });
export const store = legacy_createStore(combinereducers);
