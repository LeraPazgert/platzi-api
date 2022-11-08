import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../modules/auth/slices/AuthSlice';
import cartReduser from '../modules/cart/slices/CartSlice';
import productReducer from '../modules/products/slices/ProductDetailsSlice';
import productsReducer from '../modules/products/slices/ProductsSlice';
import usersReducer from '../modules/users/slices/UsersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReduser,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
