import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../../shared';
import { IProduct } from '../types';
import { ProductsFilter, ProductsState } from './types';

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  filter: {
    limit: 24,
    offset: 0,
    sort: '',
    category: {
      name: '',
      checked: false,
    },
  },
  categories: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
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

      const sortedProducts = sortProducts(state.products, state.filter.sort);
      state.products = sortedProducts;
    },
    setCategoriesList(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
  },
});

const { actions, reducer } = ProductsSlice;
export default reducer;
export const { setIsLoading, setProductsList, setProductsListError, setFilter, setCategoriesList } =
  actions;

const sortProducts = (initProducts: IProduct[], sort: string) => {
  const products = [...initProducts];

  console.log(sort);

  switch (sort) {
    case 'name,asc':
      return products.sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      });
    case 'name,desc':
      return products.sort((a, b) => {
        return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
      });

    /*  case 'name,asc':
      return products.sort((objA, objB) => {
        return objA.price - objB.price;
      });

    case 'name,desc':
      return products.sort((objA, objB) => {
        return objB.price - objA.price;
      }); */

    default:
      return products;
  }
};

const sortCategory = (initProducts: IProduct[], category: string) => {
  const products = [...initProducts];

  console.log(category);

  return products.filter(item => {
    return item.category.name === category;
  });
};
