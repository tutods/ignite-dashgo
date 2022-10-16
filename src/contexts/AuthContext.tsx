import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SignInFormData } from "shared/data/schemas/SignIn.schema";
import { authClient, fetchData } from "shared/services/api";
import { AuthResponse } from "shared/@types/AuthResponse";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

type UserData = {
  email: string;
  roles: string[];
  permissions: string[];
};

type AuthContextData = {
  user: UserData;
  isAuthenticated: boolean;
  signIn: (credentials: SignInFormData) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const isAuthenticated = !!user;

  const router = useRouter();

  const getUserInfo = async () => {
    try {
      const response = await fetchData<UserData>("me", {
        type: "auth",
      });

      if (!response || !response.data) {
        return;
      }

      setUser({
        email: response.data.email,
        roles: response.data.roles,
        permissions: response.data.permissions,
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const { "dashgo.token": token } = parseCookies();
    const { "dashgo.refreshToken": refreshToken } = parseCookies();

    if (token) {
      getUserInfo();
    }
  }, []);

  const signIn = async (credentials: SignInFormData) => {
    try {
      const {
        data: { token, refreshToken, roles, permissions },
      } = await fetchData<AuthResponse>("/sessions", {
        method: "post",
        data: credentials,
        type: "auth",
      });

      // Save data on cookies
      setCookie(undefined, "dashgo.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie(undefined, "dashgo.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email: credentials.email,
        roles,
        permissions,
      });

      authClient.defaults.headers["Authorization"] = `Bearer ${token}`;
      await router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };