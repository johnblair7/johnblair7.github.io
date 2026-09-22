import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files, while the private Sites deployment uses
  // the existing Vinext/Cloudflare build. Keep the two deployment paths
  // independent so either host can be updated from the same source.
  ...(process.env.GITHUB_ACTIONS === "true"
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
