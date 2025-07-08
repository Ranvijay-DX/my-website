import type { NextConfig } from 'next';

const repo = 'my-website';

const isProd = process.env.NODE_ENV === 'production';
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages' || process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  trailingSlash: true,
  env: {
    baseUrl: 'https://google.com/', // update as needed, or inject via env vars
  },
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

  // Use basePath and assetPrefix only when deploying to GitHub Pages in prod or in GitHub Actions env
  basePath: isGhPages && isProd ? `/${repo}` : '',
  assetPrefix: isGhPages && isProd ? `/${repo}/` : '',
};

export default nextConfig;
