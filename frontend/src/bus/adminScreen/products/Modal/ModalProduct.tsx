import React, { FC, memo, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Message } from "../../../../element/Message/Message/Message";
import { ErrorMessages } from "../../../../element/Message/ErrorMessages/ErrorMessages";

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModelContext = styled.div`
  width: 700px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FormUpdate = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-around;
    input {
      padding-left: 10px;
      border: none;
      height: 50px;
      background-color: #e2e6e6;
    }
    textarea {
      height: 70px;
      background-color: #e2e6e6;
      border: none;
      padding-left: 10px;
      font-family: "sans-serif", "Arial" ;
      resize: none;
    }
`;

const Label = styled.label`
  color: #909292;
  margin-bottom: 15px;
`;

const I = styled.i`
  color: red;
  font-size: 25px;
  cursor: pointer;
  padding: 3px;
  &:hover {
    color: #f74949;
  }
`;

const Button = styled.button`
  width: 120px;
  background-color: black;
  color: white;
  border: none;
  padding: 15px 30px;
  margin: 8px 0 8px 0;
  cursor: pointer;
  text-transform: uppercase;
  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  &:hover {
    color: #909292;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 115px;
`;

const Success = styled.div`
  background-color: green;
  text-align: center;
  padding: 7px 0;
  font-size: 18px;
`;

type typeProps = {
  onClick: () => void;
  productInfo: any;
  updateProduct: (value: any, id: string) => void;
  successDetails: boolean;
};

export const ModalProduct: FC<typeProps> = memo(
  ({ onClick, productInfo, updateProduct, successDetails }: typeProps) => {
    const [name] = useState(productInfo.name);
    const [price] = useState(productInfo.price);
    const [image] = useState(productInfo.image);
    const [brand] = useState(productInfo.brand);
    const [countInStock] = useState(productInfo.countInStock);
    const [category] = useState(productInfo.category);
    const [description] = useState(productInfo.description);
    const [success, setSuccess] = useState(false);
    console.log(successDetails)
    useEffect(() => {
      if (successDetails) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }
    }, [successDetails]);
    const initialState = {
      name: name,
      price: price,
      image: image,
      brand: brand,
      countInStock: countInStock,
      category: category,
      description: description,
    };
    return (
      <Modal>
        <ModelContext>
          {productInfo.loading ? (
            <p>...Loading</p>
          ) : productInfo.error ? (
            <p>{productInfo.error}</p>
          ) : (
            <>
              <Header>
                <I
                  onClick={onClick}
                  className="fas fa-times"
                  style={{ fontSize: "25px", color: "red" }}
                ></I>
              </Header>
              <FormUpdate>
                <Formik
                  initialValues={initialState}
                  onSubmit={(values) => {
                    updateProduct(values, productInfo._id);
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Required"),
                    price: Yup.number().required("Required"),
                    image: Yup.string().required("Required"),
                    brand: Yup.string().required("Required"),
                    countInStock: Yup.number().required("Required"),
                    category: Yup.string().required("Required"),
                    description: Yup.string().required("Required"),
                  })}
                >
                  <Form onChange={(e) => e.preventDefault()}>
                    <h3>update information</h3>
                    {false && <Message color="#ff6a6a" message={""} />}
                    <InputWrapper>
                      <Label htmlFor="name">Name</Label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                      <ErrorMessage name="name">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="price">Price</Label>
                      <Field
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Price"
                      />
                      <ErrorMessage name="price">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="image">Image</Label>
                      <Field
                        id="image"
                        name="image"
                        type="text"
                        placeholder="image"
                      />
                      <ErrorMessage name="image">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="image">Brand</Label>
                      <Field
                        id="brand"
                        name="brand"
                        type="text"
                        placeholder="brand"
                      />
                      <ErrorMessage name="brand">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="countInStock">Count In Stock</Label>
                      <Field
                        id="countInStock"
                        name="countInStock"
                        type="number"
                        placeholder="Count In Stock"
                      />
                      <ErrorMessage name="countInStock">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="category">Category</Label>
                      <Field
                        id="category"
                        name="category"
                        type="text"
                        placeholder="category"
                      />
                      <ErrorMessage name="category">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <InputWrapper>
                      <Label htmlFor="description">Description</Label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        type="text"
                        placeholder="description"
                      />
                      <ErrorMessage name="description">
                        {(msg) => <ErrorMessages msg={msg} />}
                      </ErrorMessage>
                    </InputWrapper>
                    <Button disabled={false} type="submit">
                      Update
                    </Button>
                    {success ? <Success>Success</Success> : null}
                  </Form>
                </Formik>
              </FormUpdate>
            </>
          )}
        </ModelContext>
      </Modal>
    );
  }
);
