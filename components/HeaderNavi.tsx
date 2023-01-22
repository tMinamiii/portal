import Link from 'next/link'
import React, { ReactElement } from 'react'

const HeaderNavi: React.FC = (): ReactElement => {
  return (
    <header>
      <nav className="text-center text-xl p-4">
        <Link className="underline" href="/">
          Resume
        </Link>
        {' - '}
        <Link className="underline" href="/profile">
          Profile
        </Link>
        {' - '}
        <Link className="underline" href="/articles">
          Articles
        </Link>
      </nav>
    </header>
  )
}
export default HeaderNavi
