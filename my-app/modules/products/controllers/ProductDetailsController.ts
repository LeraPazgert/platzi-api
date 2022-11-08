import { useCallback } from 'react';
import { useEffectOnce } from 'react-use';
import { useProductDetailsService } from '../services';

export const useProductDetailsController = (id: number) => {
  const { product, loading, error, getProduct } = useProductDetailsService();

  const load = useCallback(async () => {
    try {
      await getProduct(id);
    } catch {
      // notificationView.error()
    }
  }, [getProduct, id]);

  useEffectOnce(() => {
    load();
  });

  return {
    product,
    loading,
    error,
  };
};
