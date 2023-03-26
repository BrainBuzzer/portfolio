import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface Props {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
  content: string;
}

// The page for each post
export default function Post({ frontmatter, content }: Props) {
  const { title, date, excerpt } = frontmatter;

  return (
    <main className="mt-8">
      <Head>
        <title>{title} - Aditya Giri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={excerpt} />
        <meta name="title" content={title} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Aditya Giri" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/onedark.min.css"
        ></link>
      </Head>
      <div className="text-center text-gray-400 dark:text-gray-100">{date}</div>
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100 pt-4">{title}</h1>
      <ReactMarkdown
        className="prose prose-stone md:prose-md lg:prose-lg mx-auto mt-8 dark:prose-invert dark:prose-pre:bg-neutral-900 prose-pre:bg-zinc-900"
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
