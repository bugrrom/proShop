import React, { FC } from "react";
import styled from "@emotion/styled";
import { ButtonAddToCart } from "../../../element/Button/ButtonAddToCart";

const Containers = styled.div`
  width: 270px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type typeProps = {
  purchases: number;
  sum: string;
  disabledButton: boolean;
  onClick: () => void;
};

export const SubtotalItems: FC<typeProps> = ({
  purchases,
  sum,
  onClick,
}: typeProps) => {
  return (
    <Containers>
      <Wrapper>
        <h3>Subtotal ({purchases}) items</h3>
      </Wrapper>
      <Wrapper>
        <p>${sum}</p>
      </Wrapper>
      <ButtonAddToCart
        disabled={false}
        onClick={onClick}
        text="Proceed to checkout"
      />
    </Containers>
  );
};
