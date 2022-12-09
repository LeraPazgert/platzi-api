import { createSlice } from '@reduxjs/toolkit';
import { ICartProduct } from '../types';
import { IProductsCartState } from './types';

const initialState: IProductsCartState = {
  addedProducts: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    productAdd: (state, action) => {
      const { title, price } = action.payload;
      const existingProduct = state.addedProducts.find(item => item.title === title);
      if (!existingProduct) {
        state.addedProducts?.push(action.payload);
      } else {
        existingProduct.price = +existingProduct.amount * +price;
      }
    },
    productIncrement: (state, action) => {
      const { id } = action.payload;
      const item = state.addedProducts.find((item: ICartProduct) => item.id === id);
      if (item?.amount) {
        item.amount = item.amount + 1;
      }
    },
    productDecrement: (state, action) => {
      const { id } = action.payload;
      const item = state.addedProducts.find((item: ICartProduct) => item.id === id);
      if (item?.amount) {
        item.amount = item.amount - 1;
      }
      state.addedProducts = state.addedProducts.filter(item => item.amount > 0);
    },
    productDeleted: (state, action) => {
      state.addedProducts = state.addedProducts?.filter(item => item.id !== action.payload) || [];
    },
    changeIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

const { actions, reducer } = cartSlice;
export default reducer;
export const { productAdd, productDeleted, changeIsOpen, productDecrement, productIncrement } =
  actions;
