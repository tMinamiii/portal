import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

type Props = any;
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const existsGaId = GA_ID !== '';
class Document extends NextDocument<Props> {
  render(): ReactElement {
    return (
      <Html>
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
