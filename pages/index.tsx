import Head from "next/head";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Giri</title>
        <meta
          name="description"
          content="Portfolio for Aditya Giri. Programmer, Polyglot, and YouTuber who builds tons of side projects and is very passionate about startups and engineering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-flow-col-dense grid-cols-4 auto-cols-max mt-12">
          <SideBar />

          <main className="col-span-3 pl-10">
            <Navbar />
            <div className="flex flex-col items-center mt-10">
              <h1 className="text-4xl font-bold pt-8">Hi, I'm Aditya Giri</h1>
              <h2 className="text-gray-900 text-center text-lg pt-6">
                I'm a programmer, polyglot, and YouTuber who builds tons of side projects and is very passionate about
                startups and engineering.
              </h2>
              <h2 className="text-gray-900 text-center text-lg pt-6">
                I'm currently working as a Backend Engineer at Classcard.
              </h2>
              <div className="border-t border-gray-300 mt-8 w-full"></div>

              <RecentBlogPosts />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
