import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./types";
import { Dispatch } from "redux";
import { apiFetch } from "../../api/api";

export const listProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const response = await new apiFetch().get("api/product");
    let data;
    if (response) {
      data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: data.message,
        });
      }
    }
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message });
  }
};
