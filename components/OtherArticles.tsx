import React, { ReactElement } from 'react';
import ArticleLinks from './ArticleLinks';
import ArticleList from './ArticleList';
import Border from './Border';

const media = 'Other';
const items = [
  {
    key:"every_1",
    title:"DELISH KITCHENチラシの郵便番号・地域名・店舗名検索実装について",
    url:"https://tech.every.tv/entry/2021/07/27/120251",
  }
];

const OtherArticles: React.FC = (): ReactElement => {
  const articles: Array<ReactElement> = [];
  items.map((f: any) => {
    articles.push(<ArticleLinks key={f.key} title={f.title} url={f.url} />);
  });
  const articleList = <ArticleList media={media} articles={articles} />;
  return <Border element={articleList} />;
};
export default OtherArticles;
