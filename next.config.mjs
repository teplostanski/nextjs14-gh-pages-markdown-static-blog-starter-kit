/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';


const nextConfig = {
  publicRuntimeConfig: {
    basePath: isProd && repoName ? `/${repoName}` : '',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  },
}

export default nextConfig;