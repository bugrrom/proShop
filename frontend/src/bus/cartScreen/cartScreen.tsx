import React, { FC, useEffect } from "react";
import { ButtonGoBack } from "../../element/Button/ButtonGoback";
import { CartProductItem } from "./cartProductItem/CartProductItem";
import styled from "@emotion/styled";
import { SubtotalItems } from "./subtotalItems/SubtotalItems";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "./action";
import { AppState } from "../../init/rootReducer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type typeProps = {
  match: any;
  location: string;
  history: any;
};

export const CartScreen: FC<typeProps> = ({
  match,
  location,
  history,
}: typeProps) => {
  const productId = match.params.id;
  //@ts-ignore
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const updateCart = (id: string, qrt: number) => {
    dispatch(addToCart(id, qrt));
  };
  const purchases = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const sum = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  const removeProductCart = (id: string) => {
    dispatch(removeItem(id));
  };
  const Checkout = () => {
    history.push("/shipping");
  };
  return (
    <>
      <ButtonGoBack link="/" />
      <h3>Shopping Cart</h3>
      <Wrapper>
        <Container>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((el) => (
              <CartProductItem
                removeProductCart={removeProductCart}
                key={el.product}
                product={el}
                updateCart={updateCart}
              />
            ))
          )}
        </Container>
        <div>
          <SubtotalItems
            onClick={Checkout}
            disabledButton={cartItems.length === 0}
            purchases={purchases}
            sum={sum}
          />
        </div>
      </Wrapper>
    </>
  );
};
