import { useMemo } from 'react';
import {
  IProduct,
  IProductCreateRequest,
  ProductsFilter,
} from '../../../../modules/products';
import { useApiUrlBuilderContext } from '../../url';
import { useDefaultApiClientContext } from '../contexts';

export const useProductsApi = () => {
  const apiClient = useDefaultApiClientContext();
  const apiUrlBuilder = useApiUrlBuilderContext();

  return useMemo(
    () => ({
      getProducts: ({ limit, offset }: ProductsFilter) =>
        apiClient.get<IProduct[]>({
          url: apiUrlBuilder.products({ limit, offset }),
        }),
      createProduct: (product: IProductCreateRequest) =>
        apiClient.post<IProductCreateRequest, IProduct>({
          url: apiUrlBuilder.setProducts(),
          data: product,
        }),
      editProduct: (productId: number, product: IProductCreateRequest) =>
        apiClient.put<IProductCreateRequest, IProduct>({
          url: apiUrlBuilder.product(productId),
          data: product,
        }),
      removeProduct: (productId: number) =>
        apiClient.delete<IProduct>({
          url: apiUrlBuilder.product(productId),
        }),
      getProduct: (productId: number) =>
        apiClient.get<IProduct>({
          url: apiUrlBuilder.product(productId),
        }),
    }),
    [apiClient, apiUrlBuilder],
  );
};
