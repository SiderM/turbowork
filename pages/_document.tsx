import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

class _Document extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(
      ctx
    );
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
