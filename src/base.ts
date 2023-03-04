import { Config } from "./types/configTypes";
import axios, { AxiosResponse } from "axios";

const abortController = new AbortController();

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  private appendUrl: string;
  private appId: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://sandbox.myidentitypass.com";
    this.appendUrl =
      config.appendUrl || "api/v2/biometrics/merchant/data/verification";
    this.appId = config.appId || "https://sandbox.myidentitypass.com";
  }

  protected invoke<T>(
    endpoint: string,
    versionUrl?: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}/${
      versionUrl ? versionUrl : this.appendUrl
    }/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "api-key": this.apiKey,
      "app-id": this.appId,
    };
    const config = {
      ...options,
      headers,
      signal: abortController.signal,
      cache: "no-cache",
      credentials: "same-origin",
    };

    return axios(url, config).then((res: AxiosResponse) => {
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.statusText);
      }
    });
  }
}
