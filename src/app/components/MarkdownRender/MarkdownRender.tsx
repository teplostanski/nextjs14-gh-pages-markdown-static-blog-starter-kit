import Markdown from 'markdown-to-jsx'

import { PrefixedImage } from '@/app/components/PrefixedImage'
import { ChildrenProps } from '@/types'

const MarkdownTitle = ({ children }: ChildrenProps) => {
  return <h1>{children}</h1>
}

const MarkdownArticle = ({ children }: ChildrenProps) => (
  <article>{children}</article>
)

const mdOptions = {
  wrapper: MarkdownArticle,
  overrides: {
    h1: {
      component: MarkdownTitle,
      //props: {
      //  className: "foo",
      //},
    },
    img: {
      component: PrefixedImage,
    },
  },
}

interface MarkdownRenderProps {
  content: string
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
  return <Markdown options={mdOptions}>{content}</Markdown>
}
