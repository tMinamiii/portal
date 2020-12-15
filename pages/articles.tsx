import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import ArticleLinkList from '../components/ArticleLinkList';
import ArticlesArea from '../components/ArticlesArea';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';

type Props = {
  zennFeed: string;
  qiitaFeed: string;
};

export async function getServerSideProps(): Promise<any> {
  const parser = new Parser();
  const zennFeed = await parser.parseURL('https://zenn.dev/tminamiii/feed');
  const qiitaFeed = await parser.parseURL('https://qiita.com/tMinamiii/feed.atom');

  return { props: { zennFeed: JSON.stringify(zennFeed), qiitaFeed: JSON.stringify(qiitaFeed) } };
}

function fetchZenArticles(feedStr: string): Array<ReactElement> {
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
  const zenn = fetchZenArticles(zennFeed);
  const qiita = fetchZenArticles(qiitaFeed);
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ArticlesArea title="Zenn" articles={zenn} />
      <ArticlesArea title="Qiita" articles={qiita} />
    </div>
  );
};
export default ArticlesPage;
