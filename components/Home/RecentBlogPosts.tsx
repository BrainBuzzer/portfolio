import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
}

export default function RecentBlogPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col mt-8 p-8">
      <h1 className="text-xl font-bold">Latest Blog Posts</h1>
      {posts.map((post, index) => (
        <div key={index} className="flex flex-row gap-4 mt-8">
          <div className="flex flex-col">
            <h2 className="text-sm font-light">{post.frontmatter.date}</h2>
            <Link href={`/blog/${post.slug}`} className="text-3xl font-bold pt-2">
              {post.frontmatter.title}
            </Link>
            <h2 className="text-gray-900 dark:text-gray-300 text-lg pt-3">{post.frontmatter.excerpt}</h2>
            <h2 className="text-gray-900 dark:text-gray-300 text-lg pt-3">
              <Link href={`/blog/${post.slug}`} className="underline">
                Read more -&gt;
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
