import Header from 'next/head'
import React, { ReactElement } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

const existsGaId = GA_ID !== ''

type Props = {
  title: string
}

const HeaderElements: React.FC<Props> = ({ title }: Props): ReactElement => {
  return (
    <Header>
      <title>{title}</title>
      <Script id="portal_script">
        {/* Google Analytics */}
        {existsGaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
                });`,
              }}
            />
          </>
        )}
      </Script>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Header>
  )
}

export default HeaderElements
