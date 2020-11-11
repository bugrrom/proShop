import { userInfo } from "./loginReducer";

export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export type userLoginFail = {
  type: typeof USER_LOGIN_FAIL;
  payload: string;
};
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export type userLoginRequest = {
  type: typeof USER_LOGIN_REQUEST;
};
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export type userLoginSuccess = {
  type: typeof USER_LOGIN_SUCCESS;
  payload: userInfo;
};
export const USER_LOGOUT = "USER_LOGOUT";
export type userLogout = {
  type: typeof USER_LOGOUT;
};
export type typeActionUserLogin =
  | userLoginFail
  | userLoginRequest
  | userLoginSuccess
  | userLogout;
