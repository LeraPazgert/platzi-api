import { Query } from "./Query";

export interface IRequest {
    method: string;
    url: string;
    data?: any;
    headers?: Record<string, string>;
    params?: Query;
  }