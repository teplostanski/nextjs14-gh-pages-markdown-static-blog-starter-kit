import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/types'
import { basePath } from '@/constants'

export default function PostCard({ post }: PostMetadata) {
  return (
    <Link className='unstyled' href={`/project/${post.slug}`}>
      <div className='postCard'>
        <h3>{post.title}</h3>
        <Image
          src={`${basePath}${post.img}`}
          alt={post.title}
          width={100}
          height={50}
          priority={true}
        />

        <p>{post.bio}</p>
        <div className='statsContainer'>
          <div>
            <h5>Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5>Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
