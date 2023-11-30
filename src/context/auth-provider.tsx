import { AppDispatch } from "@/store";
import { getIsLogin } from "@/store/apps/login";
import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

const defaultProvider: any = {
  user: null,
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext(defaultProvider);

export function AuthProvider({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getIsLogin());
  }, []);

  const sharedData = "Use Context API";
  return <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
