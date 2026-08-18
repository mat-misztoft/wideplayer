import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/player.js",
        destination: "https://stats.mixon.dev/script.js",
      },
      {
        source: "/recorder.js",
        destination: "https://stats.mixon.dev/recorder.js",
      },
      {
        source: "/api/record",
        destination: "https://stats.mixon.dev/api/record",
      },
      {
        source: "/api/websites/:websiteId/recorder",
        destination: "https://stats.mixon.dev/api/websites/:websiteId/recorder",
      },
    ];
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
