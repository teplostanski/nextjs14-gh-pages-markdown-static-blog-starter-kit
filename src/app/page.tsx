import Preview from '@/app/components/Preview'
import getPostMetadata from '@/utils/getPostMetadata'

export default function Home() {
  const postMetadata = getPostMetadata('src/projects')
  console.log(postMetadata)

  return (
    <main>
      <Preview postMetadata={postMetadata} />
    </main>
  )
}
