import {
  AdminActionOrderType,
  FAIL_ORDER_ADMIN,
  FETCH_ORDER_ADMIN,
  ONE_ORDER_ADMIN,
  REMOVE_ORDER_ADMIN,
  REQUEST_ALL_ORDER_ADMIN,
  RESET_LOADING_ORDER_ADMIN,
} from "./types";

type typeState = {
  loadingOrders: boolean;
  error: string;
  allOrder: any[];
  oneOrder: any;
};

const initialState = {
  loadingOrders: false,
  error: "",
  allOrder: [],
  oneOrder: {},
};

export const adminOrderReducer = (
  state: typeState = initialState,
  action: AdminActionOrderType
) => {
  switch (action.type) {
    case REQUEST_ALL_ORDER_ADMIN:
      return {
        ...state,
        loadingOrders: true,
      };
    case FETCH_ORDER_ADMIN:
      return {
        ...state,
        allOrder: action.payload,
        loadingOrders: false,
      };
    case ONE_ORDER_ADMIN:
      return {
        ...state,
        oneOrder: action.payload,
        loading: false,
      };
    case REMOVE_ORDER_ADMIN:
      return {
        ...state,
        loading: false,
        allOrder: state.allOrder.map((el) => el._id !== action.payload),
      };
    case RESET_LOADING_ORDER_ADMIN:
      return {
        ...state,
        loadingOrders: false,
      };
    case FAIL_ORDER_ADMIN:
      return {
        ...state,
        loadingOrders: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
