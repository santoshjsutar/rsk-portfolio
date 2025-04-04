import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Adobe Fonts embed code */}
        <link rel="stylesheet" href="https://use.typekit.net/nff6kly.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;