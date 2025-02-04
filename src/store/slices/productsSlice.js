import { createSlice } from '@reduxjs/toolkit';
import * as API from '@/api';

const PRODUCTS_SLICE_NAME = 'productsSlice';

const productsSlice = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState: {
    products: [...API.products],
    filtered: [],
    product: {},
    isFetching: false,
    error: null,
  },
  reducers: {
    getProductById: (state, { payload }) => {
      state.product = state.products.find((item) => item.id === payload);
    },
    setRating: (state, { payload }) => {
      state.product.rating = payload.rate;
    },
    getProductsByCategory: (state, { payload }) => {
      let filteredProducts = [];
      if (payload) {
        filteredProducts = state.products.filter((el) => el.category === payload);
      } else {
        filteredProducts = [...state.products]
      }
      state.filtered = filteredProducts;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { getProductById, setRating, getProducts, getProductsByCategory } =
  actions;

export default reducer;
