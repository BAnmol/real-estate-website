import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server accept requests when you open it via your machine's
  // LAN IP (e.g. testing on a phone on the same WiFi) instead of localhost.
  // Dev-only; has no effect on production builds. Update the IP if it changes.
  allowedDevOrigins: ["192.168.1.46"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
