const repoName = process.env.NEXT_PUBLIC_REPO_NAME

export const basePath = repoName ? `/${repoName}` : ''
export const assetPrefix = repoName ? `/${repoName}/` : ''
