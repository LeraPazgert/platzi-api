import { useCallback } from 'react';
import { useEffectOnce } from 'react-use';
import { useAppDispatch, useAppSelector } from '../../../shared';
import {
  changeIsOpen,
  productAdd,
  productDecrement,
} from '../slices/CartSlice';
import { ICartProduct } from '../types';

export const useCartController = () => {
  const dispatch = useAppDispatch();
  const { addedProducts, isOpen } = useAppSelector(state => state.cart);

  const addToCart = useCallback(
    (product: ICartProduct) => {
      dispatch(productAdd({ ...product, amount: 1 }));
    },
    [dispatch],
  );

  const decrementProduct = useCallback(
    (product: ICartProduct) => {
      dispatch(productDecrement(product));
    },
    [dispatch],
  );

  const changeCartOpen = useCallback(
    (isOpen: boolean) => {
      dispatch(changeIsOpen(isOpen));
    },
    [dispatch],
  );

  return { addedProducts, addToCart, changeCartOpen, isOpen, decrementProduct };
};
