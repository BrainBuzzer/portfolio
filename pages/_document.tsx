import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="alternate" type="application/rss+xml" title="Aditya Giri's Blog RSS Feed" href="/api/rss.xml" />
      </Head>
      <body className="transition duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
