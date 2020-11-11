import {
  ORDER_CREATE_FAIL,
  orderActionType,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "./types";
import { typeCartItem, typeAddress } from "../cartScreen/cartReducer";

type initialState = {
  error: string;
  loading: boolean;
  order: {
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
  };
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
  },
};

export const orderReducer = (
  state: initialState = initialState,
  action: orderActionType
) => {
  switch (action.type) {
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    default:
      return state;
  }
};
