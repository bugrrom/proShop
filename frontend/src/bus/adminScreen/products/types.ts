export const FETCH_PRODUCT_ADMIN = "FETCH_PRODUCT_ADMIN";
export type fetchProductAdmin = {
  type: typeof FETCH_PRODUCT_ADMIN;
  payload: any[];
};

export const ONE_PRODUCT_ADMIN = "ONE_PRODUCT_ADMIN";
export type oneProductAdmin = {
  type: typeof ONE_PRODUCT_ADMIN;
  payload: any;
};

export const RESET_LOADING_PRODUCT_ADMIN = "RESET_LOADING_PRODUCT_ADMIN";
export type resetLoadingProductAdmin = {
  type: typeof RESET_LOADING_PRODUCT_ADMIN;
};
export const RESET_ONE_PRODUCT_ADMIN = "RESET_ONE_PRODUCT_ADMIN";
export type resetOneProductAdmin = {
  type: typeof RESET_ONE_PRODUCT_ADMIN;
  payload: any;
};

export const ADD_PRODUCT_ADMIN = "ADD_PRODUCT_ADMIN";
export type addProductAdmin = {
  type: typeof ADD_PRODUCT_ADMIN;
};

export const REMOVE_PRODUCT_ADMIN = "REMOVE_PRODUCT_ADMIN";
export type removeProductAdmin = {
  type: typeof REMOVE_PRODUCT_ADMIN;
  payload: string;
};

export const EDIT_PRODUCT_ADMIN = "EDIT_PRODUCT_ADMIN";
export type editProductAdmin = {
  type: typeof EDIT_PRODUCT_ADMIN;
  payload: any;
};

export const REQUEST_ALL_PRODUCT_ADMIN = "REQUEST_ALL_PRODUCT_ADMIN";
export type requestAllProductAdmin = {
  type: typeof REQUEST_ALL_PRODUCT_ADMIN;
};

export const REQUEST_ONE_PRODUCT_ADMIN = "REQUEST_ONE_PRODUCT_ADMIN";
export type requestOneProductAdmin = {
  type: typeof REQUEST_ONE_PRODUCT_ADMIN;
};

export const REQUEST_REMOVE_PRODUCT_ADMIN = "REQUEST_REMOVE_PRODUCT_ADMIN";
export type requestRemoveProductAdmin = {
  type: typeof REQUEST_REMOVE_PRODUCT_ADMIN;
};

export const REQUEST_EDIT_PRODUCT_ADMIN = "REQUEST_EDIT_PRODUCT_ADMIN";
export type requestEditProductAdmin = {
  type: typeof REQUEST_EDIT_PRODUCT_ADMIN;
};

export const REQUEST_ADD_PRODUCT_ADMIN = "REQUEST_ADD_PRODUCT_ADMIN";
export type requestAddProductAdmin = {
  type: typeof REQUEST_ADD_PRODUCT_ADMIN;
};

export const FAIL_PRODUCT_ADMIN = "FAIL_PRODUCT_ADMIN";
export type failProductAdmin = {
  type: typeof FAIL_PRODUCT_ADMIN;
  payload: string;
};

export type AdminActionProductType =
  | fetchProductAdmin
  | addProductAdmin
  | removeProductAdmin
  | resetLoadingProductAdmin
  | editProductAdmin
  | requestAllProductAdmin
  | requestOneProductAdmin
  | requestRemoveProductAdmin
  | requestAddProductAdmin
  | requestEditProductAdmin
  | failProductAdmin
  | oneProductAdmin
  | resetOneProductAdmin;
