import { ICategory } from '../../../../shared';

export interface CategoriesState {
  loading: boolean;
  error: Error | null;
  categories: ICategory[];
}
