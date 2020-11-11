import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "./action";
import { AppState } from "../../../init/rootReducer";
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
    height: 700px;
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
  width: 160px;
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
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type typeProps = {
  location: any;
  history: any;
};

export const Registration: FC<typeProps> = ({
  location,
  history,
}: typeProps) => {
  const dispatch = useDispatch();
  const onSubmit = (values: FormValues) => {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
    };
    dispatch(Register(newUser));
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const newUser = useSelector((state: AppState) => state.userLogin);
  const { loading, error, userInfo } = newUser;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, newUser, redirect]);
  const initialState: FormValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const inputEl = [
    { id: "name", type: "text", placeholder: "Name" },
    { id: "email", type: "email", placeholder: "Email" },
    { id: "password", type: "password", placeholder: "Password" },
    { id: "repeatPassword", type: "password", placeholder: "Repeat Password" },
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
            name: Yup.string().required("Required"),
            email: Yup.string().email().required("Required"),
            password: Yup.string()
              .min(6, "Must be 8 characters or less")
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            repeatPassword: Yup.string()
              .required("Please repeat your password")
              .test(
                "passwords-match",
                "Passwords must match ya fool",
                function (value) {
                  return this.parent.password === value;
                }
              ),
          })}
        >
          <Form onChange={(e) => e.preventDefault()}>
            {error && <p>{error}</p>}
            <H3>sign in</H3>
            {inputEl.map((el) => (
              <InputElement
                id={el.id}
                type={el.type}
                placeholder={el.placeholder}
              />
            ))}
            <Button disabled={loading} type="submit">
              Registration
            </Button>
            <P>
              Have an account? <Link to="/login">Sign in</Link>
            </P>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
