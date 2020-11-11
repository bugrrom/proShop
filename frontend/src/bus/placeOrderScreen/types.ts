export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export type orderCreateRequest = {
  type: typeof ORDER_CREATE_REQUEST;
};
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export type orderCreateSuccess = {
  type: typeof ORDER_CREATE_SUCCESS;
  payload: any;
};
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";
export type orderCreateFail = {
  type: typeof ORDER_CREATE_FAIL;
  payload: string;
};

export type orderActionType =
  | orderCreateSuccess
  | orderCreateFail
  | orderCreateRequest;
