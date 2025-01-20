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
  },
});

const { reducer, actions } = productsSlice;
export const { getProductById } = actions;

export default reducer;
