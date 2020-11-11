import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  CartAction,
} from "./types";

const initialState = {
  cartItems: [],
  shippingAddress: {
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
  paymentMethod: "",
};

export type typeCartItem = {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
};

export type typeAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type typeState = {
  cartItems: typeCartItem[];
  shippingAddress: typeAddress;
  paymentMethod: string;
};

export const cartReducer = (
  state: typeState = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el) => el.product !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
