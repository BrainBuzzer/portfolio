import Head from "next/head";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import fs from "fs";
import matter from "gray-matter";

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
    };
  }[];
}

export default function Home(props: Props) {
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

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold pt-8">Hi, I&apos;m Aditya Giri</h1>
        <h2 className="text-gray-900 dark:text-gray-200 text-center text-lg pt-6">
          I&apos;m a programmer, polyglot, and YouTuber who builds tons of side projects and is very passionate about
          startups and engineering.
        </h2>
        <h2 className="text-gray-900 dark:text-gray-200 text-center text-lg pt-6">
          I&apos;m currently working as a Backend Engineer at Classcard.
        </h2>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 w-full"></div>

        <RecentBlogPosts posts={props.posts} />
      </div>
    </>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName, index) => {
    if (index > 2) return;
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
