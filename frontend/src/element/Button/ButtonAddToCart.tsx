import styled from "@emotion/styled";
import React, { FC } from "react";

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 60px;
  margin: 8px 0 8px 0;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  &:hover {
    color: #909292;
  }
`;

type typeProps = {
  disabled: boolean;
  onClick: () => void;
  text: string;
};

export const ButtonAddToCart: FC<typeProps> = (props: typeProps) => {
  return (
    <Button onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </Button>
  );
};
