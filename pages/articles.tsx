import React, { ReactElement } from 'react';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import ZenArticles from '../components/ZenArticles';

const ArticlesPage: React.FC = (): ReactElement => {
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <ZenArticles />
    </div>
  );
};
export default ArticlesPage;
