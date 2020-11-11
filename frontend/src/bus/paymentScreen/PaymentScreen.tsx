import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { CheckoutSteps } from "../../element/CheckoutSteps/CheckoutSteps";
import styled from "@emotion/styled";
import { Field, Form, Formik } from "formik";
import { savePaymentMethod } from "../cartScreen/action";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 70vh
    justify-content: space-around;
    input {
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  input {
    margin: 10px 10px 10px 0;
  }
`;

const Label = styled.label`
  color: black;
`;

const Button = styled.button`
  width: 120px;
  background-color: black;
  color: white;
  border: none;
  padding: 15px 30px;
  margin: 20px 0 8px 0;
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
  history: any;
};

export const PaymentScreen: FC<typeProps> = ({ history }: typeProps) => {
  const cart = useSelector((state: AppState) => state.cart);
  const { shippingAddress, paymentMethod } = cart;
  const [payment, sevPayment] = useState(paymentMethod);
  if (!shippingAddress) {
    history.push("/shipping");
  }
  const dispatch = useDispatch();
  const onSubmit = (values: { payment: string }) => {
    dispatch(savePaymentMethod(values.payment));
    history.push("/placeorder");
  };
  return (
    <Container>
      <Wrapper>
        <CheckoutSteps step1 step2 step3 />
        <Formik
          onSubmit={(values) => {
            onSubmit(values);
          }}
          initialValues={{ payment: payment || "PayPall" }}
        >
          <Form style={{ width: "100%" }}>
            <H3>payment method</H3>
            <InputWrapper>
              <Label htmlFor="PayPall">
                <Field
                  id="PayPall"
                  name="payment"
                  type="radio"
                  value="PayPall"
                />
                PayPall
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="order">
                <Field id="order" name="payment" type="radio" value="Order" />
                Order
              </Label>
            </InputWrapper>
            <Button type="submit">continue</Button>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
