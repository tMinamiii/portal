import Link from 'next/link';
import React, { ReactElement } from 'react';

type Props = {
  site: string;
  url: string;
  title: string;
};

const ArticleLink: React.FC<Props> = ({ site, url, title }: Props): ReactElement => {
  const linkTitle = site ? '[{site}]' + title : title;
  return (
    <li>
      <Link href={url}>
        <a>{linkTitle}</a>
      </Link>
    </li>
  );
};
export default MdArticle;
