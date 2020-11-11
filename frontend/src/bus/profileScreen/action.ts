import { Dispatch } from "redux";
import {
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "./types";
import { USER_LOGIN_SUCCESS } from "../authScreen/login/types";
import { apiFetch } from "../../api/api";

export const getUserInfo = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token).get("api/user/profile");
    let data;
    if (response) {
      data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: data.message,
        });
      }
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {}
};

type upType = {
  email?: string;
  password?: string;
  name?: string;
};

export const updateUser = (up: upType) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const response = await new apiFetch(userInfo.token, up).put(
      "api/user/updateUser"
    );
    let data;
    if (response) {
      data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: data.message,
        });
      }
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (e) {}
};
