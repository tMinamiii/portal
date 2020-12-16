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

export default class AboutIdealTeam {
  static title = '理想のチームについて';
  static link = '/pages/articles/2020/AboutIdealTeam';

  static Article: React.FC<Props> = ({ content }: Props): ReactElement => {
    return (
      <div>
        <HeaderElements title={AboutIdealTeam.title} />
        <HeaderNavi />
        <MdArticle content={content} />
      </div>
    );
  };
}
