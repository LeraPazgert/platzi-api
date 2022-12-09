import { Query } from '../../../types';
import { BaseUrlBuilder } from './BaseUrlBuilder';

export class AppUrlBuilder extends BaseUrlBuilder {
  home(query?: Query) {
    return this.buildUrl('/', query);
  }
  products(query?: Query) {
    return this.buildUrl('/products', query);
  }
  productEditForm(id: number) {
    return this.buildUrl(`/editProductForm/${id}`);
  }
  productAddForm() {
    return this.buildUrl(`/addProductForm`);
  }
  login() {
    return this.buildUrl('/login');
  }
  register() {
    return this.buildUrl('/register');
  }
  productDetails(id: number) {
    return this.buildUrl(`/product/${id}`);
  }
}
