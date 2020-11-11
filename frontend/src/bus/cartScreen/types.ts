import { typeAddress, typeCartItem } from "./cartReducer";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export type cartAddItem = {
  type: typeof CART_ADD_ITEM;
  payload: typeCartItem;
};
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export type cartRemoveItem = {
  type: typeof CART_REMOVE_ITEM;
  payload: string;
};

export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export type cartSaveAddress = {
  type: typeof CART_SAVE_SHIPPING_ADDRESS;
  payload: typeAddress;
};

export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export type cartSavePayment = {
  type: typeof CART_SAVE_PAYMENT_METHOD;
  payload: string;
};

export type CartAction =
  | cartAddItem
  | cartRemoveItem
  | cartSaveAddress
  | cartSavePayment;
