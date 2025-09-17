"use client";

import { Spinner } from "@/components/spinner";
import { useAuth } from "@/context/auth-context";

import { LogoutButton } from "./logout-button";

export const UserDetails = () => {
  const { user, loading } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <>
          <p>{`${user.name.first} ${user.name.last}`} عزیز، خوش آمدید</p>
          <LogoutButton />
        </>
      ) : null}
    </div>
  );
};
