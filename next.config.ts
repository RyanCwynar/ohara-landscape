import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ohara-landscape",
  assetPrefix: "/ohara-landscape/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
