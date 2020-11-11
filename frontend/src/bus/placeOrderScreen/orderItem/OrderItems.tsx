import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid black;
  flex-wrap: wrap;
  img {
    width: 100px;
    border-radius: 5px;
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

type typeProps = {
  qty: number;
  price: number;
  name: string;
  img: string;
};

export const OrderItem: FC<typeProps> = ({
  qty,
  price,
  name,
  img,
}: typeProps) => {
  const sum = qty * price;
  return (
    <Container>
      <Link to="/">
        <img src={img} alt="name" />{" "}
      </Link>
      <Link to="/">
        <p>{name}</p>
      </Link>
      <p>
        {qty} x ${price} = ${sum.toFixed(2)}
      </p>
    </Container>
  );
};
