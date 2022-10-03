import { Method } from "axios";

export interface ApiClient {
  request<T, TResult = T>(p: {
    method: Method;
    url: string;
    data?: Partial<T>;
    params?: Record<string, any>;
  }): Promise<TResult>;
  get<T, TResult = T>(p: {
    url: string;
    params?: Partial<T>;
  }): Promise<TResult>;
  post<T, TResult = T>(p: { url: string; data?: Partial<T> }): Promise<TResult>;
  put<T, TResult = T>(p: { url: string; data?: Partial<T> }): Promise<TResult>;
  delete<T, TResult = T>(p: {
    url: string;
    data?: Partial<T>;
    params?: Partial<T>;
  }): Promise<TResult>;
}
