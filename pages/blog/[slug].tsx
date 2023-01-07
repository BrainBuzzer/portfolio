import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

interface Props {
  frontmatter: {
    title: string;
    date: string;
  };
  content: string;
}

// The page for each post
export default function Post({ frontmatter, content }: Props) {
  const { title, date } = frontmatter;

  return (
    <main className="mt-8">
      <div className="text-center text-gray-400">{date}</div>
      <h1 className="text-center text-4xl font-bold text-gray-900 pt-4">{title}</h1>
      <div
        className="prose prose-stone md:prose-md lg:prose-lg mx-auto mt-8"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
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
