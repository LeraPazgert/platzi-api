import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../types';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
  loading: false,
  error: null,
  categories: [],
};

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setCategoriesList(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
    setCategoriesListError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = CategoriesSlice;
export default reducer;
export const { setIsLoading, setCategoriesList, setCategoriesListError } = actions;
