import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-flow-col-dense grid-cols-4 auto-cols-max mt-12">
        <SideBar />

        <main className="col-span-3 pl-10">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
