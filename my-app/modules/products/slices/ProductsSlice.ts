import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import { ProductsFilter, ProductsState } from "./types";

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  filter: {
    limit: 28,
    offset: 4,
  },
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setProductsList(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setProductsListError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    setFilter(state, action: PayloadAction<Partial<ProductsFilter>>) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
  },
});

const { actions, reducer } = ProductsSlice;
export default reducer;
export const {
  setIsLoading,
  setProductsList,
  setProductsListError,
  setFilter,
} = actions;
