export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export type productListRequest = {
  type: typeof PRODUCT_DETAILS_REQUEST;
};

export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export type productListSuccess = {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  payload: any;
};

export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";
export type productListFail = {
  type: typeof PRODUCT_DETAILS_FAIL;
  payload: string;
};

export const PRODUCT_DETAILS_RESET = "PRODUCT_DETAILS_RESET";
export type productDetailsReset = {
  type: typeof PRODUCT_DETAILS_RESET;
};

export type typeActionProduct =
  | productListRequest
  | productListSuccess
  | productListFail
  | productDetailsReset;
