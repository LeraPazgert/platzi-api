import { useCallback } from 'react';
import { useStore } from 'react-redux';
import {
  useAppDispatch,
  useAppSelector,
  useCategoriesApi,
  useProductsApi,
} from '../../../shared';
import { RootState } from '../../../store';
import {
  ProductsFilter,
  setCategoriesList,
  setFilter,
  setIsLoading,
  setProductsList,
  setProductsListError,
} from '../slices';

export const useProductListService = () => {
  const { getState } = useStore<RootState>();
  const dispatch = useAppDispatch();
  const { products, loading, error, filter } = useAppSelector(state => state.products);

  const productsApi = useProductsApi();
  const categoriesApi = useCategoriesApi();

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

  const getCategories = useCallback(
    async (limit: number) => {
      try {
        const categories = await categoriesApi.getCategories(limit);
        dispatch(setCategoriesList(categories));
      } catch (e) {
        throw e;
      }
    },
    [categoriesApi, dispatch],
  );

  return { products, loading, error, filter, getProducts, changeFilter, getCategories };
};
