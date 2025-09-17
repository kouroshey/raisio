import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "داشبورد",
  description: "پنل کاربری",
};

const DashboardLayout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default DashboardLayout;
