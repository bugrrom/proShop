import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { OlderDashboard } from "./orderDashboard/orderDashboard";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { getAllOrderAdmin } from "./action";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 1200px) {
    width: 85%;
  }
`;

type typeProps = {
  history: any;
};

export const AdminAllOrder: FC<typeProps> = ({ history }: typeProps) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const Order = useSelector((state: AppState) => state.adminOrder);
  const { allOrder, loadingOrders, error } = Order;
  const { userInfo } = userLogin;
  useEffect(() => {
    //@ts-ignore
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrderAdmin());
    } else {
      history.push("/login");
    }
  }, [dispatch, history]);
  return (
    <Container>
      <Wrapper>
        <OlderDashboard
          allOrder={allOrder}
          loadingOrders={loadingOrders}
          error={error}
        />
      </Wrapper>
    </Container>
  );
};
