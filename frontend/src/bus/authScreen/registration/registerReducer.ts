import {
  typeActionUserRegister,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: "",
  user: {
    name: "",
    email: "",
  },
};

export type userInfo = {
  name: string;
  email: string;
};

type typeState = {
  loading: boolean;
  error: string;
  user: userInfo;
};

export const userRegisterReducer = (
  state: typeState = initialState,
  action: typeActionUserRegister
) => {
  switch (action.type) {
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
