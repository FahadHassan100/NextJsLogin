import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/testt",
  assetPrefix: '/testt',
  output: "standalone",
  // trailingSlash: true,
  // assetPrefix: "/testt/",
  // env: {
  //   NEXTAUTH_URL: 'https://philanthroceuticals.com/testt',
  //   NEXT_PUBLIC_APP_URL: 'https://philanthroceuticals.com/testt',
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/auth/:path*',
  //       destination: '/api/auth/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
