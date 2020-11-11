import {
  ORDER_DETAILS_FAIL,
  orderDetailsAction,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  GET_ORDER_ALL,
  ORDER_RESET,
} from "./types";
import { typeAddress, typeCartItem } from "../cartScreen/cartReducer";

export type order = {
  _id: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  orderItems: typeCartItem[];
  user: string;
  shippingAddress: typeAddress;
  paymentMethod: string;
  createdAt: any;
};

type initialState = {
  error: string;
  loading: boolean;
  order: order;
  allOrder: order[];
};

const initialState = {
  error: "",
  loading: false,
  order: {
    _id: "",
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    isPaid: false,
    isDelivered: false,
    orderItems: [],
    user: "",
    shippingAddress: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    paymentMethod: "",
    createdAt: "",
  },
  allOrder: [],
};

export const orderDetailsReducer = (
  state: initialState = initialState,
  action: orderDetailsAction
) => {
  switch (action.type) {
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case GET_ORDER_ALL:
      return {
        ...state,
        loading: false,
        allOrder: action.payload,
      };
    case ORDER_RESET:
      return initialState;
    default:
      return state;
  }
};
