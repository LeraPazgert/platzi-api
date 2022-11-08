import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import { ProductState } from "./types";

const initialState: ProductState = {
    loading: false,
    error: null,
    product: null,
};

export const ProductDetailsSlice = createSlice({
    name: "product",
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
    },
});

const { actions, reducer } = ProductDetailsSlice;
export default reducer;
export const {
    setIsLoadingProduct,
    setProduct,
    setProductError,
} = actions;