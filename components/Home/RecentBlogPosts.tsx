import { Card } from "../Card";
import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
}

interface RecentBlogPostsProps {
  posts: Post[];
  basePath?: string;
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function RecentBlogPosts({
  posts,
  basePath = "/articles",
}: RecentBlogPostsProps) {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <Card as="article" key={post.slug}>
          <Card.Title href={`${basePath}/${post.slug}`}>
            {post.frontmatter.title}
          </Card.Title>
          <Card.Eyebrow as="time" dateTime={post.frontmatter.date} decorate>
            {formatDate(post.frontmatter.date)}
          </Card.Eyebrow>
          <Card.Description>{post.frontmatter.excerpt}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card>
      ))}
    </div>
  );
}
