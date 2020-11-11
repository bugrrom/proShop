import React, { FC, useState } from "react";
import { ShippingForm } from "./shippingForm/ShippingForm";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { saveShippingAddress } from "../cartScreen/action";
import { typeAddress } from "../cartScreen/cartReducer";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type typeProps = {
  history: any;
};

export const ShippingScreen: FC<typeProps> = ({ history }: typeProps) => {
  const cart = useSelector((state: AppState) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.country);
  const [country, setCountry] = useState(shippingAddress.postalCode);
  const dispatch = useDispatch();
  const onSubmit = (values: typeAddress) => {
    dispatch(saveShippingAddress(values));
    history.push("/payment");
  };

  return (
    <Container>
      <ShippingForm
        address={address}
        city={city}
        country={country}
        postalCode={postalCode}
        onSubmit={onSubmit}
      />
    </Container>
  );
};
