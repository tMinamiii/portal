import React, { ReactElement } from 'react';
import ArticleLinks from './ArticleLinks';
import ArticleList from './ArticleList';
import Border from './Border';

type Props = {
  feed: string;
};
const media = 'Other';
const QiitaArticles: React.FC<Props> = (): ReactElement => {
  const articles: Array<ReactElement> = [];
  articles.push(<ArticleLinks key="every_1" title="DELISH KITCHENチラシの郵便番号・地域名・店舗名検索実装について" url="https://tech.every.tv/entry/2021/07/27/120251" />);
  const articleList = <ArticleList media={media} articles={articles} />;
  return <Border element={articleList} />;
};
export default QiitaArticles;
