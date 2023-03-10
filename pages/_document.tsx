import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <body className="transition duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
