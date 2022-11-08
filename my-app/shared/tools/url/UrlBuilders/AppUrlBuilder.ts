import { Query } from '../../../types';
import { BaseUrlBuilder } from './BaseUrlBuilder';

export class AppUrlBuilder extends BaseUrlBuilder {
  home(query?: Query) {
    return this.buildUrl('/', query);
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
