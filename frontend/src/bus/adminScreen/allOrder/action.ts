import { Dispatch } from "redux";
import {
  FAIL_ORDER_ADMIN,
  FETCH_ORDER_ADMIN,
  REQUEST_ALL_ORDER_ADMIN,
  RESET_LOADING_ORDER_ADMIN,
} from "./types";
import { apiFetch } from "../../../api/api";
import { deepEqual } from "../../../utils/deepEqual";

export const getAllOrderAdmin = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: REQUEST_ALL_ORDER_ADMIN,
    });
    const {
      adminOrder: { allOrder },
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token).get("api/order/all");
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_ORDER_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: FETCH_ORDER_ADMIN,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_ORDER_ADMIN,
      payload: e.message,
    });
  }
};
