import axios, { Method } from "axios";
import { DefaultStorageClient } from "../../storage";
import { ApiClient } from "./ApiClient";

export class DefaultApiClient implements ApiClient {
  localStorageClient: DefaultStorageClient;
  headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  };
  constructor(localStorage: DefaultStorageClient) {
    this.localStorageClient = localStorage;
  }

  public getHeaders() {
    const token = this.localStorageClient.get();
    return token
      ? { ...this.headers, Authorization: `Bearer ${token}` }
      : this.headers;
  }

  public async request<T, TResult = T>({
    method,
    url,
    data,
    params,
  }: {
    method: Method;
    url: string;
    data?: Partial<T>;
    params?: Record<string, any>;
  }): Promise<TResult> {
    return axios({
      method,
      url,
      headers: this.getHeaders(),
      params,
      data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  public async get<T, TResult = T>({
    url,
    params,
  }: {
    url: string;
    params?: Partial<T>;
  }) {
    return this.request<T, TResult>({
      method: "GET",
      params,
      url,
    });
  }

  public async post<T, TResult = T>({
    url,
    data,
  }: {
    url: string;
    data?: Partial<T>;
  }) {
    return this.request<T, TResult>({
      method: "POST",
      url,
      data,
    });
  }
  public async put<T, TResult = T>({
    url,
    data,
  }: {
    url: string;
    data?: Partial<T>;
  }) {
    return this.request<T, TResult>({
      method: "PUT",
      url,
      data,
    });
  }
  public async delete<T, TResult = T>({
    url,
    data,
    params,
  }: {
    url: string;
    data?: Partial<T>;
    params?: Partial<T>;
  }) {
    return this.request<T, TResult>({
      method: "DELETE",
      url,
      data,
      params,
    });
  }
}
