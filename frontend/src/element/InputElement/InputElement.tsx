import { ErrorMessage, Field } from "formik";
import { ErrorMessages } from "../Message/ErrorMessages/ErrorMessages";
import React, { FC } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #909292;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 115px;
`;

type typeProps = {
  id: string;
  type: string;
  placeholder: string;
};

export const InputElement: FC<typeProps> = ({ id, type, placeholder }) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{placeholder}</Label>
      <Field id={id} name={id} type={type} placeholder={placeholder} />
      <ErrorMessage name={id}>
        {(msg) => <ErrorMessages msg={msg} />}
      </ErrorMessage>
    </InputWrapper>
  );
};
