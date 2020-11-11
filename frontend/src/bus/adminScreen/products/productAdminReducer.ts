import {
  ADD_PRODUCT_ADMIN,
  AdminActionProductType,
  EDIT_PRODUCT_ADMIN,
  FAIL_PRODUCT_ADMIN,
  FETCH_PRODUCT_ADMIN,
  ONE_PRODUCT_ADMIN,
  REMOVE_PRODUCT_ADMIN,
  REQUEST_ADD_PRODUCT_ADMIN,
  REQUEST_ALL_PRODUCT_ADMIN,
  REQUEST_EDIT_PRODUCT_ADMIN,
  REQUEST_ONE_PRODUCT_ADMIN,
  REQUEST_REMOVE_PRODUCT_ADMIN,
  RESET_LOADING_PRODUCT_ADMIN,
  RESET_ONE_PRODUCT_ADMIN,
} from "./types";

type typeState = {
  loadingAll: boolean;
  loadingOne: boolean;
  loadingDelete: boolean;
  loadingAdd: boolean;
  loadingEdit: boolean;
  error: string;
  success: boolean;
  successDetails: boolean;
  allProduct: any[];
  oneProduct: any;
};

const initialState = {
  allProduct: [],
  loadingAll: false,
  loadingOne: false,
  loadingDelete: false,
  loadingAdd: false,
  loadingEdit: false,
  error: "",
  success: false,
  successDetails: false,
  oneProduct: {},
};

export const adminProductReducer = (
  state: typeState = initialState,
  action: AdminActionProductType
) => {
  switch (action.type) {
    case FETCH_PRODUCT_ADMIN:
      return {
        ...state,
        loadingAll: false,
        allProduct: action.payload,
        success: true,
      };
    case ONE_PRODUCT_ADMIN:
      return {
        ...state,
        loadingOne: false,
        oneProduct: action.payload,
        success: true,
      };
    case RESET_LOADING_PRODUCT_ADMIN:
      return {
        ...state,
        loadingAll: false,
      };
    case RESET_ONE_PRODUCT_ADMIN:
      return {
        ...state,
        oneProduct: {},
        successDetails: false,
      };
    case ADD_PRODUCT_ADMIN:
      return {
        ...state,
        loadingAdd: false,
        success: true,
      };
    case REMOVE_PRODUCT_ADMIN:
      return {
        ...state,
        loadingDelete: false,
        allProduct: state.allProduct.filter((el) => el._id !== action.payload),
        success: true,
      };
    case EDIT_PRODUCT_ADMIN:
      return {
        ...state,
        allProduct: state.allProduct.map((el) => {
          if (el._id === action.payload.id) {
            return {
              ...el,
              name: action.payload.name,
            };
          }
          return el;
        }),
        successDetails: true,
      };
    case REQUEST_ALL_PRODUCT_ADMIN:
      return {
        ...state,
        loadingAll: true,
        success: false,
        error: "",
      };
    case REQUEST_ONE_PRODUCT_ADMIN:
      return {
        ...state,
        loadingOne: true,
        success: false,
        error: "",
      };
    case REQUEST_REMOVE_PRODUCT_ADMIN:
      return {
        ...state,
        loadingDelete: true,
        success: false,
        error: "",
      };
    case REQUEST_ADD_PRODUCT_ADMIN:
      return {
        ...state,
        loadingAdd: true,
        success: false,
        error: "",
      };
    case REQUEST_EDIT_PRODUCT_ADMIN:
      return {
        ...state,
        loadingEdit: true,
        successDetails: false,
        error: "",
      };
    case FAIL_PRODUCT_ADMIN:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
