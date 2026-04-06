import fs from "fs";
import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  category?: string;
}

export interface PostSummary {
  slug: string;
  frontmatter: PostFrontmatter;
}

export interface PostDetail {
  frontmatter: PostFrontmatter;
  content: string;
}

export function getAllPosts(): PostSummary[] {
  return fs
    .readdirSync("posts")
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const source = fs.readFileSync(`posts/${fileName}`, "utf-8");
      const { data } = matter(source);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): PostDetail {
  const source = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(source);

  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}
