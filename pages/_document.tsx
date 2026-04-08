import { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (_) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="alternate" type="application/rss+xml" title="Aditya Giri's Blog RSS Feed" href="/api/rss.xml" />
      </Head>
      <body className="transition duration-300">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
