import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/utils/getPostMetadata'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { ChildrenProps, ProjectPageProps, Slug } from '@/types'

function getPostContent(slug: Slug) {
  const folder = 'src/projects/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/projects')
  return posts.map((post: { slug: Slug }) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any
  searchParams: any
}) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : ''

  return {
    title: `Projects${id.replaceAll('_', ' ')}`,
  }
}

const Title = ({ children }: ChildrenProps) => {
  return <h1>title {children}</h1>
}

const Article = ({ children }: ChildrenProps) => <article>{children}</article>

const mdOptions = {
  wrapper: Article,
  overrides: {
    h1: {
      component: Title,
      //props: {
      //  className: "foo",
      //},
    },
  },
}

export default function projectPage({ params }: ProjectPageProps) {
  const slug = params.slug
  const post = getPostContent(slug)
  return (
    <main>
      <Markdown options={mdOptions}>{post.content}</Markdown>
    </main>
  )
}
