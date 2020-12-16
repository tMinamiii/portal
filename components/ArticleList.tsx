import Link from 'next/link';
import React, { ReactElement } from 'react';

type Props = {
  url: string;
  title: string;
};

const ArticleList: React.FC<Props> = ({ url, title }: Props): ReactElement => {
  return (
    <li>
      <Link href={url}>
        <a className="underline">{title}</a>
      </Link>
    </li>
  );
};
export default ArticleList;
