import { Dispatch } from "redux";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_RESET,
  PRODUCT_DETAILS_SUCCESS,
} from "./types";
import { apiFetch } from "../../api/api";

export const listProductDetails = (id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    dispatch({ type: PRODUCT_DETAILS_RESET });
    const response = await new apiFetch().get(`api/product/${id}`);
    let data;
    if (response) {
      data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: data.message });
      }
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: e.message });
  }
};
