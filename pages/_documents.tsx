import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

type Props = any;

class Document extends NextDocument<Props> {
  render(): ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
