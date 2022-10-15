import { createContext, ReactNode, useState } from "react";
import { SignInFormData } from "shared/data/schemas/SignIn.schema";
import { fetchData } from "shared/services/api";
import { AuthResponse } from "shared/@types/AuthResponse";
import { useRouter } from "next/router";

type UserData = {
  email: string;
  roles: string[];
  permissions: string[];
};

type AuthData = {
  token: string;
  refreshToken: string;
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
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const isAuthenticated = !!user;

  const router = useRouter();

  const signIn = async (credentials: SignInFormData) => {
    try {
      const {
        data: { token, refreshToken, roles, permissions },
      } = await fetchData<AuthResponse>("/sessions", {
        method: "post",
        data: credentials,
        type: "auth",
      });

      setUser({
        email: credentials.email,
        roles,
        permissions,
      });
      setAuthData({
        token,
        refreshToken,
      });

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