import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import useDarkMode from "../utils/useDarkMode";

export default function App({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className={`container mx-auto dark:text-white`}>
        <div className="md:grid md:grid-flow-col-dense md:grid-cols-4 md:auto-cols-max mt-12">
          <SideBar />

          <main className="md:col-span-3 md:pl-10">
            <Navbar />
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  );
}
