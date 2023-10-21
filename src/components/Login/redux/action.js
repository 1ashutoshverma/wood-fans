export const userLogin = (payload) => {
  return {
    action: "login",
    payload: payload,
  };
};
export const userLogout = () => {
  return {
    action: "logout",
  };
};
