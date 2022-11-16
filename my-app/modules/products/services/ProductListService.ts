import { useCallback } from 'react';
import { useStore } from 'react-redux';
import {
  useAppDispatch,
  useAppSelector,
  useProductsApi,
} from '../../../shared';
import { RootState } from '../../../store';
import {
  ProductsFilter,
  setFilter,
  setIsLoading,
  setProductsList,
  setProductsListError,
} from '../slices';

export const useProductListService = () => {
  const { getState } = useStore<RootState>();
  const dispatch = useAppDispatch();
  const { products, loading, error, filter, filteredProducts } = useAppSelector(
    state => state.products,
  );

  const productsApi = useProductsApi();

  const getProducts = useCallback(async () => {
    dispatch(setIsLoading(true));
    const filter = getState().products.filter;

    try {
      const products = await productsApi.getProducts(filter);
      dispatch(setProductsList(products));
    } catch (e) {
      dispatch(setProductsListError(e as Error));
      throw e;
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch, getState, productsApi]);

  const changeFilter = useCallback(
    (filter: Partial<ProductsFilter>) => {
      dispatch(setFilter(filter));
    },
    [dispatch],
  );

  return { products, loading, error, filter, getProducts, changeFilter, filteredProducts };
};
