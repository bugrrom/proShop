import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  typeActionProducts,
} from "./types";

const initialState = {
  products: [],
  loading: false,
  error: "",
  success: false,
};

export type typeProduct = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand?: string;
  category?: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

type typeState = {
  products: typeProduct[];
  loading: boolean;
  error: string;
  success: boolean;
};

export const productsReducer = (
  state: typeState = initialState,
  action: typeActionProducts
): typeState => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, products: [], loading: true, success: false };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        success: true,
      };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload};
    default:
      return state;
  }
  return state;
};
