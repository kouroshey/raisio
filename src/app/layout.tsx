import "@/styles/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";
import { Vazirmatn } from "next/font/google";

import { cn } from "@/lib/utils";

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
      <body className={cn("bg-background text-foreground flex min-h-screen flex-col", vazir.className)}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
