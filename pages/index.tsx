import 'github-markdown-css';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';

const gistResumeUrl = 'https://gist.githubusercontent.com/tMinamiii/f1e93ca728eb66558f19fadb1a9e6feb/raw/resume.md';
type Props = {
  content: string;
};

// export async function getStaticProps(): Promise<any> {
//   const resp = await fetch(gistResumeUrl);
//   const text = await resp.text();
//   return { props: { content: text } };
// }
// https://git.io/JfUZE
export async function getServerSideProps(): Promise<any> {
  const resp = await fetch(gistResumeUrl);
  const text = await resp.text();
  return { props: { content: text } };
}

// function Image(props: any) {
//   return <img {...props} style={{ maxWidth: '1000px' }} />;
// }
// function Text(props: any) {
//   return <p {...props} style={{ maxWidth: '1000px', margin: '2px', display: 'inline-block' }} />;
// }
// renderers={{ image: Image, text: Text }}

const ResumePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Resume" />
      <HeaderNavi />
      <div className="grid grid-cols-9">
        <div className="col-span-2" />
        <div className="markdown-body col-span-5 m-10">
          <ReactMarkdown plugins={[gfm]} source={content} />
        </div>
        <div className="col-span-2" />
      </div>
    </div>
  );
};
export default ResumePage;
