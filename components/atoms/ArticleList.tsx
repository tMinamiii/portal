import type React from 'react'
import type { ReactElement } from 'react'
import Image from 'next/image'

type Props = {
  media: string
  articles: Array<ReactElement>
}

const ArticleList: React.FC<Props> = ({ media, articles }: Props): ReactElement => {
  const lowerMedia = media.toLowerCase()
  const imagePath = `/images/${lowerMedia}.png`
  return (
    <div>
      <p>
        <Image src={imagePath} alt="" width={24} height={24} className="mr-1 inline-block align-middle" />
        <span className="text-xl font-bold inline-block align-middle">{media}</span>
      </p>
      <div className="my-articles list-mark">
        <ul>{articles}</ul>
      </div>
    </div>
  )
}

export default ArticleList
