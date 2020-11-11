import React, { FC } from "react";
import styled from "@emotion/styled";
import { Selectors } from "../../../element/Selector/Selector";
import { Link } from "react-router-dom";

const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 15px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  margin: 0 10px;
  @media (max-width: 600px) {
    margin: 5px 0;
    display: flex;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 120px;
  border-radius: 4px;
  margin-right: 15px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 0;
  }
`;

const P = styled.p`
  width: 130px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    width: 80%;
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const I = styled.i`
    cursor: pointer;
    &:hover{
        color: red;
    }
`;

type typeProduct = {
  product: {
    countInStock: number;
    image: string;
    name: string;
    price: number;
    product: string;
    qty: number;
  };
  updateCart: (id: string, qrt: number) => void;
  removeProductCart: (id: string) => void;
};

export const CartProductItem: FC<typeProduct> = (props: typeProduct) => {
  const Click = () => {
    props.removeProductCart(props.product.product);
  };
  const Change = (e: string) => {
    props.updateCart(props.product.product, Number(e));
  };
  const stock = new Array(props.product.countInStock)
    .fill("")
    .map((el, index) => el + (index + 1));
  return (
    <CartItem>
      <Img src={props.product.image} alt="name" />
      <Wrapper>
        <P>
          <Link to={`/product/${props.product.product}`}>
            {props.product.name}
          </Link>
        </P>
      </Wrapper>
      <Wrapper>
        <P>${props.product.price}</P>
      </Wrapper>
      <Wrapper>
        <Selectors value={props.product.qty} onChange={Change} params={stock} />
      </Wrapper>
      <Wrapper>
        <I onClick={Click} className="fas fa-trash"></I>
      </Wrapper>
    </CartItem>
  );
};
