import { ICartProduct } from "../../types";

export interface IProductsCartState {
  addedProducts: ICartProduct[];
  isOpen: boolean;
}
