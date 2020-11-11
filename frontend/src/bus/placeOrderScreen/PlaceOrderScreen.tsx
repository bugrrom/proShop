import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { OrderSummary } from "../paymentScreen/orderSummary/OrderSummary";
import { CheckoutSteps } from "../../element/CheckoutSteps/CheckoutSteps";
import { OrderItem } from "./orderItem/OrderItems";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { addNewOrder } from "./action";
import { Message } from "../../element/Message/Message/Message";

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

const WrapperCheckout = styled.div`
  width: 50%;
  margin-bottom: 20px;
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
};

export const PlaceOrderScreen: FC<typeProps> = ({ history }: typeProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const { address, country, city, postalCode } = shippingAddress;
  const itemsSum = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  const Tax = 20;
  const Shipping = 0;
  const Total = Number(itemsSum) + Tax + Shipping;
  const orderCreate = useSelector((state: AppState) => state.order);
  const { error, order } = orderCreate;
  useEffect(() => {
    if (order._id) {
      history.push(`/order/${order._id}`);
    }
  }, [history, order]);
  const addOrder = () => {
    dispatch(
      addNewOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: itemsSum,
        shippingPrice: Shipping,
        taxPrice: Tax,
        totalPrice: Total,
      })
    );
  };
  return (
    <Container>
      <WrapperCheckout>
        <CheckoutSteps step1 step2 step3 step4 />
      </WrapperCheckout>
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "700px",
          }}
        >
          <ContainerInformation>
            <h3>SHIPPING</h3>
            <p>
              Address: {address}, {city}, {postalCode}, {country}
            </p>
          </ContainerInformation>
          <ContainerInformation>
            <h3>PAYMENT PAY</h3>
            <p>{paymentMethod}</p>
          </ContainerInformation>
          <OrderItems>
            <h3>ORDER ITEMS</h3>
            {cartItems.map((el) => (
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
          <OrderSummary
            addOrder={addOrder}
            itemsSum={itemsSum}
            tax={String(Tax)}
            shipping={String(Shipping)}
            total={String(Total)}
          />
          {error && <Message message={error} color="#ff6a6a" />}
        </div>
      </Wrapper>
    </Container>
  );
};
