import React, { FC, useEffect } from "react";
import { Product } from "../productCart/ProductCart";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./action";
import { AppState } from "../../init/rootReducer";

const Mains = styled.main`
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
`;

const H1 = styled.h1`
  margin-left: 10px;
`;

export const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const productList = useSelector((state: AppState) => state.products);
  const { loading, error, products } = productList;
  return (
    <>
      <H1>Latest Products</H1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Mains>
          {products ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <p>Упс... что то пошло не так</p>
          )}
        </Mains>
      )}
    </>
  );
};
