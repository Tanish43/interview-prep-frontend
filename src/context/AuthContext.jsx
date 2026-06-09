"use client";

import { getUserInfo } from "@/services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("auth");

    setAuth(null);
    setUser(null);
  };

  const loadUser = async () => {
    try {
      const res = await getUserInfo();

      if (res.error) {
        logout();
        return;
      }

      setUser(res.user);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");

    if (!storedAuth) {
      setLoading(false);
      return;
    }

    setAuth(JSON.parse(storedAuth));

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        loading,
        logout,
        setAuth,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
