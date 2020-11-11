import { Dispatch } from "redux";
import {
  ADD_PRODUCT_ADMIN,
  EDIT_PRODUCT_ADMIN,
  FAIL_PRODUCT_ADMIN,
  FETCH_PRODUCT_ADMIN,
  ONE_PRODUCT_ADMIN,
  REMOVE_PRODUCT_ADMIN,
  REQUEST_ALL_PRODUCT_ADMIN,
  RESET_ONE_PRODUCT_ADMIN,
  REQUEST_ONE_PRODUCT_ADMIN,
  REQUEST_ADD_PRODUCT_ADMIN,
  REQUEST_EDIT_PRODUCT_ADMIN,
  RESET_LOADING_PRODUCT_ADMIN,
} from "./types";
import { apiFetch } from "../../../api/api";
import { deepEqual } from "../../../utils/deepEqual";

export const getAllProduct = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: REQUEST_ALL_PRODUCT_ADMIN,
    });
    const {
      adminProduct: { allProduct },
    } = getState();
    const response = await new apiFetch().get("api/product");
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_PRODUCT_ADMIN,
          payload: data.message,
        });
      }
      for (let i = 0; i <= data.length; i++) {
        if (!deepEqual(allProduct[i], data[i])) {
          dispatch({
            type: FETCH_PRODUCT_ADMIN,
            payload: data,
          });
          break;
        }
      }
      dispatch({
        type: RESET_LOADING_PRODUCT_ADMIN,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_PRODUCT_ADMIN,
      payload: e.message,
    });
  }
};

export const getOneProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: RESET_ONE_PRODUCT_ADMIN,
    });
    dispatch({
      type: REQUEST_ONE_PRODUCT_ADMIN,
    });
    const response = await new apiFetch().get(`api/product/${id}`);
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_PRODUCT_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: ONE_PRODUCT_ADMIN,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_PRODUCT_ADMIN,
      payload: e.message,
    });
  }
};

export const deleteProduct = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token, { id }).delete(
      "api/product/remove"
    );
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_PRODUCT_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: REMOVE_PRODUCT_ADMIN,
        payload: id,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_PRODUCT_ADMIN,
      payload: e.message,
    });
  }
};

export const addProduct = (product: any) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: REQUEST_ADD_PRODUCT_ADMIN,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token, product).post(
      "api/product/create"
    );
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_PRODUCT_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: ADD_PRODUCT_ADMIN,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_PRODUCT_ADMIN,
      payload: e.message,
    });
  }
};

export const updateProduct = (update: any, id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: REQUEST_EDIT_PRODUCT_ADMIN,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const updateProduct = {
      ...update,
      id,
    };
    const response = await new apiFetch(userInfo.token, updateProduct).put(
      "api/product/update"
    );
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_PRODUCT_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: EDIT_PRODUCT_ADMIN,
        payload: updateProduct,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_PRODUCT_ADMIN,
      payload: e.message,
    });
  }
};
