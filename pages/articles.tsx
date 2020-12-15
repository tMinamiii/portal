import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import ArticleLinkList from '../components/ArticleLinkList';
import ArticlesArea from '../components/ArticlesArea';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import { AboutIdealTeamTitle } from './articles/2020/AboutIdealTeam';

type Props = {
  zennFeed: string;
  qiitaFeed: string;
};

// export async function getServerSideProps(): Promise<any> {
export async function getStaticProps(): Promise<any> {
  const parser = new Parser();
  const zennFeedP = parser.parseURL('https://zenn.dev/tminamiii/feed');
  const qiitaFeedP = parser.parseURL('https://qiita.com/tMinamiii/feed.atom');
  const zennFeed = await zennFeedP;
  const qiitaFeed = await qiitaFeedP;
  return { props: { zennFeed: JSON.stringify(zennFeed), qiitaFeed: JSON.stringify(qiitaFeed) } };
}

function fetchMdArticles(): Array<ReactElement> {
  const articles: Array<ReactElement> = [];
  articles.push(
    <ArticleLinkList key="about-ideal-team-2020" title={AboutIdealTeamTitle} url="/articles/2020/AboutIdealTeam" />,
  );
  return articles;
}

function fetchRssArticles(feedStr: string): Array<ReactElement> {
  const feed = JSON.parse(feedStr);
  const articles: Array<ReactElement> = [];
  feed.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleLinkList key={`zenn_${i}`} title={f.title} url={f.link} />);
    }
  });
  return articles;
}

const ArticlesPage: React.FC<Props> = ({ zennFeed, qiitaFeed }: Props): ReactElement => {
  const myContents = fetchMdArticles();
  const zenn = fetchRssArticles(zennFeed);
  const qiita = fetchRssArticles(qiitaFeed);
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ArticlesArea title="tminamiii.dev" articles={myContents} />
      <ArticlesArea title="Zenn" articles={zenn} />
      <ArticlesArea title="Qiita" articles={qiita} />
    </div>
  );
};
export default ArticlesPage;
