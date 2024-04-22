import Image from 'next/image'
import getConfig from 'next/config'
import { PrefixedImageProps } from '@/types'

export const PrefixedImage = ({ src, alt }: PrefixedImageProps) => {
  const { publicRuntimeConfig } = getConfig()
  console.log('Runtime Config:', publicRuntimeConfig) // Добавьте этот лог для проверки

  const basePath = publicRuntimeConfig.basePath || '' // Установите пустую строку по умолчанию
  const imagePath = `${basePath}${src.startsWith('/') ? '' : '/'}${src}`

  return (
    <Image
      style={{ border: '1px solid red' }}
      src={imagePath}
      alt={alt}
      width={700}
      height={100}
    />
  )
}
