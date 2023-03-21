import React, { ReactElement } from 'react'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'
import Border from './atoms/Border'

type Props = {
  docs: Array<any>
}

const media = 'tMinamiii.dev'

const ZennArticles: React.FC<Props> = ({ docs }: Props): ReactElement => {
  const articles: Array<ReactElement> = docs.map((f: any, i: number) => {
    return <ArticleLinks key={`${media}_${i}`} title={f.title} url={f.link} />
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default ZennArticles
