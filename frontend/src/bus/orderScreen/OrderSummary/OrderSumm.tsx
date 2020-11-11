import React, { FC } from "react";
import styled from "@emotion/styled";
import { InfoBlock } from "./InfoBlock/InfoBlock";

const Container = styled.div`
  border: 1px solid black;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;

type typeProps = {
  itemsSum: string;
  tax: string;
  shipping: string;
  total: string;
};

export const OrderSumm: FC<typeProps> = ({
  itemsSum,
  shipping,
  tax,
  total,
}: typeProps) => {
  return (
    <Container>
      <Wrapper>
        <h3>order Summary</h3>
      </Wrapper>
      <Wrapper>
        <InfoBlock name="Items" results={itemsSum} />
      </Wrapper>
      <Wrapper>
        <InfoBlock name="Shipping" results={shipping} />
      </Wrapper>
      <Wrapper>
        <InfoBlock name="Tax" results={tax} />
      </Wrapper>
      <Wrapper>
        <InfoBlock name="Total" results={total} />
      </Wrapper>
    </Container>
  );
};
