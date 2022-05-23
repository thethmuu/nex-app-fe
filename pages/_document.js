import Document, { Html, Head, Main, NextScript, Meta } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/icon.svg"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Bungee+Inline"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
            integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <div className="bg-div">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
