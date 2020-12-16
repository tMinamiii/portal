import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import QiitaArticles from '../components/QiitaArticles';
import ScrapBoxArticles from '../components/ScrapBoxArticles';
import ZennArticles from '../components/ZennArticles';

type Props = {
  zennFeed: string;
  qiitaFeed: string;
  scrapBoxFeed: string;
};

// import AboutIdealTeam from '../pages/articles/2020/AboutIdealTeam';
// const docs: Array<any> = [{ title: AboutIdealTeam.title, link: AboutIdealTeam.link }];

// export async function getServerSideProps(): Promise<any> {
export async function getStaticProps(): Promise<any> {
  const parser = new Parser();
  const zennFeedP = parser.parseURL('https://zenn.dev/tminamiii/feed');
  const qiitaFeedP = parser.parseURL('https://qiita.com/tMinamiii/feed.atom');
  const scrapBoxFeedP = parser.parseURL('https://scrapbox.io/api/feed/tMinamiii');
  const zennFeed = await zennFeedP;
  const qiitaFeed = await qiitaFeedP;
  const scrapBoxFeed = await scrapBoxFeedP;
  return {
    props: {
      zennFeed: JSON.stringify(zennFeed),
      qiitaFeed: JSON.stringify(qiitaFeed),
      scrapBoxFeed: JSON.stringify(scrapBoxFeed),
    },
  };
}

const ArticlesPage: React.FC<Props> = ({ zennFeed, qiitaFeed, scrapBoxFeed }: Props): ReactElement => {
  // const myContents = fetchMdArticles();
  // <ArticlesArea title="tminamiii.dev" articles={myContents} />;
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ZennArticles feed={zennFeed} />
      <QiitaArticles feed={qiitaFeed} />
      <ScrapBoxArticles feed={scrapBoxFeed} />
    </div>
  );
};
export default ArticlesPage;
