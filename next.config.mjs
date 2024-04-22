/** @type {import('next').NextConfig} */

const repoName = process.env.NEXT_PUBLIC_GH_REPO_DEPLOY_WITHOUT_CUSTOM_DOMAIN
const basePath = repoName ? `/${repoName}` : ''
const assetPrefix = repoName ? `/${repoName}/` : ''

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  basePath,
  assetPrefix,
}

export default nextConfig
