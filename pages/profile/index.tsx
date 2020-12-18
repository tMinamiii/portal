import fs from 'fs';
import React, { ReactElement } from 'react';
import HeaderElements from '../../components/HeaderElements';
import HeaderNavi from '../../components/HeaderNavi';
import MdArticle from '../../components/MdArticle';

type Props = {
  title: string;
  content: string;
};

export async function getStaticProps(): Promise<any> {
  const content = fs.readFileSync('pages/profile/doc.md').toString();
  return { props: { content: content } };
}

const ProfilePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Profile" />
      <HeaderNavi />
      <MdArticle content={content} />
    </div>
  );
};

export default ProfilePage;
