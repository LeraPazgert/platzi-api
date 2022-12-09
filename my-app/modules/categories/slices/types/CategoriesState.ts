import { ICategory } from '../../types';

export interface CategoriesState {
  loading: boolean;
  error: Error | null;
  categories: ICategory[];
}
