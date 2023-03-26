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
        <title>Blog - Aditya Giri</title>
        <meta
          name="description"
          content="Portfolio for Aditya Giri. Programmer, Polyglot, and YouTuber who builds tons of side projects and is very passionate about startups and engineering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center mt-10">
        <RecentBlogPosts posts={props.posts} />
      </div>
    </>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  return {
    props: {
      posts,
    },
  };
}
