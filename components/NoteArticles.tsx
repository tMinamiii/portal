import type React from 'react'
import type { ReactElement } from 'react'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'
import Border from './atoms/Border'

type Props = {
  feed: string
}

type NoteObj = {
  title: string
  link: string
  isoDate: string
}

const media = 'Note'
const QiitaArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedObj = JSON.parse(feed)
  const articles: Array<ReactElement> = []
  feedObj.items.map((f: NoteObj, i: number) => {
    if (f.title && f.link) {
      const key = `${media}_${i}`
      articles.push(<ArticleLinks key={key} title={f.title} url={f.link} />)
    }
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default QiitaArticles
