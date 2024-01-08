// import { AppDispatch } from "@/store";
import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";

// ** Defaults
const defaultProvider: any = {
  user: null,
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext(defaultProvider);

export function AuthProvider({ children }: Props) {
  // ** Redux

  const router = useRouter();

  const sharedData = "Use Context API";

  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
