import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import ArticleLinkList from '../components/ArticleLinkList';
import ArticlesArea from '../components/ArticlesArea';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';

type Props = {
  zennFeed: string;
};

export async function getServerSideProps(): Promise<any> {
  let parser = new Parser()
  const zennRssUrl = 'https://zenn.dev/tminamiii/feed';
  const feed = await parser.parseURL(zennRssUrl);
  return { props: { zennFeed: JSON.stringify(feed) } };
}

function fetchZenArticles(zennFeed: string): Array<ReactElement> {
  const feed = JSON.parse(zennFeed)
  const articles: Array<ReactElement> = [];
  feed.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleLinkList key={`zenn_${i}`} title={f.title} url={f.link} />);
    }
  })
  return articles;
}

const ArticlesPage: React.FC<Props> = ({zennFeed}: Props): ReactElement => {
  const articles = fetchZenArticles(zennFeed)
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ArticlesArea title="Zenn" articles={articles} />
    </div>
  );
};
export default ArticlesPage;
