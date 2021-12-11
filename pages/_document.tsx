import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <title>Max Barsukov</title>
          <meta
            name="description"
            content="Max Barsukov's portfolio website"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet" />

          <link rel="manifest" href="/manifest.json"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="theme-color" content="#000000"/>

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icon-256x256.png" />
          <link rel="shortcut icon" href="/favicon.ico"/>
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
