import type React from 'react'
import type { ReactElement } from 'react'
import ArticleLinks from './atoms/ArticleLinks'
import ArticleList from './atoms/ArticleList'
import Border from './atoms/Border'

const media = 'Other'
const items: Array<OtherObj> = [
  {
    key: 'every_1',
    title: 'DELISH KITCHENチラシの郵便番号・地域名・店舗名検索実装について',
    url: 'https://tech.every.tv/entry/2021/07/27/120251',
  },
  {
    key: 'every_2',
    title: 'DELISH KITCHEN IAP, IABレシートとユーザー状態の管理について',
    url: 'https://tech.every.tv/entry/2022/04/07/170000',
  },
]

type OtherObj = {
  key: string
  title: string
  url: string
}

const OtherArticles: React.FC = (): ReactElement => {
  const articles: Array<ReactElement> = items.map((f: OtherObj) => {
    return <ArticleLinks key={f.key} title={f.title} url={f.url} />
  })
  const articleList = <ArticleList media={media} articles={articles} />
  return <Border element={articleList} />
}
export default OtherArticles
