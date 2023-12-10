import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Otros metadatos */}
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="theme-color" content="#333333" media="(prefers-color-scheme: dark)" />
          {/* Asegúrate de eliminar cualquier etiqueta meta theme-color duplicada */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument