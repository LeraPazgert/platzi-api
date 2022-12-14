import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types';
import { ProductState } from './types';

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

export const ProductDetailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsLoadingProduct(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setProduct(state, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    },
    setProductError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    resetProduct: () => initialState,
  },
});

const { actions, reducer } = ProductDetailsSlice;
export default reducer;
export const { setIsLoadingProduct, setProduct, setProductError, resetProduct } = actions;
