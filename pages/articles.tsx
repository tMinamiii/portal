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
  scrapBoxFeed: string;
};

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

function fetchMdArticles(): Array<ReactElement> {
  const articles: Array<ReactElement> = [];
  articles.push(
    <ArticleLinkList key="about-ideal-team-2020" title={AboutIdealTeamTitle} url="/articles/2020/AboutIdealTeam" />,
  );
  return articles;
}

function trimTitle(media: string, title: string): string {
  if (media.toLowerCase() === 'scrapbox') {
    return title.replace(' - tMinamiii - Scrapbox', '');
  }
  return title;
}

function fetchRssArticles(media: string, feedStr: string): Array<ReactElement> {
  const feed = JSON.parse(feedStr);
  const articles: Array<ReactElement> = [];
  feed.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleLinkList key={`${media}_${i}`} title={trimTitle(media, f.title)} url={f.link} />);
    }
  });
  return articles;
}

const ArticlesPage: React.FC<Props> = ({ zennFeed, qiitaFeed, scrapBoxFeed }: Props): ReactElement => {
  // const myContents = fetchMdArticles();
  const zenn = fetchRssArticles('zenn', zennFeed);
  const qiita = fetchRssArticles('qiita', qiitaFeed);
  const scrapBox = fetchRssArticles('scrapbox', scrapBoxFeed);
  // <ArticlesArea title="tminamiii.dev" articles={myContents} />;
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ArticlesArea title="Zenn" articles={zenn} />
      <ArticlesArea title="Qiita" articles={qiita} />
      <ArticlesArea title="ScrapBox" articles={scrapBox} />
    </div>
  );
};
export default ArticlesPage;
