import React, { ReactElement } from 'react';
import Border from '../components/Border';
import ArticleList from './ArticleList';

type Props = {
  feed: string;
};

const media = 'Zenn';

const ZennArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedobj = JSON.parse(feed);
  const articles: Array<ReactElement> = [];
  feedobj.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleList key={`${media}_${i}`} title={f.title} url={f.link} />);
    }
  });
  return <Border media={media} articles={articles} />;
};
export default ZennArticles;
