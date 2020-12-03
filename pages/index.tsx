import Head from 'next/head';
import React, { ReactElement } from 'react';
import HeaderNavi from '../components/HeaderNavi';

const IndexPage: React.FC = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderNavi />
      <div>
        <a href="https://gyazo.com/26f787388ec1c0b2fa23720a63859abe">
          <img src="https://i.gyazo.com/26f787388ec1c0b2fa23720a63859abe.jpg" alt="Image from Gyazo" width="150" />
        </a>
        <ul>
          <li>名前: 南 貴博</li>
          <li>
            GitHub: <a href="https://github.com/tMinamiii">tMinamiii</a>
          </li>
          <li>
            Twitter: <a href="https://twitter.com/tMinamiii">@tMinamiii</a>
          </li>
          <li>
            Zenn: <a href="https://zenn.dev/tminamiii">tMinamiii</a>
          </li>
          <li>
            Qiita: <a href="https://qiita.com/">tMinamiii</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default IndexPage;
