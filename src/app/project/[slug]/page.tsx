import { ProjectPageProps } from '@/types'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import { getPostContent } from '@/utils/getPostContent'

export async function generateMetadata({
  params,
}: {
  params: { [key: string]: any }
}) {
  const id = params?.slug ? params?.slug + ' ⋅ ' : ''

  return {
    title: `${id.replaceAll('_', ' ').toUpperCase()}Projects`,
  }
}

export default function projectPage({ params }: ProjectPageProps) {
  const slug = params.slug
  const { content } = getPostContent(slug)
  return (
    <main>
      <MarkdownRender content={content} />
    </main>
  )
}
