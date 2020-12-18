import Link from 'next/link';
import React, { ReactElement } from 'react';

const HeaderNavi: React.FC = (): ReactElement => {
  return (
    <header>
      <nav className="text-center text-xl p-4">
        <Link href="/">
          <a className="underline">Resume</a>
        </Link>
        {' - '}
        <Link href="/profile">
          <a className="underline">Profile</a>
        </Link>
        {' - '}
        <Link href="/articles">
          <a className="underline">Articles</a>
        </Link>
        {' - '}
        <Link href="https://www.instagram.com/tminamiii/">
          <a className="underline">Photos</a>
        </Link>
      </nav>
    </header>
  );
};
export default HeaderNavi;
