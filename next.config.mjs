/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';

const basePath = repoName ? `/${repoName}` : '';
const assetPrefix = repoName ? `/${repoName}/` : '';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath,
  assetPrefix,
}

export default nextConfig;