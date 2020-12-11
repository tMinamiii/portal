import 'github-markdown-css';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Border from '../components/Border';

type Props = {
  content: string;
};

const MdArticle: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <Border element={(
      <div className="markdown-body">
        <ReactMarkdown className="markdown" plugins={[gfm]} source={content} />
      </div>
    )} />
  )
};
export default MdArticle;
