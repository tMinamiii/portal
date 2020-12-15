import React, { ReactElement } from 'react';
import Border from '../components/Border';

type Props = {
  title: string
  articles: Array<ReactElement>;
};

const ArticlesArea: React.FC<Props> = ({title, articles}: Props): ReactElement => {
  return (
    <Border
      element={
        <div>
          <div className="text-xl font-bold">{title}</div>
          <div className="list-mark">
            <ul>{articles}</ul>
          </div>
        </div>
      }
    />
  );
};
export default ArticlesArea;
