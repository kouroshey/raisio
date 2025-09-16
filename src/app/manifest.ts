import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Test Project",
    short_name: "Test",
    icons: [
      { sizes: "192x192", type: "image/png", src: "/icon/icon-192x192.png" },
      { sizes: "512x512", type: "image/png", src: "/icon/icon-512x512.png" },
      { sizes: "1024x1024", type: "image/png", src: "/icon/icon-1024x1024.png" },
      { sizes: "512x512", type: "image/png", src: "/icon/icon-512x512-maskable.png" },
      { sizes: "1024x1024", type: "image/png", src: "/icon/icon-1024x1024-maskable.png" },
    ],

    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
  };
}
