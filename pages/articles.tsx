import Link from 'next/link';
import React, { ReactElement } from 'react';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import ArticleLinkList from '../components/ArticleLinkList';

const ArticlesPage: React.FC = (): ReactElement => {
  return (
    <div>
      <HeaderElements title="Articles" />
      <HeaderNavi />
      <div className="grid sm:grid-cols-10 md:grid-cols-12">
        <div className="sm:col-span-1 md:col-span-1" />
        <div className="rounded-lg border-solid border-2 sm:col-span-8 md:col-span-10 p-10">
          <ul>
            <ArticleLinkList
              site="Zen"
              title="Cookpadの検索システムに痺れたので語りたい"
              url="https://zenn.dev/tminamiii/articles/80118de1b400df16c3e3"
            />
            <ArticleLinkList
              site="Zen"
              title="OpenAPIのYAMLをVSCodeで分割管理する"
              url="https://zenn.dev/tminamiii/articles/97e9aab5d44af5"
            />
            <ArticleLinkList
              site="Zen"
              title="GistのMarkdownファイルをNext.jsで読み込んで表示する"
              url="https://zenn.dev/tminamiii/articles/e70589dbf19b9a"
            />
            <ArticleLinkList
              site="Zen"
              title="Gnome Terminalのフォントを変更する"
              url="https://zenn.dev/tminamiii/articles/b4302125c89fdc"
            />
            <ArticleLinkList
              site="Zen"
              title="S3のイベントをHookしてLambdaを実行する(Go言語)"
              url="https://zenn.dev/tminamiii/articles/b26a773cef9ff2"
            />
            <ArticleLinkList
              site="Zen"
              title="Next.js + tailwindcss + ReactMarkdownで経歴書作成"
              url="https://zenn.dev/tminamiii/articles/f3cec628f70109"
            />
          </ul>
        </div>
        <div className="sm:col-span-1 md:col-span-1" />
      </div>
    </div>
  );
};
export default ArticlesPage;
