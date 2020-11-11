import {
  AdminActionType,
  EDIT_USER_ADMIN,
  FAIL_USERS_ADMIN,
  FETCH_USER_ADMIN,
  FETCH_USERS_ADMIN,
  REMOVE_USER_ADMIN,
  REQUEST_DETAILS_USERS_ADMIN,
  REQUEST_EDIT_USERS_ADMIN,
  REQUEST_REMOVE_USERS_ADMIN,
  REQUEST_USERS_ADMIN,
  RESET_LOADING_USERS_ADMIN,
  RESET_USER_ADMIN,
  RESET_USERS_ADMIN,
} from "./types";

type typeState = {
  allUsers: any[];
  user: any;
  error: string;
  loadingUsers: boolean;
  successUsers: boolean;
  successUpdate: boolean;
  loadingUser: boolean;
  loadingRemove: boolean;
  loadingDetails: boolean;
  loadingEdit: boolean;
};

const initialState = {
  allUsers: [],
  user: {},
  successUsers: false,
  error: "",
  successUpdate: false,
  loadingUsers: false,
  loadingUser: false,
  loadingRemove: false,
  loadingDetails: false,
  loadingEdit: false,
};

export const adminUserReducer = (
  state: typeState = initialState,
  action: AdminActionType
) => {
  switch (action.type) {
    case FETCH_USERS_ADMIN:
      return {
        ...state,
        allUsers: action.payload,
        loadingUsers: false,
      };
    case FETCH_USER_ADMIN:
      return {
        ...state,
        user: action.payload,
        loadingDetails: false,
      };
    case RESET_LOADING_USERS_ADMIN:
      return {
        ...state,
        loadingUsers: false,
      };
    case EDIT_USER_ADMIN:
      return {
        ...state,
        loadingEdit: false,
        successUpdate: true,
        allUsers: state.allUsers.map((el) => {
          if (el._id === action.payload.id) {
            return {
              ...el,
              name: action.payload.name,
              email: action.payload.email,
            };
          }
          return el;
        }),
      };
    case REMOVE_USER_ADMIN:
      return {
        ...state,
        loadingEdit: false,
        allUsers: state.allUsers.filter((el) => el._id !== action.payload),
      };
    case REQUEST_USERS_ADMIN:
      return {
        ...state,
        loadingUsers: true,
      };
    case REQUEST_REMOVE_USERS_ADMIN:
      return {
        ...state,
        loadingRemove: true,
      };
    case REQUEST_DETAILS_USERS_ADMIN:
      return {
        ...state,
        loadingDetails: true,
      };
    case REQUEST_EDIT_USERS_ADMIN:
      return {
        ...state,
        loadingEdit: true,
      };
    case FAIL_USERS_ADMIN:
      return {
        ...state,
        error: action.payload,
        loadingUsers: false,
        loadingUser: false,
        loadingRemove: false,
        loadingDetails: false,
        loadingEdit: false,
      };
    case RESET_USER_ADMIN:
      return {
        ...state,
        user: {},
        successUpdate: false,
      };
    case RESET_USERS_ADMIN:
      return initialState;
    default:
      return state;
  }
};
