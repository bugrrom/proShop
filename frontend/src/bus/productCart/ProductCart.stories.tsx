import React from "react";
import { Product, typeProps } from "./ProductCart";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "ProductCart",
  components: Product,
};

const propd = {
  _id: "1",
  name: "Airpods Wireless Bluetooth Headphones",
  image: "/images/airpods.jpg",
  description:
    "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
  brand: "Apple",
  category: "Electronics",
  price: 89.99,
  countInStock: 10,
  rating: 4.5,
  numReviews: 12,
};

export const Template = () => (
  <BrowserRouter>
    <Product product={propd} />
  </BrowserRouter>
);
