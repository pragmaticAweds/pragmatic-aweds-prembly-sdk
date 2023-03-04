import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { processApi } from "../utils";
import {
  PREMBLY_SDK_BASEURL,
  PREMBLY_SDK_TEST_APIKEY,
  PREMBLY_SDK_TEST_BASE_URL,
} from "../utils/consts";

const envUrl = {
  test: {
    baseUrl: PREMBLY_SDK_TEST_BASE_URL,
    apiKey: PREMBLY_SDK_TEST_APIKEY,
    appId: PREMBLY_SDK_TEST_APIKEY,
  },
  live: PREMBLY_SDK_BASEURL,
};

export abstract class BaseSDK {
  protected apiClient: AxiosInstance;
  protected apiKey: string;
  protected appId: string;

  constructor(config: { apiKey: string; appId: string; env: "test" | "live" }) {
    this.apiKey = config.apiKey;
    this.appId = config.appId;

    this.apiClient = axios.create({
      baseURL:
        config.env === "live" ? envUrl[config.env] : envUrl[config.env].baseUrl,
      headers: {
        "x-api-key": this.apiKey,
        "x-app-id": this.appId,
      },
    });
  }

  protected async post<T>(
    endpoint: string,
    data?: Record<string, string | number>
  ) {
    return await processApi(() => this.apiClient.post(endpoint, data));
  }

  protected async get(endpoint: string) {
    return await processApi(() => this.apiClient.get(endpoint));
  }
}
