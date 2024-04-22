/** @type {import('next').NextConfig} */

const ON_GITHUB_PAGES = process.env.NODE_ENV === 'production'

// replace this with your repository name
const repoName = 'static-recipe-blog'

const basePath = ON_GITHUB_PAGES ? `/${repoName}` : ''
const assetPrefix = ON_GITHUB_PAGES ? `/${repoName}/` : ''

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
}

export default nextConfig
