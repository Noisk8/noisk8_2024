import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Otros metadatos */}
          <meta name="viewport" content="initial-scale=1, width=device-width, theme-color=#yourColorHere" />
          {/* Asegúrate de eliminar la etiqueta meta theme-color si existe */}
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