import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useCallback, useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { useAppUrlBuilderContext } from '../../../shared';
import { useCategoriesListService } from '../../categories/services/CategoriesListService';
import { useProductListService } from '../services';
import { IProductFormData } from '../types';

export const useProductListController = () => {
  const {
    products,
    loading,
    error,
    filter,
    getProducts,
    changeFilter,
    filteredProducts,
    productDelete,
  } = useProductListService();
  const { getCategories } = useCategoriesListService();
  const router = useRouter();
  const appUrl = useAppUrlBuilderContext();

  const load = useCallback(async () => {
    try {
      await Promise.all([getProducts(), getCategories(5)]);
    } catch (e) {
      /* notificationView.error() */
    }
  }, [getCategories, getProducts]);

  const remove = useCallback(
    async (id: number) => {
      try {
        await productDelete(id);
      } catch {
        // notificationView.error()
      }
    },
    [productDelete],
  );

  const changePageSize = useCallback(
    async (event: any, pageNumber: number) => {
      const offset = filter.limit * pageNumber;
      changeFilter({ offset });
      await load();
    },
    [filter, changeFilter, load],
  );

  const changeSortProducts = useCallback(
    async (event: any) => {
      changeFilter({ sort: event.target.value });
    },
    [changeFilter],
  );

  const changeCategoryProducts = useCallback(
    async (event: any) => {
      const { value } = event.target;
      changeFilter({ categories: value });
    },
    [changeFilter],
  );

  const changePriceProducts = useCallback(
    async (value: number[]) => {
      changeFilter({ prices: value });
    },
    [changeFilter],
  );

  const search = useCallback(
    async (data: string) => {
      changeFilter({ text: data });
    },
    [changeFilter],
  );

  useEffect(() => {
    const page = Math.round(filter.offset / filter.limit);
    const queryStr = queryString.stringify({ page });
    const url = window.location.origin + window.location.pathname + '?' + queryStr;

    if (window.history.replaceState) {
      window.history.replaceState({ ...(window.history.state || {}), path: url, as: url }, '', url);
    }
  }, [appUrl, changeFilter, filter]);

  useEffectOnce(() => {
    const page = Number(router.query.page);
    if (page) {
      changeFilter({ offset: page * filter.limit });
    }
    load();
  });

  return {
    products,
    loading,
    error,
    changePageSize,
    changeSortProducts,
    changeCategoryProducts,
    changePriceProducts,
    page: Math.round(filter.offset / filter.limit),
    filter,
    filteredProducts,
    search,
    remove,
  };
};
