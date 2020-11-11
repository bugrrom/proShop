import React, { FC } from "react";
import styled from "@emotion/styled";

type typeProps = {
  msg: string;
};

const P = styled.p`
  font-size: 14px;
  color: #e55039;
  margin: 7px;
`;

export const ErrorMessages: FC<typeProps> = ({ msg }: typeProps) => (
  <P>{msg}</P>
);
