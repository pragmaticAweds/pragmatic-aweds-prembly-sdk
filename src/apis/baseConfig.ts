import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { processApi } from "../utils";
import {
  PREMBLY_SDK_BASEURL,
  PREMBLY_SDK_TEST_APIKEY,
  PREMBLY_SDK_TEST_BASE_URL,
} from "../utils/consts";

// export abstract class Base {
//   private apiKey: string;
//   private baseUrl: string;
//   private appendUrl: string;
//   private appId: string;

//   constructor(config: Config) {
//     this.apiKey = config.apiKey;
//     this.baseUrl = config.baseUrl || "https://sandbox.myidentitypass.com";
//     this.appendUrl =
//       config.appendUrl || "api/v2/biometrics/merchant/data/verification";
//     this.appId = config.appId || "https://sandbox.myidentitypass.com";
//   }

//   protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
//     const url = `${this.baseUrl}/${this.appendUrl}/${endpoint}`;
//     const headers = {
//       "Content-Type": "application/json",
//       "api-key": this.apiKey,
//       "app-id": this.appId,
//     };
//     const config = {
//       ...options,
//       headers,
//       signal: abortController.signal,
//       cache: "no-cache",
//       credentials: "same-origin",
//     };
//     console.log({ url, appendUrl: this.appendUrl, config });

//     return axios(url, config).then((res: AxiosResponse) => {
//       if (res.status === 200) {
//         return res.data;
//       } else {
//         // console.log()
//         // throw new Error(res.statusText);
//       }
//     });
//   }
// }

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
  readonly apiKey: string;
  readonly appId: string;

  constructor(apiKey: string, appId: string, env: "test" | "live" = "live") {
    this.apiKey = apiKey;
    this.appId = appId;

    this.apiClient = axios.create({
      baseURL: env === "live" ? envUrl[env] : envUrl[env].baseUrl,
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
