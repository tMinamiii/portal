import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link href="/resume">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://i.gyazo.com/26f787388ec1c0b2fa23720a63859abe.jpg"
          alt="Image from Gyazo"
          width="150"
        />
      </Link>
      <div className="item-center">
        <div className="flex justify-center">
          <div className="p-2">
            <a href="https://github.com/tMinamiii">
              <Image src="/github.png" width={36} height={36} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://twitter.com/tMinamiii">
              <Image src="/twitter.png" width={36} height={36} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://zenn.dev/tminamiii">
              <Image src="/zenn.png" width={36} height={36} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://qiita.com/">
              <Image src="/qiita.png" width={36} height={36} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
