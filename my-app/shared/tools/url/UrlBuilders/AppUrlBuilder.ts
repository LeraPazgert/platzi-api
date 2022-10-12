import { BaseUrlBuilder } from "./BaseUrlBuilder";

export class AppUrlBuilder extends BaseUrlBuilder {
  home() {
    return this.buildUrl("/");
  }
  login() {
    return this.buildUrl("/login");
  }
  register() {
    return this.buildUrl("/register");
  }
}
