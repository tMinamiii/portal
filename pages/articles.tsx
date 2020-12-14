import React, { ReactElement } from 'react';
import Parser from 'rss-parser';
import ArticleLinkList from '../components/ArticleLinkList';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import ZenArticles from '../components/ZenArticles';

type Props = {
  zenn: any;
};

export async function getServerSideProps(): Promise<any> {
  let parser = new Parser()
  const zennRssUrl = 'https://zenn.dev/tminamiii/feed';
  const feed = await parser.parseURL(zennRssUrl);
  return { props: { zenn: JSON.stringify(feed) } };
}


const ArticlesPage: React.FC<Props> = ({zenn}: Props): ReactElement => {
  const feed = JSON.parse(zenn)
  const articles: Array<ReactElement> = [];
  feed.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleLinkList key={`zenn_${i}`} title={f.title} url={f.link} />);
    }
  })

  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ZenArticles articles={articles} />
    </div>
  );
};
export default ArticlesPage;
