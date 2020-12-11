import Link from 'next/link';
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
          <ul>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/80118de1b400df16c3e3">
                <a>[Zen]Cookpadの検索システムに痺れたので語りたい</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/97e9aab5d44af5">
                <a>[Zen]OpenAPIのYAMLをVSCodeで分割管理する</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/e70589dbf19b9a">
                <a>[Zen]GistのMarkdownファイルをNext.jsで読み込んで表示する</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/b4302125c89fdc">
                <a>[Zen]Gnome Terminalのフォントを変更する</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/b26a773cef9ff2">
                <a>[Zen]S3のイベントをHookしてLambdaを実行する(Go言語)</a>
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/tminamiii/articles/f3cec628f70109">
                <a>[Zen]Next.js + tailwindcss + ReactMarkdownで経歴書作成</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-1 md:col-span-1" />
      </div>
    </div>
  );
};
export default ArticlesPage;
