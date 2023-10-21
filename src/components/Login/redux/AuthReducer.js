import React from "react";

const intialState = {
  isAuth: false,
  name: "",
  email: "",
};
const AuthReducer = (state = intialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "login":
      return {
        ...state,
        isAuth: true,
        name: payload.name,
        email: payload.email,
      };
    case "logout":
      return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
      };

    default:
      return state;
  }
};

export default AuthReducer;
