import 'github-markdown-css';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

type Props = {
  content: string;
};

const MdArticle: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div className="grid sm:grid-cols-10 md:grid-cols-12">
      <div className="sm:col-span-1 md:col-span-2" />
      <div className="markdown-body rounded-lg border-solid border-2 sm:col-span-8 md:col-span-8 p-5">
        <ReactMarkdown plugins={[gfm]} source={content} />
      </div>
      <div className="sm:col-span-1 md:col-span-2" />
    </div>
  );
};
export default MdArticle;
