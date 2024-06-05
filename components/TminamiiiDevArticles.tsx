import type React from 'react'
import type { ReactElement } from 'react'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'
import Border from './atoms/Border'

type Props = {
  docs: Array<ZennObj>
}

type ZennObj = {
  title: string
  link: string
}

const media = 'tMinamiii.dev'

const ZennArticles: React.FC<Props> = ({ docs }: Props): ReactElement => {
  const articles: Array<ReactElement> = docs.map((f: ZennObj, i: number) => {
    const key = `${media}_${i}`
    return <ArticleLinks key={key} title={f.title} url={f.link} />
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default ZennArticles
