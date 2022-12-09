import { ICategory } from '../../categories';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  categoryId?: number;
}
