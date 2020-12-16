import React, { ReactElement } from 'react';
import Border from '../components/Border';

type Props = {
  title: string;
  articles: Array<ReactElement>;
};

function fetchImage(title: string): JSX.Element | undefined {
  const lowerTitle = title.toLowerCase();
  const icons = ['qiita', 'zenn', 'scrapbox'];
  if (icons.includes(lowerTitle)) {
    const imagePath = `/images/${lowerTitle}.png`;
    return <img className="inline-block align-middle" src={imagePath} width="24" height="24" />;
  }
  return;
}

const ArticlesArea: React.FC<Props> = ({ title, articles }: Props): ReactElement => {
  return (
    <Border
      element={
        <div>
          <p>
            <span className="mr-1">{fetchImage(title)}</span>
            <span className="text-xl font-bold inline-block align-middle">{title}</span>
          </p>
          <div className="my-articles list-mark">
            <ul>{articles}</ul>
          </div>
        </div>
      }
    />
  );
};
export default ArticlesArea;
