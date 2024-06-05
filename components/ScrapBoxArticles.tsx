import type React from 'react'
import type { ReactElement } from 'react'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'
import Border from './atoms/Border'

type Props = {
  feed: string
}

type ScrapBoxObj = {
  title: string
  link: string
  isoDate: string
}

const media = 'ScrapBox'
function trimTitle(title: string): string {
  return title.replace(' - tMinamiii - Scrapbox', '')
}

const ScrapBoxArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedobj = JSON.parse(feed)
  const sorted = feedobj.items.sort((a: ScrapBoxObj, b: ScrapBoxObj) => {
    const aTime = Date.parse(a.isoDate)
    const bTime = Date.parse(b.isoDate)
    return bTime - aTime
  })
  const articles: Array<ReactElement> = sorted.map((f: ScrapBoxObj, i: number) => {
    if (f.title && f.link) {
      const key = `${media}_${i}`
      return <ArticleLinks key={key} title={trimTitle(f.title)} url={f.link} />
    }
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default ScrapBoxArticles
