import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Span = styled.span`
  width: 90px;
  display: block;
`;

type typeProps = {
  name: string;
  results: string;
};

export const InfoBlock: FC<typeProps> = ({ name, results }: typeProps) => {
  return (
    <Container>
      <Span>
        <p>{name}</p>
      </Span>
      <Span>
        <p>${results}</p>
      </Span>
    </Container>
  );
};
