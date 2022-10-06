import { BaseUrlBuilder } from "./BaseUrlBuilder";

export class ApiUrlBuilder extends BaseUrlBuilder {
  products({ limit, offset }: { limit: number; offset: number }) {
    return this.buildUrl("/products", { limit, offset });
  }
  product(id: number) {
    return this.buildUrl(`/product/${id}`);
  }
  users(limit: number) {
    return this.buildUrl("/users", { limit });
  }
  user() {
    return this.buildUrl("/users");
  }
  authLogin() {
    return this.buildUrl("/auth/login");
  }
  authProfile() {
    return this.buildUrl("/auth/profile");
  }
  categories(limit: number) {
    return this.buildUrl("/categories", { limit });
  }
  category(id: number) {
    return this.buildUrl(`/categories/${id}`);
  }
  files() {
    return this.buildUrl("/files/upload");
  }
}
