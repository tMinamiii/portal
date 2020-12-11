import React, { ReactElement } from 'react';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
const ArticlesPage: React.FC = (): ReactElement => {
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <div className="grid sm:grid-cols-10 md:grid-cols-12">
        <div className="sm:col-span-1 md:col-span-1" />
        <div className="markdown-body rounded-lg border-solid border-2 sm:col-span-8 md:col-span-10 p-10">
          Nothing..
        </div>
        <div className="sm:col-span-1 md:col-span-1" />
      </div>
    </div>
  );
};
export default ArticlesPage;
