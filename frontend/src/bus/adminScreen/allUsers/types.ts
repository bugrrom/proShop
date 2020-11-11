import { user } from "../../profileScreen/profileUpdateReducer";

export const FETCH_USERS_ADMIN = "FETCH_USERS_ADMIN";
export type fetchUsersAdmin = {
  type: typeof FETCH_USERS_ADMIN;
  payload: user[];
};
export const RESET_LOADING_USERS_ADMIN = "RESET_LOADING_USERS_ADMIN";
export type resetLoadingUsersAdmin = {
  type: typeof RESET_LOADING_USERS_ADMIN;
};
export const RESET_USER_ADMIN = "RESET_USER_ADMIN";
export type resetUserAdmin = {
  type: typeof RESET_USER_ADMIN;
};
export const FETCH_USER_ADMIN = "FETCH_USER_ADMIN";
export type fetchUserAdmin = {
  type: typeof FETCH_USER_ADMIN;
  payload: any;
};
export const EDIT_USER_ADMIN = "EDIT_USER_ADMIN";
export type editUserAdmin = {
  type: typeof EDIT_USER_ADMIN;
  payload: any;
};
export const REMOVE_USER_ADMIN = "REMOVE_USER_ADMIN";
export type removeUserAdmin = {
  type: typeof REMOVE_USER_ADMIN;
  payload: string;
};
export const REQUEST_USERS_ADMIN = "REQUEST_USERS_ADMIN";
export type requestUsersAdmin = {
  type: typeof REQUEST_USERS_ADMIN;
};
export const REQUEST_REMOVE_USERS_ADMIN = "REQUEST_REMOVE_USERS_ADMIN";
export type requestRemoveUsersAdmin = {
  type: typeof REQUEST_REMOVE_USERS_ADMIN;
};
export const REQUEST_DETAILS_USERS_ADMIN = "REQUEST_DETAILS_USERS_ADMIN";
export type requestDetailsUsersAdmin = {
  type: typeof REQUEST_DETAILS_USERS_ADMIN;
};
export const REQUEST_EDIT_USERS_ADMIN = "REQUEST_EDIT_USERS_ADMIN";
export type requestEditUsersAdmin = {
  type: typeof REQUEST_EDIT_USERS_ADMIN;
};
export const FAIL_USERS_ADMIN = "FAIL_USERS_ADMIN";
export type failUsersAdmin = {
  type: typeof FAIL_USERS_ADMIN;
  payload: string;
};
export const RESET_USERS_ADMIN = "RESET_USERS_ADMIN";
export type resetUsersAdmin = {
  type: typeof RESET_USERS_ADMIN;
};

export type AdminActionType =
  | fetchUsersAdmin
  | fetchUserAdmin
  | editUserAdmin
  | resetUserAdmin
  | resetLoadingUsersAdmin
  | removeUserAdmin
  | requestUsersAdmin
  | requestRemoveUsersAdmin
  | requestDetailsUsersAdmin
  | requestEditUsersAdmin
  | resetUsersAdmin
  | failUsersAdmin;
