import React, { FC } from "react";
import styled from "@emotion/styled";

type typeProps = {
  value: number;
  text: string;
  color?: string;
};

const RatingStyle = styled.div``;

const Span = styled.span`
  font-size: 12px;
`;

export const Rating: FC<typeProps> = ({ value, text, color }: typeProps) => {
  const number = new Array(5).fill("").map((el, index) => el + (index + 1));
  return (
    <RatingStyle>
      {number.map((el) => (
        <span key={el}>
          <i
            style={{ color }}
            className={
              value >= el
                ? "fas fa-star"
                : value >= Number(el) - 0.5
                ? "fas fa-start-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <Span> {text && text}</Span>
    </RatingStyle>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};
