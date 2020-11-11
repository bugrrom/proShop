import { Dispatch } from "redux";
import {
  FAIL_USERS_ADMIN,
  FETCH_USERS_ADMIN,
  REQUEST_EDIT_USERS_ADMIN,
  REQUEST_USERS_ADMIN,
  FETCH_USER_ADMIN,
  RESET_USER_ADMIN,
  REQUEST_DETAILS_USERS_ADMIN,
  EDIT_USER_ADMIN,
  REQUEST_REMOVE_USERS_ADMIN,
  REMOVE_USER_ADMIN,
  RESET_LOADING_USERS_ADMIN,
} from "./types";
import { apiFetch } from "../../../api/api";
import { deepEqual } from "../../../utils/deepEqual";

export const getAllUsers = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: REQUEST_USERS_ADMIN,
    });
    const {
      userLogin: { userInfo },
      adminUser: { allUsers },
    } = getState();
    const response = await new apiFetch(userInfo.token).get("api/user/users");
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_USERS_ADMIN,
          payload: data.message,
        });
      }
      for (let i = 0; i <= data.length; i++) {
        if (!deepEqual(allUsers[i], data[i])) {
          dispatch({
            type: FETCH_USERS_ADMIN,
            payload: data,
          });
          break;
        }
      }
      dispatch({
        type: RESET_LOADING_USERS_ADMIN,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_USERS_ADMIN,
      payload: e.message,
    });
  }
};

export const getUserByEdit = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: RESET_USER_ADMIN,
    });
    dispatch({
      type: REQUEST_DETAILS_USERS_ADMIN,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token).get(`api/user/${id}`);
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_USERS_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: FETCH_USER_ADMIN,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_USERS_ADMIN,
      payload: e.message,
    });
  }
};

export const updateUser = (
  values: { email: string; name: string; password: string },
  id: string
) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: REQUEST_EDIT_USERS_ADMIN,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const updateUser = {
      ...values,
      id,
    };
    const response = await new apiFetch(userInfo.token, updateUser).put(
      `api/user/updateUser/${id}`
    );
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_USERS_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: EDIT_USER_ADMIN,
        payload: updateUser,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_USERS_ADMIN,
      payload: e.message,
    });
  }
};

export const deleteUser = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: REQUEST_REMOVE_USERS_ADMIN,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const response = await new apiFetch(userInfo.token, { id }).delete(
      "api/user/remove"
    );
    if (response) {
      const data = await response.json();
      if (response.status !== 200 && 201) {
        dispatch({
          type: FAIL_USERS_ADMIN,
          payload: data.message,
        });
      }
      dispatch({
        type: REMOVE_USER_ADMIN,
        payload: id,
      });
    }
  } catch (e) {
    dispatch({
      type: FAIL_USERS_ADMIN,
      payload: e.message,
    });
  }
};

/*
export const deleteUser = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_REMOVE_USER_REQUEST,
    });
    dispatch({
      type: ADMIN_RESET_USER,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const configGet = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify({ id }),
    };
    const response = await fetch(
      `http://localhost:4000/api/user/remove`,
      configGet
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_REMOVE_USER_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_REMOVE_USER_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_REMOVE_USER_FAIL,
      payload: e.message,
    });
  }
};*/
