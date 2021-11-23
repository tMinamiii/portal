import React, { ReactElement } from 'react'
import ArticleLinks from './ArticleLinks'
import ArticleList from './ArticleList'
import Border from './Border'

type Props = {
  feed: string
}

const media = 'ScrapBox'
function trimTitle(title: string): string {
  return title.replace(' - tMinamiii - Scrapbox', '')
}

const ScrapBoxArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedobj = JSON.parse(feed)
  const sorted = feedobj.items.sort((a: any, b: any) => {
    const aTime = Date.parse(a.isoDate)
    const bTime = Date.parse(b.isoDate)
    return bTime - aTime
  })
  const articles: Array<ReactElement> = sorted.map((f: any, i: number) => {
    if (f.title && f.link) {
      return <ArticleLinks key={`${media}_${i}`} title={trimTitle(f.title)} url={f.link} />
    }
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default ScrapBoxArticles
