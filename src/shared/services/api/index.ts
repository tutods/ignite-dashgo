import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { envVars } from "shared/data/constants/env";

type Options = AxiosRequestConfig;

const client = axios.create({
  baseURL: envVars.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchData = async <T>(
  url: string,
  options?: Options
): Promise<AxiosResponse<T>> => {
  const { method = "GET" } = options ?? {};

  return client({
    url,
    method,
    ...options,
  });
};

export { client, client as api, fetchData };