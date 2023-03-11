import axios, { AxiosPromise } from 'axios';

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
    if (res.data.status === true) {
      return res.data;
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
      throw err.message;
    } else if (axios.isAxiosError(err)) {
      // If the error is an AxiosError, manage it as an axios error and throw an SDKError.
      throw new SDKError({
        message: `An AxiosError occurred: ${err.response?.statusText}`,
        code: err.response?.status,
        error: err.message,
        errorDetail: err.response?.data?.detail,
      });
    } else {
      // If the error is not an SDKError or AxiosError, process it and throw it as an SDKError.
      throw new SDKError({
        message: 'An unknown error occurred',
        error: err,
      });
    }
  }
}

export class SDKError extends Error {
  code?: number; // optional property to hold error code
  error?: any; // optional property to hold the original error
  errorDetail?: unknown; // property to display error details

  constructor(
    params: Partial<{
      code: number;
      message: string;
      error: any;
      errorDetail: unknown;
    }>
  ) {
    super(params.message); // call the Error class constructor with the message

    this.code = params.code; // assign error code if provided
    this.error = params.error; // assign original error if provided
    this.errorDetail = params.errorDetail; // assign error details if available
  }
}

export function sanitizeInputFields<
  T extends { [key: string]: string | number }
>(obj: T): T {
  // Create an empty object with the same type as the input object
  const sanitizedObj = {} as T;

  // Iterate over each key in the input object
  for (const key in obj) {
    const value = obj[key];
    // If the value is a string, sanitize it and assign it to the sanitized object

    // If the value is a image, assign it to the sanitized object without modifying it
    if (typeof value === 'string' && key === 'image') {
      sanitizedObj[key] = value as T[typeof key];
      // If the value is a number, assign it to the sanitized object without modifying it
    } else if (typeof value === 'number') {
      sanitizedObj[key] = value as T[typeof key];
      // The 'as T[typeof key]' part of this line is a type assertion that tells TypeScript that the type of the value is the same as the type of the property.
    } else if (typeof value === 'string' && key !== 'image') {
      // The following line sanitizes the string by removing all characters that are not numbers, letters, underscores, or dash
      sanitizedObj[key] = value.replace(/[^0-9a-zA-Z_-]/g, '') as T[typeof key];
      // The 'as T[typeof key]' part of this line is a type assertion that tells TypeScript that the type of the sanitized value is the same as the type of the property.
    } else {
      // If the value is of an unsupported type, throw an error
      throw new Error(`Unsupported value type: ${value}`);
    }
  }
  // Return the sanitized object
  return sanitizedObj;
}
