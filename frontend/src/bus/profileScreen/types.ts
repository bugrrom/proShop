import { user } from "./profileUpdateReducer";

export const USER_UPDATE_FAIL = "USER_UPDATE_FAIL";
type userUpdateFail = {
  type: typeof USER_UPDATE_FAIL;
  payload: string;
};
export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
type userUpdateRequest = {
  type: typeof USER_UPDATE_REQUEST;
};
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
type userUpdateSuccess = {
  type: typeof USER_UPDATE_SUCCESS;
  payload: user;
};
export const USER_RESET = "USER_RESET";
type userReset = {
  type: typeof USER_RESET;
};

export type typeActionUserUpdate =
  | userUpdateFail
  | userUpdateRequest
  | userUpdateSuccess
  | userReset;
