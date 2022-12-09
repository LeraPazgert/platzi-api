import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useCategoriesApi,
} from '../../../shared';
import {
  setCategoriesList,
  setCategoriesListError,
  setIsLoading,
} from '../slices';

export const useCategoriesListService = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector(state => state.categories);
  const categoriesApi = useCategoriesApi();

  const getCategories = useCallback(
    async (limit: number) => {
      dispatch(setIsLoading(true));

      try {
        const categories = await categoriesApi.getCategories(limit);
        dispatch(setCategoriesList(categories));
      } catch (e) {
        dispatch(setCategoriesListError(e as Error));
        throw e;
      } finally {
        dispatch(setIsLoading(false));
      }
    },
    [categoriesApi, dispatch],
  );

  return { categories, loading, error, getCategories };
};
