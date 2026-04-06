import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Container } from "../../components/Container";
import { getPostBySlug, getPostSlugs, type PostDetail } from "../../utils/posts";

interface ArticlePageProps extends PostDetail {}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticlePage({
  frontmatter,
  content,
}: ArticlePageProps) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Aditya Giri</title>
        <meta name="description" content={frontmatter.excerpt} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/onedark.min.css"
        />
      </Head>

      <Container className="mt-16 sm:mt-24">
        <article className="mx-auto max-w-3xl">
          <header className="max-w-2xl">
            <time className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatDate(frontmatter.date)}
            </time>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {frontmatter.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {frontmatter.excerpt}
            </p>
          </header>

          <ReactMarkdown
            className="prose mt-16 max-w-none prose-pre:overflow-x-auto prose-pre:rounded-2xl prose-pre:bg-zinc-900 prose-pre:p-4 prose-img:rounded-2xl"
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </Container>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: {
  params: { slug: string };
}) {
  return {
    props: getPostBySlug(params.slug),
  };
}
