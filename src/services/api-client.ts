import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c721799ce2b146c18693332534c8328c",
  },
});

class APIClient<T> {
  private endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, { ...requestConfig })
      .then((res) => res.data);
  }
}

export default APIClient;
