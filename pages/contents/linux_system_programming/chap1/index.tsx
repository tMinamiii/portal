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
  const content = fs.readFileSync('pages/contents/linux_system_programming/chap1/doc.md').toString();
  return { props: { content: content } };
}

function Image(props: any) {
  return <img {...props} />;
}

const ProfilePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Linuxシステムプログラミング" />
      <HeaderNavi />
      <MdArticle content={content} renderers={{ image: Image }} />
    </div>
  );
};

export default ProfilePage;
