import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myrobin.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
