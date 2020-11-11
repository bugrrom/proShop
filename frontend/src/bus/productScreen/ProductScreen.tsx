import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import { ProductBuy } from "./productBuy/ProductBuy";
import { ProductInfos } from "./productInfo/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "./action";
import { AppState } from "../../init/rootReducer";
import { ButtonGoBack } from "../../element/Button/ButtonGoback";

type typeProps = {
  match: any;
  history: any;
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 500px;
  @media (max-width: 550px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const ProductScreen: FC<typeProps> = ({ match, history }: typeProps) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  const { error, loading, product } = useSelector(
    (state: AppState) => state.product
  );
  const setQ = (e: number) => {
    setQty(e);
  };
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Container>
      <ButtonGoBack link="/" />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Wrapper>
          <Img src={product.image} alt={product?.name} />
          <ProductInfos
            name={product.name}
            numReviews={product.numReviews}
            rating={product.rating}
            price={product.price}
            description={product.description}
          />
          <ProductBuy
            addToCartHandler={addToCartHandler}
            onChange={setQ}
            price={product.price}
            countInStock={product.countInStock}
          />
        </Wrapper>
      )}
    </Container>
  );
};
