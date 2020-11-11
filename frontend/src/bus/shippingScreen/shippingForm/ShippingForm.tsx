import React, { FC } from "react";
import styled from "@emotion/styled";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { CheckoutSteps } from "../../../element/CheckoutSteps/CheckoutSteps";
import { InputElement } from "../../../element/InputElement/InputElement";

const Wrapper = styled.div`
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 70vh
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
  text-align: center;
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

const styleForm = {
  width: "100%",
};

type typeProps = {
  onSubmit: (values: any) => void;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export const ShippingForm: FC<typeProps> = React.memo(
  ({ onSubmit, address, city, country, postalCode }: typeProps) => {
    const initialState = {
      address: address || "",
      city: city || "",
      postalCode: country || "",
      country: postalCode || "",
    };
    const inputEl = [
      { id: "address", placeholder: "Address", type: "text" },
      { id: "city", placeholder: "City", type: "text" },
      { id: "postalCode", placeholder: "Postal Code", type: "text" },
      { id: "country", placeholder: "Country", type: "text" },
    ];
    return (
      <Wrapper>
        <CheckoutSteps step1 step2 />
        <Formik
          initialValues={initialState}
          onSubmit={(values) => {
            onSubmit(values);
          }}
          validationSchema={Yup.object({
            address: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            postalCode: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
          })}
        >
          <Form style={styleForm} onChange={(e) => e.preventDefault()}>
            <H3>shipping</H3>
            {inputEl.map((el) => (
              <InputElement
                key={el.id + el.type}
                id={el.id}
                type={el.type}
                placeholder={el.placeholder}
              />
            ))}
            <Button type="submit">continue</Button>
          </Form>
        </Formik>
      </Wrapper>
    );
  }
);
