import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_RESET,
  PRODUCT_DETAILS_SUCCESS,
  typeActionProduct,
} from "./types";

const initialState = {
  product: {
    reviews: [],
  },
  loading: false,
  error: "",
};

type typeState = {
  product: {
    reviews: string[];
  };
  loading: boolean;
  error: string;
};

export const productReducer = (
  state: typeState = initialState,
  action: typeActionProduct
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_RESET:
      return { ...state, product: {} };
    default:
      return state;
  }
};
