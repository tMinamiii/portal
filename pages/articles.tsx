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
  let parser = new Parser()
  const zennFeed = await parser.parseURL('https://zenn.dev/tminamiii/feed');
  const qiitaFeed = await parser.parseURL('https://qiita.com/tMinamiii/feed.atom');

  return { props: { zennFeed: JSON.stringify(zennFeed), qiitaFeed: JSON.stringify(qiitaFeed) } };
}

function fetchZenArticles(feedStr: string): Array<ReactElement> {
  const ignores = [
  "https://zenn.dev/tminamiii/articles/97e9aab5d44af5",
  "https://zenn.dev/tminamiii/articles/b4302125c89fdc",
    "https://zenn.dev/tminamiii/articles/b26a773cef9ff2",
  ]
  const feed = JSON.parse(feedStr)
  const articles: Array<ReactElement> = [];
  feed.items.map((f: any, i: number) => {
    if (f.title && f.link && !ignores.includes(f.link)) {
      articles.push(<ArticleLinkList key={`zenn_${i}`} title={f.title} url={f.link} />);
    }
  })
  return articles;
}

const ArticlesPage: React.FC<Props> = ({zennFeed, qiitaFeed}: Props): ReactElement => {
  const zenn = fetchZenArticles(zennFeed)
  const qiita = fetchZenArticles(qiitaFeed)
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
