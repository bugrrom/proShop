import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  typeActionUserLogin,
} from "./types";

const initialState = {
  loading: false,
  error: "",
  userInfo: {
    name: "",
    email: "",
    _id: "",
    isAdmin: false,
  },
};

export type userInfo = {
  name: string;
  email: string;
  _id: string;
  isAdmin: boolean;
};

type typeState = {
  loading: boolean;
  error: string;
  userInfo: userInfo;
};

export const userLoginReducer = (
  state: typeState = initialState,
  action: typeActionUserLogin
) => {
  switch (action.type) {
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGOUT:
      return {};
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
