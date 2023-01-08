import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-flow-col-dense md:grid-cols-4 md:auto-cols-max mt-12">
        <SideBar />

        <main className="md:col-span-3 md:pl-10">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
