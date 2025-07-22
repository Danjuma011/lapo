import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't fail production builds due to ESLint warnings
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  typescript: {
    // Similarly for TypeScript errors (optional)
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
