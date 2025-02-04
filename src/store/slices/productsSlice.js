import { createSlice } from '@reduxjs/toolkit';
import * as API from '@/api';

const PRODUCTS_SLICE_NAME = 'productsSlice';

const productsSlice = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState: {
    products: [...API.products],
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
    getProducts: (state, { payload }) => {
      switch (payload) {
        case 'price':
          state.products.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          state.products.sort((a, b) => b.price - a.price);
          break;
        case 'popularity':
          state.products.sort((a, b) => a.rating - b.rating);
          break;
        default:
          state.products;
      }
    },
  },
});

const { reducer, actions } = productsSlice;
export const { getProductById, setRating, getProducts } = actions;

export default reducer;
