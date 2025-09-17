import { useMutation } from "@tanstack/react-query";

import { login } from "./_index";

export const useGetUserInfo = () => {
  return useMutation({
    mutationFn: () => login(),
    onError: (error) => {
      console.error("Get user info failed:", error);
    },
    gcTime: 0,
  });
};
