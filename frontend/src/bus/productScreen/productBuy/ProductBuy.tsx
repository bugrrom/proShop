import styled from "@emotion/styled";
import React, { FC } from "react";
import { Selectors } from "../../../element/Selector/Selector";
import { ButtonAddToCart } from "../../../element/Button/ButtonAddToCart";

const ProductWrapper = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
`;

const P = styled.p`
  text-transform: uppercase;
`;

const Container = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type typeProps = {
  price: number;
  countInStock: number;
  onChange: (e: any) => void;
  addToCartHandler: () => void;
};

export const ProductBuy: FC<typeProps> = ({
  price,
  countInStock,
  onChange,
  addToCartHandler,
}: typeProps) => {
  const params = new Array(countInStock)
    .fill("")
    .map((el, index) => el + (index + 1));
  return (
    <div>
      <ProductWrapper>
        <Container>
          <P>Price: ${price}</P>
        </Container>
        <Container>
          <P>Status: {countInStock > 0 ? " In Stock" : "Out Of Stock"}</P>
        </Container>
        {countInStock > 0 ? (
          <Container>
            <P style={{ marginRight: 10 }}>Qty:</P>
            <Selectors onChange={onChange} params={params} />
          </Container>
        ) : null}
        <ButtonAddToCart
          disabled={countInStock <= 0}
          onClick={addToCartHandler}
          text="Add to cart"
        />
      </ProductWrapper>
    </div>
  );
};
