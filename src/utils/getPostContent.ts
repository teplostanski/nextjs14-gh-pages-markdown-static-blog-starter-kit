import { Slug } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'

export function getPostContent(slug: Slug) {
  const folder = 'src/articles/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}
