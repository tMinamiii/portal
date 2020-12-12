import React, { ReactElement } from 'react';
import ArticleLinkList from '../components/ArticleLinkList';
import Border from '../components/Border';

const ZenArticles: React.FC = (): ReactElement => {
  return (
    <Border
      element={
        <div>
          <div className="text-xl font-bold">Zen</div>
          <div className="list-mark">
            <ul>
              <ArticleLinkList
                title="Cookpadの検索システムに痺れたので語りたい"
                url="https://zenn.dev/tminamiii/articles/80118de1b400df16c3e3"
              />
              <ArticleLinkList
                title="OpenAPIのYAMLをVSCodeで分割管理する"
                url="https://zenn.dev/tminamiii/articles/97e9aab5d44af5"
              />
              <ArticleLinkList
                title="GistのMarkdownファイルをNext.jsで読み込んで表示する"
                url="https://zenn.dev/tminamiii/articles/e70589dbf19b9a"
              />
              <ArticleLinkList
                title="Gnome Terminalのフォントを変更する"
                url="https://zenn.dev/tminamiii/articles/b4302125c89fdc"
              />
              <ArticleLinkList
                title="S3のイベントをHookしてLambdaを実行する(Go言語)"
                url="https://zenn.dev/tminamiii/articles/b26a773cef9ff2"
              />
              <ArticleLinkList
                title="Next.js + tailwindcss + ReactMarkdownで経歴書作成"
                url="https://zenn.dev/tminamiii/articles/f3cec628f70109"
              />
            </ul>
          </div>
        </div>
      }
    />
  );
};
export default ZenArticles;
