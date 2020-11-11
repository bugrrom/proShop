import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { ModalProduct } from "./Modal/ModalProduct";
import { ProductsDashboard } from "./productDashboard/ProductsDashboard";
import {
  getAllProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
} from "./action";

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

export const AdminAllProducts: FC<typeProps> = ({ history }: typeProps) => {
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const Products = useSelector((state: AppState) => state.adminProduct);
  const {
    allProduct,
    loadingAll,
    oneProduct,
    successDetails,
  } = Products;
  const [activeModal, setActive] = useState(false);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllProduct());
    } else {
      history.push("/login");
    }
  }, [dispatch, history]);
  const closeModal = () => {
    setActive(false);
  };
  const editMode = (id: string) => {
    setActive(true);
    dispatch(getOneProduct(id));
  };
  const createProduct = () => {
    history.push("/createProduct");
  };
  const removeProduct = (id: string) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };
  const editProduct = (value: any, id: string) => {
    dispatch(updateProduct(value, id));
  };
  return (
    <Container>
      {!activeModal ? null : oneProduct.name ? (
        <ModalProduct
          successDetails={successDetails}
          productInfo={oneProduct}
          updateProduct={editProduct}
          onClick={closeModal}
        />
      ) : null}
      <Wrapper>
        <ProductsDashboard
          removeProduct={removeProduct}
          productCreate={createProduct}
          loading={loadingAll}
          error={""}
          products={allProduct}
          editMode={editMode}
        />
      </Wrapper>
    </Container>
  );
};
