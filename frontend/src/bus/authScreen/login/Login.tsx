import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./action";
import { AppState } from "../../../init/rootReducer";
import { Message } from "../../../element/Message/Message/Message";
import { InputElement } from "../../../element/InputElement/InputElement";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 500px;
    justify-content: space-around;
    input {
      padding-left: 10px;
      border: none;
      height: 50px;
      background-color: #e2e6e6;
    }
  }
`;

const H3 = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: #585858;
`;
const Button = styled.button`
  width: 120px;
  background-color: black;
  color: white;
  border: none;
  padding: 15px 30px;
  margin: 8px 0 8px 0;
  cursor: pointer;
  text-transform: uppercase;
  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  &:hover {
    color: #909292;
  }
`;

const P = styled.p`
  color: #909292;
  font-size: 15px;
  a {
    text-decoration: none;
    color: #252525;
  }
`;

export type FormValues = {
  email: string;
  password: string;
};

type typeProps = {
  location: any;
  history: any;
};

export const Login: FC<typeProps> = ({ location, history }: typeProps) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const onSubmit = (values: FormValues) => {
    dispatch(login(values.email, values.password));
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const initialState: FormValues = { email: "", password: "" };
  const inputEl = [
    { id: "email", type: "email", placeholder: "Email" },
    { id: "password", type: "password", placeholder: "Password" },
  ];
  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={initialState}
          onSubmit={(values, actions) => {
            onSubmit(values);
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required("Required"),
            password: Yup.string()
              .min(6, "Must be 6 characters or less")
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
        >
          <Form onChange={(e) => e.preventDefault()}>
            {error && <Message color="#ff6a6a" message={error} />}
            <H3>sign in</H3>
            {inputEl.map((el) => (
              <InputElement
                id={el.id}
                type={el.type}
                placeholder={el.placeholder}
              />
            ))}
            <Button disabled={loading} type="submit">
              sign in
            </Button>
            <P>
              New Customer? <Link to="/registration">Register</Link>
            </P>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
