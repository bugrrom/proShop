import { userInfo } from "./registerReducer";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
type userRegisterRequest = {
  type: typeof USER_REGISTER_REQUEST;
};
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
type userRegisterSuccess = {
  type: typeof USER_REGISTER_SUCCESS;
  payload: userInfo;
};
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
type userRegisterFail = {
  type: typeof USER_REGISTER_FAIL;
  payload: string;
};

export type typeActionUserRegister =
  | userRegisterFail
  | userRegisterRequest
  | userRegisterSuccess;
