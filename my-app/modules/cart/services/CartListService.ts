import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared";
import { productAdd } from "../slices/CartSlice";
import { nanoid } from "nanoid";
import { IProduct } from "../../products";

export const useCartService = () => {
  const dispatch = useAppDispatch();
  const { addedProducts } = useAppSelector((state) => state.cart);

  const getProduct = useCallback(
    async (product: IProduct) => {
      try {
        const newProduct = {
          quantity: 1,
          id: nanoid(),
          title: product.title,
          price: Number(product.price),
          description: product.description,
          category: product.category,
          images: product.images,
          categoryId: product.categoryId,
        };
        dispatch(productAdd(newProduct));
      } catch (e) {
        throw e;
      }
    },
    [dispatch]
  );

  return { addedProducts, getProduct };
};
