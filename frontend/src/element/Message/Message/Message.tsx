import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type typeProps = {
  message: string;
  color: string;
};

export const Message: FC<typeProps> = ({ message, color }: typeProps) => {
  return (
    <Container style={{ backgroundColor: `${color}` }}>{message}</Container>
  );
};
