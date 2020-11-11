//Core
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

//Components
import { Footer } from "../Footer/Footer";
import { HomeScreen } from "../../bus/homeScreen/HomeScreen";
import { ProductScreen } from "../../bus/productScreen/ProductScreen";
import { CartScreen } from "../../bus/cartScreen/cartScreen";
import { Login } from "../../bus/authScreen/login/Login";
import { Registration } from "../../bus/authScreen/registration/Registration";
import { ProfileScreen } from "../../bus/profileScreen/ProfileScreen";
import { Header } from "../../bus/header/Header";
import { ShippingScreen } from "../../bus/shippingScreen/ShippingScreen";
import { PaymentScreen } from "../../bus/paymentScreen/PaymentScreen";
import { PlaceOrderScreen } from "../../bus/placeOrderScreen/PlaceOrderScreen";
import { OrderScreen } from "../../bus/orderScreen/OrderScreen";
import { AdminAllProducts } from "../../bus/adminScreen/products/Produtcts";
import { CreateProduct } from "../../bus/adminScreen/products/createProduct/CreateProduct";
import { UsersAdmin } from "../../bus/adminScreen/allUsers/Users";
import { AdminAllOrder } from "../../bus/adminScreen/allOrder/Order";

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8px;
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 1550px) {
    width: 85%;
  }
  @media (max-width: 1270px) {
    width: 100%;
  }
`;

export const App: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/adminAllUsers" component={UsersAdmin} />
            <Route path="/adminAllProducts" component={AdminAllProducts} />
            <Route path="/createProduct" component={CreateProduct} />
            <Route path="/adminAllOrder" component={AdminAllOrder} />
          </Switch>
        </Wrapper>
      </Container>
      <Footer>Copyright &copy; ProShop</Footer>
    </>
  );
};
