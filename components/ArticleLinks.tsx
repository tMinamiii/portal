import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  url: string
  title: string
}

const ArticleLinks: React.FC<Props> = ({ url, title }: Props): ReactElement => {
  return (
    <li>
      <Link className="underline" href={url}>
        {title}
      </Link>
    </li>
  )
}
export default ArticleLinks
