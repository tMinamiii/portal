import fs from 'fs';
import React, { ReactElement } from 'react';
import HeaderElements from '../../../../components/HeaderElements';
import HeaderNavi from '../../../../components/HeaderNavi';
import MdArticle from '../../../../components/MdArticle';

type Props = {
  title: string;
  content: string;
};

export async function getStaticProps(): Promise<any> {
  const content = fs.readFileSync('pages/articles/2020/AboutIdealTeam/doc.md').toString();
  return { props: { content: content } };
}

const title = '理想のチームについて';
// const link = '/pages/articles/2020/AboutIdealTeam';

const AboutIdealTeam: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title={title} />
      <HeaderNavi />
      <MdArticle content={content} />
    </div>
  );
};

export default AboutIdealTeam;
