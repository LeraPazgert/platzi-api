import { useCallback, useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { useCategoriesListService } from '../services';

export const useCategoriesListController = () => {
  const { categories, getCategories } = useCategoriesListService();

  const load = useCallback(async () => {
    try {
      await getCategories(5);
    } catch (e) {
      /* notificationView.error() */
    }
  }, [getCategories]);

  useEffectOnce(() => {
    load();
  });

  return {
    categories,
  };
};
