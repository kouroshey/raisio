"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { localStorageTemplate, pathTemplate } from "@/constants";

import { Spinner } from "./spinner";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem(localStorageTemplate.userData);
    if (path !== pathTemplate.login && !user) {
      router.replace(pathTemplate.login);
    } else {
      if (path === pathTemplate.login && user) {
        router.replace(pathTemplate.dashboard);
      }
      setChecked(true);
    }
  }, [router, path]);

  if (!checked) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
};
