export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export type orderDetailsRequest = {
  type: typeof ORDER_DETAILS_REQUEST;
};
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";
export type orderDetailsFail = {
  type: typeof ORDER_DETAILS_FAIL;
  payload: string;
};
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export type orderDetailsSuccess = {
  type: typeof ORDER_DETAILS_SUCCESS;
  payload: any;
};
export const GET_ORDER_ALL = "GET_ORDER_ALL";
type getOrderAll = {
  type: typeof GET_ORDER_ALL;
  payload: any;
};
export const ORDER_RESET = "ORDER_RESET";
type orderReset = {
  type: typeof ORDER_RESET;
};

export type orderDetailsAction =
  | orderDetailsFail
  | orderDetailsRequest
  | orderDetailsSuccess
  | getOrderAll
  | orderReset;
