import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import QiitaArticles from '../components/QiitaArticles';
import NoteArticles from '../components/NoteArticles';
import OtherArticles from '../components/OtherArticles';
import ScrapBoxArticles from '../components/ScrapBoxArticles';
import ZennArticles from '../components/ZennArticles';

type Props = {
  zennFeed: string;
  qiitaFeed: string;
  scrapBoxFeed: string;
  noteFeed: string;
};

export async function getStaticProps(): Promise<any> {
  const parser = new Parser();
  const zennFeedP = parser.parseURL('https://zenn.dev/tminamiii/feed');
  const qiitaFeedP = parser.parseURL('https://qiita.com/tMinamiii/feed.atom');
  const scrapBoxFeedP = parser.parseURL('https://scrapbox.io/api/feed/tMinamiii');
  const noteFeedP = parser.parseURL('https://note.com/tminami/rss');
  const zennFeed = await zennFeedP;
  const qiitaFeed = await qiitaFeedP;
  const scrapBoxFeed = await scrapBoxFeedP;
  const noteFeed = await noteFeedP;

  return {
    props: {
      zennFeed: JSON.stringify(zennFeed),
      qiitaFeed: JSON.stringify(qiitaFeed),
      scrapBoxFeed: JSON.stringify(scrapBoxFeed),
      noteFeed: JSON.stringify(noteFeed),
    },
    revalidate: 300,
  };
}

const ArticlesPage: React.FC<Props> = ({ zennFeed, qiitaFeed, scrapBoxFeed, noteFeed }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ZennArticles feed={zennFeed} />
      <QiitaArticles feed={qiitaFeed} />
      <ScrapBoxArticles feed={scrapBoxFeed} />
      <NoteArticles feed={noteFeed} />
      <OtherArticles />
    </div>
  );
};
export default ArticlesPage;
