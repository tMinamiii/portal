// import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

type Props = {
  content: string;
};

export async function getServerSideProps(): Promise<any> {
  const gistUrl =
    'https://gist.githubusercontent.com/tMinamiii/f1e93ca728eb66558f19fadb1a9e6feb/raw/100c53ec4ab12d27d860d8e9b7a9959b3ae96e4c/resume.md';
  const resp = await fetch(gistUrl);
  const text = await resp.text();
  console.log(text);
  return { props: { content: text } };
}

const IndexPage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        </nav>
      </header>
      <ReactMarkdown plugins={[[gfm, { singleTilde: false }]]}>{content}</ReactMarkdown>
      <footer>
        <hr />
        <span>tMinamiii</span>
      </footer>
    </div>
  );
};
export default IndexPage;
