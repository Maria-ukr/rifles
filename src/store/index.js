import { configureStore } from '@reduxjs/toolkit';
import productsSliceReducer from './slices/productsSlice';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    productsList: productsSliceReducer,
    cartList: cartSliceReducer,
  },
});

export default store;
