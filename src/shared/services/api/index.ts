import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { envVars } from "shared/data/constants/env";
import { parseCookies } from "nookies";

type Options = AxiosRequestConfig & {
  type?: "auth" | "default";
};

const client = axios.create({
  baseURL: envVars.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const authClient = axios.create({
  baseURL: envVars.authApiUrl,
});

const { "dashgo.token": token } = parseCookies();

const fetchData = async <T>(
  url: string,
  options?: Options
): Promise<AxiosResponse<T>> => {
  const { method = "GET", type = "internal" } = options ?? {};

  return type === "internal"
    ? client({
        url,
        method,
        ...options,
      })
    : authClient({
        url,
        method,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
        ...options,
      });
};

export { fetchData, authClient, client };