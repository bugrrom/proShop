import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Rating } from "./Rating/Rating";
import { productObj } from "../../products";

const ProductCart = styled.div`
  height: 310px;
  width: 200px;
  border: 1px solid #2a2b2b;
  border-radius: 3px;
  margin: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Img = styled.img`
  width: 200px;
`;

const H3 = styled.h3`
  font-size: 13px;
  font-weight: 600;
`;

export type typeProps = {
  product: productObj;
};

export const Product: FC<typeProps> = ({ product }: typeProps) => {
  return (
    <ProductCart>
      <Link to={`/product/${product._id}`}>
        <Img src={product.image} alt={product.name} />
        <H3>{product.name}</H3>
      </Link>
      <div>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </div>
      <h3 style={{ margin: 0 }}>${product.price}</h3>
    </ProductCart>
  );
};
