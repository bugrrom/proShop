import React, { FC, useEffect, useState } from "react";
import { ButtonGoBack } from "../../../../element/Button/ButtonGoback";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessages } from "../../../../element/Message/ErrorMessages/ErrorMessages";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../init/rootReducer";
import { addProduct } from "../action";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-around;
    input {
      padding-left: 10px;
      border: none;
      height: 50px;
      background-color: #e2e6e6;
    }
    textarea {
      padding-left: 10px;
      border: none;
      height: 80px;
      background-color: #e2e6e6;
      resize: none;
      font-family: "sans-serif", "Arial";
      margin-bottom: 15px;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 115px;
`;
const H3 = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: #585858;
`;
const Button = styled.button`
  width: 160px;
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
const Label = styled.label`
  color: #909292;
  margin-bottom: 15px;
`;

const Success = styled.div`
  background-color: green;
  text-align: center;
  padding: 7px 0;
  font-size: 18px;
`;

export const CreateProduct: FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: AppState) => state.adminProduct);
  const { error, success: productSuccess } = product;
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (productSuccess) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [productSuccess]);
  const onSubmit = (value: any) => {
    dispatch(addProduct(value));
  };

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        method: "POST",
        body: formData,
      };
      await fetch("http://localhost:4000/api/upload", config);
    } catch (e) {}
  };

  const initialState = {
    name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    countInStock: 0,
    numReviews: 0,
  };
  return (
    <Container>
      <ButtonGoBack link="/adminAllProducts" />
      <Wrapper>
        <Formik
          initialValues={initialState}
          onSubmit={(values) => {
            onSubmit(values);
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            image: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            brand: Yup.string().required("Required"),
            category: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
            countInStock: Yup.number().required("Required"),
            numReviews: Yup.number().required("Required"),
          })}
        >
          <Form onChange={(e) => e.preventDefault()}>
            {error && <p>{error}</p>}
            <H3>create new product</H3>
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Field id="name" name="name" type="name" placeholder="Name" />
              <ErrorMessage name="name">
                {(msg) => <ErrorMessages msg={msg} />}
              </ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="image">image</Label>
              <Field
                onChange={uploadFileHandler}
                id="image"
                name="image"
                type="file"
                placeholder="image"
                multiple
              />
              <ErrorMessage name="image">
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
                placeholder="Description"
              />
              <ErrorMessage name="description">
                {(msg) => <ErrorMessages msg={msg} />}
              </ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="brand">Brand</Label>
              <Field id="brand" name="brand" type="text" placeholder="Brand" />
              <ErrorMessage name="brand">
                {(msg) => <ErrorMessages msg={msg} />}
              </ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="category">Category</Label>
              <Field
                id="category"
                name="category"
                type="text"
                placeholder="Category"
              />
              <ErrorMessage name="category">
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
              <Label htmlFor="numReviews">Num Reviews</Label>
              <Field
                id="numReviews"
                name="numReviews"
                type="number"
                placeholder="Num Reviews"
              />
              <ErrorMessage name="numReviews">
                {(msg) => <ErrorMessages msg={msg} />}
              </ErrorMessage>
            </InputWrapper>
            <Button disabled={false} type="submit">
              Create
            </Button>
            {success ? <Success>Success</Success> : null}
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
