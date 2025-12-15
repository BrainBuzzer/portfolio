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
    <div className="flex flex-col w-full">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col mt-8 first:mt-0 p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <span className="text-xs font-mono text-zinc-500 mb-2">{post.frontmatter.date}</span>
            <Link href={`/blog/${post.slug}`} className="text-2xl font-bold text-zinc-100 hover:text-white mb-3">
              {post.frontmatter.title}
            </Link>
            <p className="text-zinc-400 text-base mb-4 line-clamp-3">{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-zinc-300 hover:text-white inline-flex items-center">
                Read more <span className="ml-1">→</span>
            </Link>
        </div>
      ))}
    </div>
  );
}
