import React, { ReactElement } from 'react'
import Script from 'next/script'
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

const existsGaId = GA_ID !== ''

const ScriptElements: React.FC = (): ReactElement => {
  return (
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
  )
}
export default ScriptElements
