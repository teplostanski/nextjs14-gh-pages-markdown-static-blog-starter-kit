/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';

const basePath = repoName ? `/${repoName}` : '';

console.log("Base Path:", process.env.NEXT_PUBLIC_REPO_NAME);

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: basePath,
  output: "export",
}

export default nextConfig;