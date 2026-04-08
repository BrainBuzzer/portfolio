import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { JetBrains_Mono, Newsreader } from "@next/font/google";
import localFont from "@next/font/local";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

const geistSans = localFont({
  src: "../public/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistPixel = localFont({
  src: "../public/fonts/geist-pixel/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${newsreader.variable} ${geistSans.variable} ${geistPixel.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
