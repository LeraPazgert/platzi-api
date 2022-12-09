import { useCallback, useState } from 'react';
import { useEffectOnce } from 'react-use';
import {
  useAppDispatch,
  useAppSelector,
  useNotificationContext,
} from '../../../shared';
import {
  changeIsOpen,
  productAdd,
  productDecrement,
  productIncrement,
} from '../slices/CartSlice';
import { ICartProduct } from '../types';

export const useCartController = () => {
  const dispatch = useAppDispatch();
  const { addedProducts, isOpen } = useAppSelector(state => state.cart);
  const notification = useNotificationContext();

  const addToCart = useCallback(
    (product: ICartProduct) => {
      dispatch(productAdd({ ...product, amount: 1 }));
      notification.onSuccess(`${product.title} added to your cart`);
    },
    [dispatch, notification],
  );
  [];

  const decrementProduct = useCallback(
    (product: ICartProduct) => {
      dispatch(productDecrement(product));
    },
    [dispatch],
  );

  const incrementProduct = useCallback(
    (product: ICartProduct) => {
      dispatch(productIncrement(product));
    },
    [dispatch],
  );

  const changeCartOpen = useCallback(
    (isOpen: boolean) => {
      dispatch(changeIsOpen(isOpen));
    },
    [dispatch],
  );

  return {
    addedProducts,
    isOpen,
    addToCart,
    changeCartOpen,
    decrementProduct,
    incrementProduct,
  };
};
