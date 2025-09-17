"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { UserData } from "@/app/login/_api/_types";

import { localStorageTemplate } from "@/constants";

interface AuthContextType {
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem(localStorageTemplate.userData);
    if (stored && typeof window !== "undefined") {
      try {
        setUser(JSON.parse(stored) as UserData);
      } catch {
        localStorage.removeItem(localStorageTemplate.userData);
      }
    }
    setLoading(false);
  }, [router]);

  const login = useCallback((userData: UserData) => {
    setUser(userData);
    localStorage.setItem(localStorageTemplate.userData, JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    router.push("/login");
    setUser(null);
    localStorage.removeItem(localStorageTemplate.userData);
  }, [router]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const ctx = useMemo(() => {
    return {
      user,
      login,
      logout,
      loading,
    };
  }, [user, logout, loading, login]);

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
