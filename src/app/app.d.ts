// <reference types="@total-typescript/ts-reset" />

declare module "*.svg?url" {
  const content: import("next/image").StaticImageData;
  export default content;
}

interface PageProps<TParams extends Record<string, string> = {}> {
  params: Promise<TParams>;
}

interface LayoutProps<TParams extends Record<string, string> = {}> {
  children: React.ReactNode;
  params: Promise<TParams>;
}
