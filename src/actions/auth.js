import { fetchConToken, fetchSinToken } from "../helpers/fetchApi";
import { types } from "../types/types";
import { startPlayGame } from "./game";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const user = await fetchSinToken("POST", { email, password }, "user");

    if (!user) return;
    localStorage.setItem("x-token", user.token);

    dispatch(login(user.data));
    dispatch(startPlayGame());
  };
};

export const setUser = () => {
  return async (dispatch) => {
    const user = await fetchConToken("POST", "user/renew");
    if (!user) return;

    localStorage.setItem("x-token", user.token);
    dispatch(login(user.data));
    dispatch(startPlayGame());
  };
};

const login = (user) => ({
  type: types.startLogin,
  payload: user,
});
