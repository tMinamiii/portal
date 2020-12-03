import Head from 'next/head';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import HeaderNavi from '../components/HeaderNavi';

const gistResumeUrl = 'https://gist.githubusercontent.com/tMinamiii/f1e93ca728eb66558f19fadb1a9e6feb/raw/resume.md';
type Props = {
  content: string;
};

export async function getServerSideProps(): Promise<any> {
  const resp = await fetch(gistResumeUrl);
  const text = await resp.text();
  return { props: { content: text } };
}

const ResumePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderNavi />
      <ReactMarkdown plugins={[[gfm]]}>{content}</ReactMarkdown>
    </div>
  );
};
export default ResumePage;
