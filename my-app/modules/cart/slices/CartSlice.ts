import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsCartState } from "./types";

const initialState: IProductsCartState = {
  addedProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAdd: (state, action) => {
      const { title, quantity, price } = action.payload;
      const existingProduct = state.addedProducts.find(
        (item) => item.title === title
      );
      if (!existingProduct) {
        state.addedProducts?.push(action.payload);
        
      }
    },
    productDeleted: (state, action) => {
      state.addedProducts =
        state.addedProducts?.filter((item) => item.id !== action.payload) || [];
     
    },
  },
});

const { actions, reducer } = cartSlice;
export default reducer;
export const { productAdd, productDeleted } = actions;
