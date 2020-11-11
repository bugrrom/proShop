import { Dispatch } from "redux";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "./types";

export const addNewOrder = (order: any) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify(order),
    };
    const response = await fetch(`http://localhost:4000/api/order`, config);
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (e) {}
};
