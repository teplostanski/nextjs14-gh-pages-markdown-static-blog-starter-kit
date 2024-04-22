import { Slug } from '@/types'
import getPostMetadata from './getPostMetadata'

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/projects')
  return posts.map((post: { slug: Slug }) => ({ slug: post.slug }))
}
