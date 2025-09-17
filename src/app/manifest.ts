import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raisio",
    short_name: "Raisio",
    icons: [
      { sizes: "192x192", type: "image/png", src: "/web-app-manifest-192x192.png" },
      { sizes: "512x512", type: "image/png", src: "/web-app-manifest-512x512.png" },
    ],

    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
  };
}
