import { ICategory } from "../../../shared";

export interface ICartProduct {
  id: number;
  amount: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  categoryId?: number;
}
