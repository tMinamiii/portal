import React, { ReactElement } from 'react';
import Border from '../components/Border';

type Props = {
  title: string;
  articles: Array<ReactElement>;
};

function fetchImage(title: string): JSX.Element | undefined {
  if (title.toLowerCase() === 'zenn')
    return (
      <img
        className="inline m-1"
        src="https://i.gyazo.com/a0d73905c8207d125df32badea0a00d3.png"
        alt="Image from Gyazo"
        width="16"
      />
    );
  else if (title.toLowerCase() === 'qiita') {
    return (
      <img
        className="inline m-1"
        src="https://i.gyazo.com/be1c68bdc36b3f2283ae5fa67f5f6bd5.png"
        alt="Image from Gyazo"
        width="16"
      />
    );
  }
  return;
}

const ArticlesArea: React.FC<Props> = ({ title, articles }: Props): ReactElement => {
  return (
    <Border
      element={
        <div>
          <div>
            {fetchImage(title)}
            <div className="text-xl font-bold inline">{title}</div>
          </div>
          <div className="my-articles list-mark">
            <ul>{articles}</ul>
          </div>
        </div>
      }
    />
  );
};
export default ArticlesArea;
