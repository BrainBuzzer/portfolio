import Head from "next/head";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
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

export default function Blog(props: Props) {
  return (
    <>
      <Head>
        <title>Transmissions // Aditya Giri</title>
        <meta name="description" content="Blog posts by Aditya Giri." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center mt-10 w-full max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-2 font-mono tracking-tighter self-start">
          ALL<span className="text-neon-cyan">.TRANSMISSIONS</span>
        </h1>
        <div className="h-1 w-20 bg-neon-cyan mb-12 shadow-[0_0_10px_#00f3ff] self-start"></div>
        
        <RecentBlogPosts posts={props.posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
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
