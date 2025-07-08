import type { NextConfig } from 'next';

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'my-website';

let baseUrl;

switch (process.env.NEXT_PUBLIC_STAGE?.trim()) {
  case 'DEV':
    baseUrl = 'https://google.com/';
    break;
  case 'UAT':
    baseUrl = 'https://google.com/';
    break;
  case 'PROD':
    baseUrl = 'https://google.com/';
    break;
  default:
    baseUrl = 'https://google.com/';
    break;
}

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  trailingSlash: true,
  env: { baseUrl },
  typescript: { ignoreBuildErrors: false },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '/',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  output: 'export',
  basePath: isGhPages && isProd ? `/${repo}` : '',
  assetPrefix: isGhPages && isProd ? `/${repo}/` : '',
};

export default nextConfig;