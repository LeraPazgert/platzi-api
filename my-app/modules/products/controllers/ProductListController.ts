import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { useAppUrlBuilderContext } from '../../../shared';
import { useProductListService } from '../services';

export const useProductListController = () => {
  const { products, loading, error, filter, getProducts, changeFilter, getCategories } =
    useProductListService();
  const router = useRouter();
  const appUrl = useAppUrlBuilderContext();

  /* const [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(products.length / PER_PAGE);
  const data = usePagination(products, PER_PAGE); */

  const load = useCallback(async () => {
    try {
      await getProducts();
      await getCategories(5);
    } catch {
      // notificationView.error()
    }
  }, [getCategories, getProducts]);

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
      changeFilter({ category: { name: event.target.name, checked: true } });
    },
    [changeFilter],
  );

  useEffect(() => {
    const page = Math.round(filter.offset / filter.limit);
    const url = appUrl.home({ page });
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
    page: Math.round(filter.offset / filter.limit),
    filter,
  };
};
