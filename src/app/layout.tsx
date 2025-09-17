import "@/styles/globals.css";

import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import { Providers } from "./providers";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-vazir",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Raisio",
    description: "پنل کاربری",
    applicationName: "Raisio",
    keywords: ["raisio"],
    robots: "index, follow",
  };
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html dir="rtl" lang="fa" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cn("bg-background text-foreground", vazir.className)}>
        <Providers>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
