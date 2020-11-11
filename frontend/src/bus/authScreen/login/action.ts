import { Dispatch } from "redux";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./types";
import { USER_RESET } from "../../profileScreen/types";
import { ORDER_RESET } from "../../orderScreen/types";

export const login = (email: string, password: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const user = {
      email,
      password,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "http://localhost:4000/api/user/login",
      config
    );
    const data = await response.json();
    if (response.status !== 200) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: e.message,
    });
  }
};

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_RESET });
  dispatch({ type: ORDER_RESET });
};
