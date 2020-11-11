import React, { FC } from "react";
import styled from "@emotion/styled";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Message } from "../../../element/Message/Message/Message";
import { InputElement } from "../../../element/InputElement/InputElement";

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

type typeProps = {
  error: string;
  loading: boolean;
  onSubmit: (values: any) => void;
  name: string;
  email: string;
};

export const FormUpdate: FC<typeProps> = React.memo(
  ({ error, loading, onSubmit, email, name }: typeProps) => {
    const inputEl = [
      { id: "email", placeholder: "Email", type: "email" },
      { id: "name", placeholder: "Name", type: "text" },
      { id: "password", placeholder: "New Password", type: "password" },
    ];
    return (
      <Formik
        initialValues={{ email: email, password: "", name: name }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Required"),
          name: Yup.string().required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or less")
            .max(20, "Must be 20 characters or less"),
        })}
      >
        <Form onChange={(e) => e.preventDefault()}>
          <H3>update information</H3>
          {error && <Message color="#ff6a6a" message={error} />}
          {inputEl.map((el) => (
            <InputElement
              key={el.id + el.type}
              id={el.id}
              type={el.type}
              placeholder={el.placeholder}
            />
          ))}
          <Button disabled={loading} type="submit">
            Update
          </Button>
        </Form>
      </Formik>
    );
  }
);
