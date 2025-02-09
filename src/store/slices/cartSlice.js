import { createSlice } from '@reduxjs/toolkit';

const CART_SLICE_NAME = 'cartSlice';

const cartSlice = createSlice({
  name: CART_SLICE_NAME,
  initialState: {
    id: 1,
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push({ ...payload, quantity: 1 });
      state.totalPrice = state.totalPrice += parseFloat(payload.price);
      console.log('state.totalPrice1', state.totalPrice);
    },
    countTotalPrice: (state) => {
      let result = 0;
      state.cart.forEach(
        (el) => (result += Number(el.price) * Number(el.quantity))
      );
      state.totalPrice = result;
    },
    setQuantity: (state, { payload }) => {
      const findProd = state.cart.findIndex((el) => el.id === payload.id);
      state.cart[findProd].quantity = payload.quantity;
    },
    removeProduct: (state, { payload }) => {
      const findProduct = state.cart.find(item => item.id === payload);
      state.totalPrice = state.totalPrice - (Number(findProduct.quantity) * Number(findProduct.price))
      state.cart = state.cart.filter(
        (item) => item.id !== findProduct.id
      );
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart, countTotalPrice, setQuantity, removeProduct } =
  actions;

export default reducer;
