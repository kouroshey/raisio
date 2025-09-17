import "@/styles/globals.css";

import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";

import { ThemeSwitch } from "@/components/theme-switch";
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
    title: "test project title",
    description: "test project description",
    applicationName: "test",
    keywords: ["test"],
    robots: "index, follow",
  };
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html dir="rtl" lang="fa" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cn("bg-background text-foreground", vazir.className)}>
        <Providers>
          <main className="flex min-h-screen w-full items-center justify-center">
            {children}
            <span className="absolute top-0 left-0">
              <ThemeSwitch />
            </span>
          </main>
        </Providers>
      </body>
    </html>
  );
}
