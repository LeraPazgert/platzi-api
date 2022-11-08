import { useMemo } from "react";
import {
  IProduct,
  IProductCreateRequest,
  ProductsFilter,
} from "../../../../modules/products";

import { useApiUrlBuilderContext } from "../../url";
import { useDefaultApiClientContext } from "../contexts";

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
      getProduct: (id: number) =>
        apiClient.get<IProduct>({
          url: apiUrlBuilder.product(id),
        }),
    }),
    [apiClient, apiUrlBuilder]
  );
};
