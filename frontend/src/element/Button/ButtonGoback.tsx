import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
    a {
    width: 100px;
    padding: 5px 0;
    text-decoration: none;
    color: #2a2b2b;
    font-size: 15px;
    font-weight: bold;
    display: block;
    text-align: center;
    margin: 10px 0 20px 0;
    text-transform: uppercase;
    border-radius: 3px;
    &:hover {
      background-color: #cdd0d0
    }
`;

type typeProps = {
  link: string;
};

export const ButtonGoBack: FC<typeProps> = ({ link }: typeProps) => {
  return (
    <Container>
      <Link to={`${link}`}>Go Back</Link>
    </Container>
  );
};
