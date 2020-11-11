import {
  typeActionUserUpdate,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_RESET,
} from "./types";

const initialState = {
  loading: false,
  error: "",
  user: {
    name: "",
    email: "",
    _id: "",
    isAdmin: false,
  },
};

export type user = {
  name: string;
  email: string;
  _id: string;
  isAdmin: boolean;
};

type typeState = {
  loading: boolean;
  error: string;
  user: user;
};

export const userUpdateReducer = (
  state: typeState = initialState,
  action: typeActionUserUpdate
) => {
  switch (action.type) {
    case USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_RESET:
      return initialState;
    default:
      return { ...state };
  }
};
