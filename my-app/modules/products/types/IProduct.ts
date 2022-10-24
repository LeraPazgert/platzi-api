import { ICategory } from "../../../shared";

export interface IProduct {
  id: number;
  quantity?: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  categoryId?: number;
}
