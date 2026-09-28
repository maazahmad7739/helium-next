import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* allow 127.0.0.1 HMR alongside localhost in dev */
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
