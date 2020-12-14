import React, { ReactElement } from 'react';
import Border from '../components/Border';

type Props = {
  articles: Array<ReactElement>;
};

const ZenArticles: React.FC<Props> = ({articles}: Props): ReactElement => {
  return (
    <Border
      element={
        <div>
          <div className="text-xl font-bold">Zen</div>
          <div className="list-mark">
            <ul>{articles}</ul>
          </div>
        </div>
      }
    />
  );
};
export default ZenArticles;
