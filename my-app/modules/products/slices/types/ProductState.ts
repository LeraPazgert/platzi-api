import { IProduct } from "../../types";

export interface ProductState {
    product: IProduct | null;
    loading: boolean;
    error: Error | null;
}