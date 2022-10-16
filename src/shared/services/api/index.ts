import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { envVars } from "shared/data/constants/env";
import { parseCookies, setCookie } from "nookies";
import { ref } from "yup";

type Options = AxiosRequestConfig & {
  type?: "auth" | "default";
};

let cookies = parseCookies();

const client = axios.create({
  baseURL: envVars.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const authClient = axios.create({
  baseURL: envVars.authApiUrl,
});

authClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ code: string }>) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === "token.expired") {
        // refresh token
        cookies = parseCookies();

        const { "dashgo.refreshToken": refreshToken } = cookies;
        authClient
          .post(
            "/refresh",
            { refreshToken },
            {
              headers: {
                Authorization: `Bearer ${cookies["dashgo.token"]}`,
              },
            }
          )
          .then(
            (
              response: AxiosResponse<{ token: string; refreshToken: string }>
            ) => {
              console.log(response, "---");
              if (response && response.data) {
                setCookie(undefined, "dashgo.token", response.data.token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });
                setCookie(undefined, "dashgo.refreshToken", refreshToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });
              }
            }
          );

        // console.log(data);
      }

      // logout
    }
  }
);

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
          Authorization: `Bearer ${cookies["dashgo.token"]}`,
        },
        ...options,
      });
};

export { fetchData, authClient, client };