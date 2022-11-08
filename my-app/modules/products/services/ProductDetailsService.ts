import { useCallback } from "react";
import {
    useAppDispatch,
    useAppSelector,
    useProductsApi,
} from "../../../shared";
import { setIsLoadingProduct, setProduct, setProductError } from "../slices";


export const useProductDetailsService = () => {
    const dispatch = useAppDispatch();
    const { product, loading, error, } = useAppSelector(
        (state) => state.product
    );
    const productsApi = useProductsApi();

    const getProduct = useCallback(async (id: number) => {
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
    }, [dispatch, productsApi]);

    return { product, loading, error, getProduct };
}