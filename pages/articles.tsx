import Head from "next/head";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
import SimpleLayout from "../components/SimpleLayout";
import { getAllPosts, type PostSummary } from "../utils/posts";

interface ArticlesProps {
  posts: PostSummary[];
}

export default function Articles({ posts }: ArticlesProps) {
  return (
    <>
      <Head>
        <title>Articles - Aditya Giri</title>
        <meta name="description" content="Writing by Aditya Giri." />
      </Head>

      <SimpleLayout
        title="Writing on engineering, systems, and the things I’m figuring out in public."
        intro="This is the full archive of the writing already on the site, moved into the Spotlight structure without changing the underlying posts."
      >
        <RecentBlogPosts posts={posts} basePath="/articles" />
      </SimpleLayout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
