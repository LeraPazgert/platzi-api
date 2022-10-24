import { useCallback } from "react";
import { useEffectOnce } from "react-use";
import { useProductListService } from "../services";
import { ProductsFilter } from "../slices";

export const useProductListController = () => {
  const { products, loading, error, getProducts, changeFilter } =
    useProductListService();

  const load = useCallback(async () => {
    try {
      await getProducts();
    } catch {
      // notificationView.error()
    }
  }, [getProducts]);

  const changePageSize = useCallback(
    async ({ limit, offset }: ProductsFilter) => {
      changeFilter({ limit, offset });
      await load();
    },
    [changeFilter, load]
  );

  useEffectOnce(() => {
    load();
  });

  return {
    products,
    loading,
    error,
    changePageSize,
  };
};
