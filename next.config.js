/** @type {import('next').NextConfig} */

// replace this with your repository name
const repoName = 'static-recipe-blog'

const basePath = `/${repoName}`
const assetPrefix = `/${repoName}/`

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
}

export default nextConfig
