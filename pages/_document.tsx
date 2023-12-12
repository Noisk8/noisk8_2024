// pages/_document.js o pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <meta name="viewport " content="initial-scale=1, width=device-width" />
          <meta name="ligthr" content="#333333" media="(prefers-color-scheme: light)" />
          <meta name="dark" content="#000000" media="(prefers-color-scheme: dark)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;