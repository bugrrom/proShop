import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

let cartItemsFromStorage: any[] | null | string = localStorage.getItem(
  "cartItems"
);
if (cartItemsFromStorage) {
  cartItemsFromStorage = JSON.parse(cartItemsFromStorage);
} else {
  cartItemsFromStorage = [];
}

let userInfoFromStorage: null | string = localStorage.getItem("userInfo");
if (userInfoFromStorage) {
  userInfoFromStorage = JSON.parse(userInfoFromStorage);
} else {
  userInfoFromStorage = null;
}

let shippingAddressFromStorage: null | string = localStorage.getItem(
  "shippingAddress"
);
if (shippingAddressFromStorage) {
  shippingAddressFromStorage = JSON.parse(shippingAddressFromStorage);
} else {
  shippingAddressFromStorage = null;
}

let paymentMethods: null | string = localStorage.getItem("paymentMethod");
if (paymentMethods) {
  paymentMethods = JSON.parse(paymentMethods);
} else {
  paymentMethods = null;
}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage || {},
    paymentMethod: paymentMethods,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = createStore(
  rootReducer,
  // @ts-ignore
  initialState,
  applyMiddleware(thunk)
);
