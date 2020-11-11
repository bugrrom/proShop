import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { getUserInfo, updateUser } from "./action";
import { FormUpdate } from "./formUpdate/FormUpdate";
import { MyOrder } from "./myOrders/MyOrders";
import { getOrderAll } from "../orderScreen/action";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export type FormValues = {
  email: string;
  password: string;
  name: string;
};

type typeProps = {
  history: any;
};

export const ProfileScreen: FC<typeProps> = ({ history }: typeProps) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: AppState) => state.userUpdate);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const { userInfo } = userLogin;
  const orders = useSelector((state: AppState) => state.orderDetails);
  const { allOrder } = orders;
  const [name, setName] = useState(userDetails.user.name);
  const [email, setEmail] = useState(userDetails.user.email);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserInfo("profile"));
        dispatch(getOrderAll());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, history, user]);

  const onSubmit = (values: FormValues) => {
    dispatch(updateUser(values));
  };
  return (
    <Container>
      <Wrapper>
        {name ? (
          <>
            <FormUpdate
              error={error}
              loading={loading}
              onSubmit={onSubmit}
              name={name}
              email={email}
            />
            <MyOrder order={allOrder} />
          </>
        ) : (
          <p>...Loader</p>
        )}
      </Wrapper>
    </Container>
  );
};
