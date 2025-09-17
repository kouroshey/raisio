import { useCallback } from "react";

const isWindowDefined = () => typeof window !== "undefined";

export const useLocalStorage = () => {
  const get = useCallback((key: string): string | null => {
    if (!isWindowDefined()) return null;
    return localStorage.getItem(key);
  }, []);

  const set = useCallback((key: string, value: string): void => {
    if (!isWindowDefined()) return;
    localStorage.setItem(key, value);
  }, []);

  const remove = useCallback((key: string): void => {
    if (!isWindowDefined()) return;
    localStorage.removeItem(key);
  }, []);

  const clear = useCallback((): void => {
    if (!isWindowDefined()) return;
    localStorage.clear();
  }, []);

  const has = useCallback((key: string): boolean => {
    if (!isWindowDefined()) return false;
    return localStorage.getItem(key) !== null;
  }, []);

  return { get, set, remove, clear, has };
};
