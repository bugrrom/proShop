import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FormUpdate } from "../../../profileScreen/formUpdate/FormUpdate";
import { Message } from "../../../../element/Message/Message/Message";

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModelContext = styled.div`
  width: 400px;
  min-height: 500px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

type typeProps = {
  onClick: () => void;
  error: string;
  loading: boolean;
  onSubmit: (values: any) => void;
  name: string;
  email: string;
  successUpdate: boolean;
};

const I = styled.i`
  color: red;
  font-size: 25px;
  cursor: pointer;
  padding: 3px;
  &:hover {
    color: #f74949;
  }
`;

export const ModalProfile: FC<typeProps> = ({
  successUpdate,
  onClick,
  error,
  loading,
  onSubmit,
  name,
  email,
}: typeProps) => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (successUpdate) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  }, [successUpdate]);
  return (
    <Modal>
      <ModelContext>
        {loading ? (
          <p>...Loading</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <Header>
              <I
                onClick={onClick}
                className="fas fa-times"
                style={{ fontSize: "25px", color: "red" }}
              ></I>
            </Header>
            <div>
              {name ? (
                <>
                  <FormUpdate
                    error={error}
                    loading={loading}
                    onSubmit={onSubmit}
                    name={name}
                    email={email}
                  />
                  {success ? (
                    <Message message="Success" color="#06c742" />
                  ) : null}
                </>
              ) : (
                <p>...Loading</p>
              )}
            </div>
          </>
        )}
      </ModelContext>
    </Modal>
  );
};
