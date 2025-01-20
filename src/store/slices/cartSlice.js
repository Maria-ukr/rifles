import { createSlice } from '@reduxjs/toolkit';

const CART_SLICE_NAME = 'cartSlice';

const cartSlice = createSlice({
  name: CART_SLICE_NAME,
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
      console.log('payload', payload.price);
      state.totalPrice += parseFloat(payload.price.replace(/\s/g, ''));
    },
    countTotalPrice: (state) => {
      state.totalPrice = state.cart.map((item) => item.price);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart } = actions;

export default reducer;
