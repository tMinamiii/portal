import Link from 'next/link';
import React, { ReactElement } from 'react';

const HeaderNavi: React.FC = (): ReactElement => {
  return (
    <header>
      <nav className="text-center text-2xl p-4">
        <Link href="/">
          <a className="underline">Home</a>
        </Link>
        {' / '}
        <Link href="/resume">
          <a className="underline">Resume</a>
        </Link>
        {' / '}
        <Link href="/articles">
          <a className="underline">Articles</a>
        </Link>{' '}
      </nav>
    </header>
  );
};
export default HeaderNavi;
