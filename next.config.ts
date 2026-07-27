import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    memoryBasedWorkersCount: true,
  },
  output: "standalone",
};

export default nextConfig;
