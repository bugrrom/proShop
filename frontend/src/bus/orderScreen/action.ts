import { Dispatch } from "redux";
import {
  GET_ORDER_ALL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_RESET,
} from "./types";

export const getOrderById = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
    };
    const response = await fetch(
      `http://localhost:4000/api/order/${id}`,
      config
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: e.message,
    });
  }
};

export const getOrderAll = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
    };
    const response = await fetch(`http://localhost:4000/api/order`, config);
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: GET_ORDER_ALL,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: e.message,
    });
  }
};
