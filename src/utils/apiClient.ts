// import axios, { AxiosInstance } from "axios";
// import { ApiResponse } from "../types/configTypes";

// class ApiError extends Error {
//   response: ApiResponse<any>;

//   constructor(response: ApiResponse<any>) {
//     super(response.statusText);
//     this.response = response;
//   }
// }

// export function createApiClient(
//   baseURL: string,
//   headers: Record<string, string> = {}
// ) {
//   const instance: AxiosInstance = axios.create({
//     baseURL,
//     headers: { ...headers },
//   });

//   instance.interceptors.response.use(
//     (response) => response,
//     (error: any) => {
//       if (error.response) {
//         throw new ApiError(error.response);
//       } else {
//         throw error;
//       }
//     }
//   );

//   return {
//     async post<T>(endpoint: string, data?: any): Promise<T> {
//       const response = await instance.post<T>(endpoint, data);
//       return response.data;
//     },
//     async get<T>(endpoint: string): Promise<T> {
//       const response = await instance.get<T>(endpoint);
//       return response.data;
//     },
//   };
// }
