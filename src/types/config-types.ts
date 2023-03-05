import { AxiosRequestConfig } from "axios";

export type Config = {
  apiKey: string;
  appId: string;
  baseUrl?: string;
};

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig;
}
