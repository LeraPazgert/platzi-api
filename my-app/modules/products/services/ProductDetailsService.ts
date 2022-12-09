import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useFilesApi,
  useProductsApi,
} from '../../../shared';
import {
  resetProduct,
  setIsLoadingProduct,
  setProduct,
  setProductError,
} from '../slices';
import { IProductFormData } from '../types';

export const useProductDetailsService = () => {
  const dispatch = useAppDispatch();
  const { product, loading, error } = useAppSelector(state => state.product);
  const productsApi = useProductsApi();
  const filesApi = useFilesApi();

  const getProduct = useCallback(
    async (id: number) => {
      dispatch(setIsLoadingProduct(true));
      try {
        const product = await productsApi.getProduct(id);
        dispatch(setProduct(product));
      } catch (e) {
        dispatch(setProductError(e as Error));
        throw e;
      } finally {
        dispatch(setIsLoadingProduct(false));
      }
    },
    [dispatch, productsApi],
  );

  const reset = useCallback(() => {
    dispatch(resetProduct());
  }, [dispatch]);

  const editProduct = useCallback(
    async (productId: number, product: IProductFormData) => {
      dispatch(setIsLoadingProduct(true));
      try {
        const newImages: string[] = [];

        if (product.newImage) {
          const formData = new FormData();
          formData.append('file', product.newImage, product.newImage.name);

          const image = await filesApi.uploadFile(formData);
          newImages.push(image.location);
        }

        const editProduct = await productsApi.editProduct(productId, {
          ...product,
          price: Number(product.price),
          images: product.images ? [...product.images, ...newImages] : newImages,
        });

        dispatch(setProduct(editProduct));
      } catch (e) {
        dispatch(setProductError(e as Error));
        throw e;
      } finally {
        dispatch(setIsLoadingProduct(false));
      }
    },
    [dispatch, filesApi, productsApi],
  );

  const createProduct = useCallback(
    async (product: IProductFormData) => {
      try {
        const newImages: string[] = [];

        if (product.newImage) {
          const formData = new FormData();
          formData.append('file', product.newImage, product.newImage.name);

          const image = await filesApi.uploadFile(formData);
          newImages.push(image.location);
        }

        await productsApi.createProduct({
          ...product,
          price: Number(product.price),
          images: product.images ? [...product.images, ...newImages] : newImages,
        });
      } catch (e) {}
    },
    [filesApi, productsApi],
  );

  return { product, loading, error, getProduct, editProduct, reset, createProduct };
};
