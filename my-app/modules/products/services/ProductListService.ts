import { useCallback } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useProductsApi,
} from "../../../shared";
import {
  ProductsFilter,
  setFilter,
  setIsLoading,
  setProductsList,
  setProductsListError,
} from "../slices";

export const useProductListService = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, filter } = useAppSelector(
    (state) => state.products
  );
  const productsApi = useProductsApi();

  const getProducts = useCallback(async () => {
    dispatch(setIsLoading(true));

    try {
      const products = await productsApi.getProducts(filter);
      dispatch(setProductsList(products));
    } catch (e) {
      dispatch(setProductsListError(e as Error));
      throw e;
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch, productsApi, filter]);

  const changeFilter = useCallback(
    (filter: Partial<ProductsFilter>) => {
      dispatch(setFilter(filter));
    },
    [dispatch]
  );

  return { products, loading, error, getProducts, changeFilter };
};
