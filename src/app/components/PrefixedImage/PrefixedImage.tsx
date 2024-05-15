import Image from 'next/image'
import getConfig from 'next/config'
import { PrefixedImageProps } from '@/types'
import styles from './PrefixedImage.module.scss'

export const PrefixedImage = ({ src, alt }: PrefixedImageProps) => {
  const { publicRuntimeConfig } = getConfig()
  console.log('Runtime Config:', publicRuntimeConfig)

  const basePath = publicRuntimeConfig.basePath || ''
  const imagePath = `${basePath}${src.startsWith('/') ? '' : '/'}${src}`

  return (
    <Image
      className={styles.img}
      src={imagePath}
      alt={alt}
      sizes='100vw'
      width={500} // Задайте обязательные свойства width и height
      height={300} // Они будут изменены через CSS
      priority
    />
  )
}
