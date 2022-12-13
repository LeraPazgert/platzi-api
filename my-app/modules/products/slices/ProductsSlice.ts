import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types';
import { ProductsFilter, ProductsState } from './types';

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  filter: {
    limit: 25,
    offset: 0,
    sort: '',
    categories: [],
    text: '',
    prices: [0, 1000],
  },
  filteredProducts: [],
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
      state.filteredProducts = action.payload;
    },
    setProductsListError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<Partial<ProductsFilter>>) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
      state.filteredProducts = sortProducts(
        filteredItems(state.products as IProduct[], state.filter),
        state.filter.sort,
      );
    },
  },
});

const { actions, reducer } = ProductsSlice;
export default reducer;
export const { setIsLoading, setProductsList, setProductsListError, setFilter, deleteProduct } =
  actions;

const filteredItems = (initProducts: IProduct[], filter: ProductsFilter) => {
  return initProducts?.filter(p => {
    const matchByCategory = !filter.categories.length || filter?.categories.includes(p.category.id);

    const matchBySearch =
      !filter.text ||
      filter.text.length < 3 ||
      p.title.toLowerCase().includes(filter.text.toLowerCase());

    const matchByPrice =
      !filter.prices.length || (p.price >= filter.prices[0] && p.price <= filter.prices[1]);

    return matchByCategory && matchByPrice && matchBySearch;
  });
};

const sortProducts = (initProducts: IProduct[], sort: string) => {
  switch (sort) {
    case 'name,asc':
      return initProducts.sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      });

    case 'name,desc':
      return initProducts.sort((a, b) => {
        return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
      });

    case 'price,asc':
      return initProducts.sort((objA, objB) => {
        return objA.price - objB.price;
      });

    case 'price,desc':
      return initProducts.sort((objA, objB) => {
        return objB.price - objA.price;
      });

    default:
      return initProducts;
  }
};

/* const searchProducts = (initProducts: IProduct[], text: string) => {
  if (text === '' || text.length < 3) {
    return initProducts;
  } else {
    return initProducts.filter(item =>
      (item.title || '').toLowerCase().includes(text.toLowerCase()),
    );
  }
}; */

/* const sortProducts = (initProducts: IProduct[], sort: string) => {
  switch (sort) {
    case 'name,asc':
      return initProducts.sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      });

    case 'name,desc':
      return initProducts.sort((a, b) => {
        return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
      });

    case 'price,asc':
      return initProducts.sort((objA, objB) => {
        return objA.price - objB.price;
      });

    case 'price,desc':
      return initProducts.sort((objA, objB) => {
        return objB.price - objA.price;
      });

    default:
      return initProducts;
  }
};

const filterByCategory = (initProducts: IProduct[], categories: number[]) => {
  if (categories.length) {
    return initProducts.filter(item => categories.includes(item.category.id));
  } else {
    return initProducts;
  }
};

const filterByPrice = (initProducts: IProduct[], prices: number[]) => {
  if (prices.length) {
    return initProducts.filter(item => item.price >= prices[0] && item.price <= prices[1]);
  } else {
    return initProducts;
  }
}; */
