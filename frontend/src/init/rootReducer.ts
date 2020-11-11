import { combineReducers } from "redux";
import { productsReducer } from "../bus/homeScreen/productsReducer";
import { productReducer } from "../bus/productScreen/productReducer";
import { cartReducer } from "../bus/cartScreen/cartReducer";
import { userLoginReducer } from "../bus/authScreen/login/loginReducer";
import { userRegisterReducer } from "../bus/authScreen/registration/registerReducer";
import { userUpdateReducer } from "../bus/profileScreen/profileUpdateReducer";
import { orderReducer } from "../bus/placeOrderScreen/orderReducer";
import { orderDetailsReducer } from "../bus/orderScreen/orderDetailsReducer";
import { adminProductReducer } from "../bus/adminScreen/products/productAdminReducer";
import { adminUserReducer } from "../bus/adminScreen/allUsers/usersAdminReducer";
import { adminOrderReducer } from "../bus/adminScreen/allOrder/orderAdminReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  adminUser: adminUserReducer,
  adminProduct: adminProductReducer,
  adminOrder: adminOrderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
