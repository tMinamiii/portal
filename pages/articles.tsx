import Head from 'next/head';
import React, { ReactElement } from 'react';
import HeaderNavi from '../components/HeaderNavi';

const ArticlesPage: React.FC = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <HeaderNavi />
      Nothing..
    </div>
  );
};
export default ArticlesPage;
