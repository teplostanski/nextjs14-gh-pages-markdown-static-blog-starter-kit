import { ArticlePageProps, Slug } from '@/types'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import { getPostContent } from '@/utils/getPostContent'
import getPostMetadata from '@/utils/getPostMetadata'

export async function generateMetadata({
  params,
}: {
  params: { [key: string]: any }
}) {
  const id = params?.slug ? params?.slug + ' ⋅ ' : ''

  return {
    title: `${id.replaceAll('_', ' ').toUpperCase()}articles`,
  }
}

export async function generateStaticParams() {
  const posts = getPostMetadata('src/articles')
  return posts.map((post: { slug: Slug }) => ({ slug: post.slug }))
}

export default function articlePage({ params }: ArticlePageProps) {
  const slug = params.slug
  const { content } = getPostContent(slug)
  return (
    <main>
      <MarkdownRender content={content} />
    </main>
  )
}
