import queryString from "query-string";
import { Query } from "../../../types/Query";

export class BaseUrlBuilder {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  buildUrl(path: string, query?: Query) {
    let url = this.baseUrl + path;

    if (query && Object.keys(query).length) {
      const queryStr = queryString.stringify(query);
      url = url + "?" + queryStr;
    }

    return url;
  }
}
