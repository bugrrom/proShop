import React, { FC, memo, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { ModalProfile } from "./Modal/ModalProfile";
import { UserDashboard } from "./userDashboard/userDashboard";
import { deleteUser, getAllUsers, getUserByEdit, updateUser } from "./action";

const Container = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-around;
    min-width: 300px;
    margin-right: 30px;
    input {
      padding-left: 10px;
      border: none;
      height: 50px;
      background-color: #e2e6e6;
    }
  }
`;
const Wrapper = styled.div`
  width: 70%;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 500px;
    justify-content: space-around;
    input {
      padding-left: 10px;
      border: none;
      height: 50px;
      background-color: #e2e6e6;
    }
  }
`;

type typeProps = {
  history: any;
};

export const UsersAdmin: FC<typeProps> = memo(({ history }: typeProps) => {
  const usersList = useSelector((state: AppState) => state.adminUser);
  const {
    allUsers,
    error,
    loadingUsers,
    user,
    loadingDetails,
    successUpdate,
  } = usersList;
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const [activeModal, setActive] = useState(false);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history]);
  const closeModal = () => {
    setActive(false);
  };
  const editMode = (id: string) => {
    setActive(true);
    dispatch(getUserByEdit(id));
  };
  const setUpdate = (values: {
    email: string;
    name: string;
    password: string;
  }) => {
    dispatch(updateUser(values, user._id));
  };
  const removeUser = (id: string) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <Container>
      {activeModal ? (
        <ModalProfile
          successUpdate={successUpdate}
          loading={loadingDetails}
          error={error}
          onSubmit={setUpdate}
          name={user.name}
          email={user.email}
          onClick={closeModal}
        />
      ) : null}
      <Wrapper>
        <UserDashboard
          removeUser={removeUser}
          loading={loadingUsers}
          error={error}
          users={allUsers}
          editMode={editMode}
        />
      </Wrapper>
    </Container>
  );
});
