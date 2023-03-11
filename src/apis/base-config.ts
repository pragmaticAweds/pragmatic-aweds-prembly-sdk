import axios, { AxiosInstance } from 'axios';
import { IndexSignatureProps } from '../types';
import { processApi, sanitizeInputFields } from '../utils';
import {
  PREMBLY_SDK_BASEURL,
  PREMBLY_SDK_TEST_BASE_URL,
} from '../utils/consts';

const envUrl = {
  test: PREMBLY_SDK_TEST_BASE_URL,
  live: PREMBLY_SDK_BASEURL,
};

/**
 * Base class for SDKs
 */
export abstract class BaseSDK {
  /**
   * The AxiosInstance used to make API requests
   */
  protected apiClient: AxiosInstance;

  /**
   * The API key used to authenticate API requests
   */
  protected apiKey: string;

  /**
   * The App ID used to authenticate API requests
   */
  protected appId: string;

  /**
   * Constructor for BaseSDK
   * @param {Object} config - The configuration options for the SDK
   * @param {string} config.apiKey - The API key used to authenticate API requests
   * @param {string} config.appId - The App ID used to authenticate API requests
   * @param {"test" | "live"} config.env - The environment to use for API requests ("test" or "live")
   */
  constructor(config: { apiKey: string; appId: string; env: string }) {
    this.apiKey = config.apiKey;
    this.appId = config.appId;

    /**
     * The AxiosInstance used to make API requests
     * @type {AxiosInstance}
     */
    this.apiClient = axios.create({
      baseURL: config.env === 'live' ? envUrl[config.env] : envUrl['test'],
      headers: {
        'app-id': this.appId,
        'x-api-key': this.apiKey,
      },
    });
  }

  /**
   * Makes a POST request to the API
   * @param {string} endpoint - The API endpoint to request
   * @param {Object} data - The data to send with the request
   * @returns {Promise<T>} - The API response
   * @template T
   */
  protected async post<T>(endpoint: string, data: T): Promise<T> {
    const sanitizedData = sanitizeInputFields(data as IndexSignatureProps);
    return await processApi(() => this.apiClient.post(endpoint, sanitizedData));
  }

  /**
   * Makes a GET request to the API
   * @param {string} endpoint - The API endpoint to request
   * @returns {Promise<any>} - The API response
   */
  protected async get(endpoint: string) {
    return await processApi(() => this.apiClient.get(endpoint));
  }
}
