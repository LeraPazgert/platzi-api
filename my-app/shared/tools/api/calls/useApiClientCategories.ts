import { useMemo } from 'react';
import { ICategory } from '../../../../modules/categories';
import { useApiUrlBuilderContext } from '../../url';
import { useDefaultApiClientContext } from '../contexts';

export const useCategoriesApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      getCategories: (limit: number) =>
        apiClient.get<ICategory[]>({ url: apiUrlBuilder.categories(limit) }),
    }),
    [apiClient, apiUrlBuilder],
  );
};
