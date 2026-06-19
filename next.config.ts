import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Allow local network IP access to fix HMR and dev resources
  allowedDevOrigins: ['192.168.0.107', 'localhost'],
};

export default nextConfig;
