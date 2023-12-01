import { AppDispatch } from "@/store";
import { getIsLogin, logout } from "@/store/apps/login";
import { useRouter } from "next/router";
import { createContext, use, useContext, useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/logout") {
      dispatch(logout());
      router.push("/login");
    }
  }, [router, dispatch]);

  useEffect(() => {
    dispatch(getIsLogin());
  }, [router, dispatch]);

  const sharedData = "Use Context API";
  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
