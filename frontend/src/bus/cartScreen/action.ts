import { Dispatch } from "redux";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "./types";
import { typeAddress } from "./cartReducer";

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch,
  getState: any
) => {
  const response = await fetch(`http://localhost:4000/api/product/${id}`);
  const data = await response.json();
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  console.log(getState().cart.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItem = (payload: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data: typeAddress) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data: string) => (dispatch: Dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
