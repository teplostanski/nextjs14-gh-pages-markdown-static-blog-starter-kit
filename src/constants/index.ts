const repoName = process.env.NEXT_PUBLIC_GH_REPO_DEPLOY_WITHOUT_CUSTOM_DOMAIN

export const basePath = repoName ? `/${repoName}` : ''
export const assetPrefix = repoName ? `/${repoName}/` : ''
