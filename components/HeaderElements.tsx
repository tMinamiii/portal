import Header from 'next/head'
import React, { ReactElement } from 'react'
import ScriptElements from './ScriptElements'

type Props = {
  title: string
}

const HeaderElements: React.FC<Props> = ({ title }: Props): ReactElement => {
  return (
    <Header>
      <title>{title}</title>
      <ScriptElements />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Header>
  )
}
export default HeaderElements
