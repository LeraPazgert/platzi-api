import { useMemo } from 'react';
import { IUser, IUserCreateRequest } from '../../../../modules';
import { ICategory } from '../../../types';
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
