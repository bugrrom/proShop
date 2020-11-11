export const FETCH_ORDER_ADMIN = "FETCH_ORDER_ADMIN";
export type fetchOrderAdmin = {
  type: typeof FETCH_ORDER_ADMIN;
  payload: any[];
};

export const ONE_ORDER_ADMIN = "ONE_ORDER_ADMIN";
export type oneOrderAdmin = {
  type: typeof ONE_ORDER_ADMIN;
  payload: any;
};

export const REMOVE_ORDER_ADMIN = "REMOVE_ORDER_ADMIN";
export type removeOrderAdmin = {
  type: typeof REMOVE_ORDER_ADMIN;
  payload: string;
};

export const REQUEST_ALL_ORDER_ADMIN = "REQUEST_ALL_ORDER_ADMIN";
export type requestAllOrderAdmin = {
  type: typeof REQUEST_ALL_ORDER_ADMIN;
};

export const REQUEST_ONE_ORDER_ADMIN = "REQUEST_ONE_ORDER_ADMIN";
export type requestOneOrderAdmin = {
  type: typeof REQUEST_ONE_ORDER_ADMIN;
};

export const FAIL_ORDER_ADMIN = "FAIL_ORDER_ADMIN";
export type failOrderAdmin = {
  type: typeof FAIL_ORDER_ADMIN;
  payload: string;
};

export const RESET_LOADING_ORDER_ADMIN = "RESET_LOADING_ORDER_ADMIN";
export type resetLoadingOrderAdmin = {
  type: typeof RESET_LOADING_ORDER_ADMIN;
};

export type AdminActionOrderType =
  | fetchOrderAdmin
  | oneOrderAdmin
  | removeOrderAdmin
  | requestAllOrderAdmin
  | requestOneOrderAdmin
  | failOrderAdmin
  | resetLoadingOrderAdmin;
