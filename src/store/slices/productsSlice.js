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
        filteredProducts = state.products.filter(
          (el) => el.category === payload
        );
      } else {
        filteredProducts = [...state.products];
      }
      state.filtered = filteredProducts;
    },
    getProductsBySearch: (state, { payload }) => {
      let searchedProducts = [];
      if (payload) {
        searchedProducts = state.products.filter(
          (el) =>
            el.name.toLowerCase().includes(payload.toLowerCase()) ||
            el.description.toLowerCase().includes(payload.toLowerCase())
        );
      } else {
        searchedProducts = [...state.products];
      }
      state.filtered = searchedProducts;
    },
  },
});

const { reducer, actions } = productsSlice;
export const {
  getProductById,
  setRating,
  getProducts,
  getProductsByCategory,
  getProductsBySearch,
} = actions;

export default reducer;
