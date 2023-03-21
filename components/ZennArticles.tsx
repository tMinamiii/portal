import React, { ReactElement } from 'react'
import Border from './atoms/Border'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'

type Props = {
  feed: string
}

const media = 'Zenn'

const ZennArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedobj = JSON.parse(feed)
  const articles: Array<ReactElement> = feedobj.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      return <ArticleLinks key={`${media}_${i}`} title={f.title} url={f.link} />
    }
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default ZennArticles
