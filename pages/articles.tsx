import Head from 'next/head';
import React, { ReactElement } from 'react';
import HeaderNavi from '../components/HeaderNavi';

const ArticlesPage: React.FC = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderNavi />
      Nothing..
    </div>
  );
};
export default ArticlesPage;
