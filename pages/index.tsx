import Image from 'next/image';
import React, { ReactElement } from 'react';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';

const IndexPage: React.FC = (): ReactElement => {
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <div className="w-32 h-32 mx-auto m-8">
        <Image className="rounded-3xl" src="/images/profile.jpg" width={150} height={150} />
      </div>
      <div className="flex justify-center">
        <div className="m-2">
          <a href="https://github.com/tMinamiii">
            <Image src="/images/github.png" width={36} height={36} />
          </a>
        </div>
        <div className="m-2">
          <a href="https://twitter.com/tMinamiii">
            <Image src="/images/twitter.png" width={36} height={36} />
          </a>
        </div>
        <div className="m-2">
          <a href="https://zenn.dev/tminamiii">
            <Image src="/images/zenn.png" width={36} height={36} />
          </a>
        </div>
        <div className="m-2">
          <a href="https://qiita.com/tMinami">
            <Image src="/images/qiita.png" width={36} height={36} />
          </a>
        </div>
        <div className="m-2">
          <a href="https://www.instagram.com/tminamiii/">
            <Image src="/images/instagram.png" width={36} height={36} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
