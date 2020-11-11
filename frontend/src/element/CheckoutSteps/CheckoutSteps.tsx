import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: black;
  }
`;

const P = styled.p`
  font-weight: bold;
`;

type typeProps = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
};

export const CheckoutSteps: FC<typeProps> = ({
  step1,
  step2,
  step3,
  step4,
}: typeProps) => {
  return (
    <Container>
      {step1 ? (
        <Link to="/login">
          <P>Sign In</P>
        </Link>
      ) : (
        <P style={{ opacity: "0.5" }}>Sign In</P>
      )}
      {step2 ? (
        <Link to="/shipping">
          <P>Shipping</P>
        </Link>
      ) : (
        <P style={{ opacity: "0.5" }}>Shipping</P>
      )}
      {step3 ? (
        <Link to="/payment">
          <P>Payment</P>
        </Link>
      ) : (
        <P style={{ opacity: "0.5" }}>Payment</P>
      )}
      {step4 ? (
        <Link to="/placeorder">
          <P>Place Order</P>
        </Link>
      ) : (
        <P style={{ opacity: "0.5" }}>Place Order</P>
      )}
    </Container>
  );
};
