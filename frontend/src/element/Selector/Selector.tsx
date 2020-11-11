import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-areas: "select";
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  min-width: 3ch;
  max-width: 10ch;
  min-height: 1ch;
  max-height: 2ch;
  border: 1px solid #909292;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#f9f9f9),
    color-stop(33%, #fff)
  );
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`;

const Selector = styled.select`
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
`;

type typeProps = {
  params: string[];
  onChange: (e: string) => void;
  value?: number;
};

export const Selectors: FC<typeProps> = ({
  params,
  onChange,
  value,
}: typeProps) => {
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <Container onChange={Change}>
      <Selector defaultValue={value}>
        {params.map((el, index) => (
          <option key={el + index}>{el}</option>
        ))}
      </Selector>
    </Container>
  );
};
