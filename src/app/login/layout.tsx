import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "ورود",
  description: "صفحه ورود",
};

const LoginLayout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default LoginLayout;
