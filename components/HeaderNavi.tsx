import Link from 'next/link';
import React, { ReactElement } from 'react';

const HeaderNavi: React.FC = (): ReactElement => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/resume">
          <a>Resume</a>
        </Link>{' '}
      </nav>
    </header>
  );
};
export default HeaderNavi;
