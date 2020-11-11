import { Dispatch } from "redux";
import { USER_LOGIN_SUCCESS } from "../login/types";
import { USER_REGISTER_FAIL } from "./types";

export const Register = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => async (dispatch: Dispatch) => {
  try {
    const newUser = {
      email,
      password,
      name,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
    const response = await fetch(
      "http://localhost:4000/api/user/create",
      config
    );
    const data = await response.json();
    if (response.status !== 200) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {}
};
