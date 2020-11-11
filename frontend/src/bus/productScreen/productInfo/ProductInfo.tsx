import styled from "@emotion/styled";
import React, { FC } from "react";
import { Rating } from "../../productCart/Rating/Rating";

const Container = styled.div`
  width: 270px;
  margin: 25px 30px 0 30px;
  h3 {
    font-size: 25px;
    text-transform: uppercase;
    color: #909292;
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: black;
  margin: 15px 0;
`;

type typeProps = {
  name: string;
  numReviews: number;
  rating: number;
  price: number;
  description: string;
};

export const ProductInfos: FC<typeProps> = ({
  name,
  numReviews,
  rating,
  price,
  description,
}: typeProps) => {
  return (
    <Container>
      <h3>{name}</h3>
      <Line />
      <Rating text={`${numReviews} reviews`} value={rating} />
      <Line />
      <div style={{ color: "#515454" }}>Price: ${price}</div>
      <Line />
      <div style={{ color: "#515454" }}>Description: {description}</div>
    </Container>
  );
};
