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

function normalizeFrontmatter(data: unknown): PostFrontmatter {
  const frontmatterData = data && typeof data === "object" ? data : {};
  const { title, date, excerpt, author, category } = frontmatterData as Partial<Record<keyof PostFrontmatter, unknown>>;

  return {
    title: (title as string) || "Untitled",
    date: (date as string) || new Date().toISOString().split("T")[0],
    excerpt: (excerpt as string) || "",
    author: author as string | undefined,
    category: category as string | undefined,
  };
}

export function getAllPosts(): PostSummary[] {
  let fileNames: string[] = [];

  try {
    fileNames = fs.readdirSync("posts");
  } catch (error) {
    console.warn("[posts] Failed to read posts directory.", error);
    return [];
  }

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      try {
        const slug = fileName.replace(".md", "");
        const source = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const { data } = matter(source);

        return {
          slug,
          frontmatter: normalizeFrontmatter(data),
        };
      } catch (error) {
        console.warn(`[posts] Skipping malformed post file: ${fileName}`, error);
        return null;
      }
    })
    .filter((post): post is PostSummary => post !== null)
    .sort((a, b) => (new Date(b.frontmatter.date).getTime() || 0) - (new Date(a.frontmatter.date).getTime() || 0));
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): PostDetail {
  try {
    const source = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const { data, content } = matter(source);

    return {
      frontmatter: normalizeFrontmatter(data),
      content: typeof content === "string" ? content : "",
    };
  } catch (error) {
    throw new Error(`Failed to load post "${slug}": ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}
