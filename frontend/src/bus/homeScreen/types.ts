import { typeProduct } from "./productsReducer";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export type productListRequest = {
  type: typeof PRODUCT_LIST_REQUEST;
};

export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export type productListSuccess = {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: typeProduct[];
};

export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";
export type productListFail = {
  type: typeof PRODUCT_LIST_FAIL;
  payload: string;
};

export type typeActionProducts =
  | productListRequest
  | productListSuccess
  | productListFail;
