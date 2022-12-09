import { IProduct } from '../../types';
import { ProductsFilter } from './ProductsFilter';

export interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: Error | null;
  filter: ProductsFilter;
  filteredProducts: IProduct[];
}
