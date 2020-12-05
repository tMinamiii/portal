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

export async function getServerSideProps(): Promise<any> {
  const resp = await fetch(gistResumeUrl);
  const text = await resp.text();
  return { props: { content: text } };
}

function Image(props: any) {
  return <img {...props} style={{ maxWidth: '1200px' }} />;
}
function Text(props: any) {
  return <div {...props} style={{ maxWidth: '100%' }} />;
}

const ResumePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Resume" />
      <HeaderNavi />
      <div className="md:container md:mx-auto m-auto max-width: 100px">
        <div className="markdown-body">
          <ReactMarkdown plugins={[gfm]} source={content} renderers={{ image: Image, text: Text }} />
        </div>
      </div>
    </div>
  );
};
export default ResumePage;
