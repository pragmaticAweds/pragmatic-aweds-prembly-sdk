import axios, { AxiosPromise } from "axios";

export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

export /**
 * Asynchronous function that handles processing of Axios API requests.
 * @param apiPromise A function that returns a Promise that resolves to an AxiosPromise.
 * @returns A Promise that resolves to the data returned by the API if successful, or throws a `SDKError` if the API call fails.
 */

async function processApi(apiPromise: () => Promise<AxiosPromise>) {
  try {
    const res = await apiPromise();

    // Check the API response status code for success (status code 200).
    if (res.data.status === 200) {
      return res.data.data;
    } else {
      // If the response status code is not 200, throw an SDKError.
      throw new SDKError({
        code: res.data.status,
        message: res.data.message,
      });
    }
  } catch (err) {
    if (err instanceof SDKError) {
      // If the error is already an SDKError, re-throw it.
      throw err;
    } else if (axios.isAxiosError(err)) {
      // If the error is an AxiosError, manage it as an axios error and throw an SDKError.
      throw new SDKError({
        message: "An AxiosError occurred",
        error: err,
      });
    } else {
      // If the error is not an SDKError or AxiosError, process it and throw it as an SDKError.
      throw new SDKError({
        message: "An unknown error occurred",
        error: err,
      });
    }
  }
}

export class SDKError extends Error {
  code?: number; // optional property to hold error code
  error?: any; // optional property to hold the original error

  constructor(params: { code?: number; message?: string; error?: any }) {
    super(params.message); // call the Error class constructor with the message

    this.code = params.code; // assign error code if provided
    this.error = params.error; // assign original error if provided
  }
}
