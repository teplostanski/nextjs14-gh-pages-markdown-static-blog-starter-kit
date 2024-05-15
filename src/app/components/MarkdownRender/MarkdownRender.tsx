import Markdown from 'markdown-to-jsx'

import { PrefixedImage } from '@/app/components/PrefixedImage/PrefixedImage'
import { ChildrenProps } from '@/types'
import styles from './MarkdownRender.module.scss'

const MdTitle = ({ children }: ChildrenProps) => {
  return <h1>{children}</h1>
}

const MdSubtitle = ({ children }: ChildrenProps) => {
  return <h2 className={styles.subtitle}>{children}</h2>
}

const MdArticle = ({ children }: ChildrenProps) => (
  <article className={styles.article}>{children}</article>
)

const MdList = ({ children }: ChildrenProps) => (
  <li className={styles.list}>{children}</li>
)

const mdOptions = {
  wrapper: MdArticle,
  overrides: {
    h1: {
      component: MdTitle,
      //props: {
      //  className: "foo",
      //},
    },
    h2: {
      component: MdSubtitle,
    },
    img: {
      component: PrefixedImage,
    },
    li: {
      component: MdList,
    },
  },
}

interface MarkdownRenderProps {
  content: string
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
  return <Markdown options={mdOptions}>{content}</Markdown>
}
