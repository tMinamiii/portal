import React, { ReactElement } from 'react';
import HeaderElements from '../components/HeaderElements';
import HeaderNavi from '../components/HeaderNavi';
import MdArticle from '../components/MdArticle';

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
      <MdArticle content={content} />
    </div>
  );
};
export default ResumePage;
