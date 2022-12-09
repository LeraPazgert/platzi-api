import { useCallback } from 'react';
import { useEffectOnce } from 'react-use';
import { useProductDetailsService } from '../services';
import { IProductFormData } from '../types';

export const useProductDetailsController = (id?: number) => {
  const { product, loading, error, getProduct, editProduct, reset, createProduct } =
    useProductDetailsService();

  const load = useCallback(async () => {
    try {
      await getProduct(id as number);
    } catch {
      // notificationView.error()
    }
  }, [getProduct, id]);

  const edit = useCallback(
    async (product: IProductFormData) => {
      try {
        await editProduct(id as number, product);
      } catch {
        // notificationView.error()
      }
    },
    [editProduct, id],
  );

  const create = useCallback(
    async (product: IProductFormData) => {
      try {
        await createProduct(product);
      } catch {
        // notificationView.error()
      }
    },
    [createProduct],
  );

  useEffectOnce(() => {
    if (id) {
      load();
    }

    return () => {
      reset();
    };
  });

  return {
    product,
    loading,
    error,
    edit,
    create,
  };
};
