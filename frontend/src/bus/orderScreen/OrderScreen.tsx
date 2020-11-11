import React, { FC, useEffect } from "react";
import { OrderItem } from "../placeOrderScreen/orderItem/OrderItems";
import { Message } from "../../element/Message/Message/Message";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { typeCartItem } from "../cartScreen/cartReducer";
import { OrderSumm } from "./OrderSummary/OrderSumm";
import { getOrderById } from "./action";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContainerInformation = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const OrderItems = styled.div`
  max-width: 700px;
`;

type typeProps = {
  history: any;
  match: any;
};

export const OrderScreen: FC<typeProps> = ({ history, match }: typeProps) => {
  const orderDetails = useSelector((state: AppState) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const user = useSelector((state: AppState) => state.userLogin);
  const { userInfo } = user;
  const { name, email } = userInfo;
  const {
    taxPrice,
    shippingPrice,
    totalPrice,
    orderItems,
    shippingAddress,
    paymentMethod,
  } = order;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!match.params.id) {
      history.push("/cart");
    } else {
      if (!order._id) {
        dispatch(getOrderById(match.params.id));
      }
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <p>Loading..</p>
        ) : error ? (
          <Message message={error} color="#ff6a6a" />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "700px",
              }}
            >
              <h2>ORDER: {match.params.id}</h2>
              <ContainerInformation>
                <h3>SHIPPING</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>
                  Address: {shippingAddress.address}, {shippingAddress.city},
                  {shippingAddress.postalCode}, {shippingAddress.country}
                </p>
                {!order.isDelivered ? (
                  <Message message="Not Delivered" color="#ff6a6a" />
                ) : null}
              </ContainerInformation>
              <ContainerInformation>
                <h3>PAYMENT PAY</h3>
                <p>{paymentMethod}</p>
                {!order.isPaid ? (
                  <Message message="Not Paid" color="#ff6a6a" />
                ) : null}
              </ContainerInformation>
              <OrderItems>
                <h3>ORDER ITEMS</h3>
                {orderItems.map((el: typeCartItem) => (
                  <OrderItem
                    key={el.price + el.name}
                    img={el.image}
                    name={el.name}
                    qty={el.qty}
                    price={el.price}
                  />
                ))}
              </OrderItems>
            </div>
            <div>
              <OrderSumm
                itemsSum={String(totalPrice - taxPrice - shippingPrice)}
                tax={String(taxPrice)}
                shipping={String(shippingPrice)}
                total={String(totalPrice)}
              />
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
