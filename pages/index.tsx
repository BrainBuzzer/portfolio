import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/SocialIcons";
import { getAllPosts, type PostSummary } from "../utils/posts";
import { experience, focusItems, homeIntro, socialLinks } from "../utils/siteData";

interface HomeProps {
  posts: PostSummary[];
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group -m-1 p-1"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-600 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
      <span className="sr-only">{children}</span>
    </Link>
  );
}

function WorkSummary() {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="font-pixel text-[0.72rem] uppercase leading-none tracking-[0.04em] text-zinc-900 sm:text-[0.78rem] dark:text-zinc-100">
        Work
      </h2>
      <ol className="mt-6 space-y-4">
        {experience.map((role) => (
          <li key={`${role.company}-${role.title}`} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-zinc-200 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={`${role.company} logo`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dd className="font-mono text-[0.72rem] tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dd className="ml-auto font-mono text-[0.72rem] tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
                {role.date}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        href="/about"
        className="mt-6 inline-flex text-sm font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
      >
        Read more about my background
      </Link>
    </div>
  );
}

function NowSummary() {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="font-pixel text-[0.72rem] uppercase leading-none tracking-[0.04em] text-zinc-900 sm:text-[0.78rem] dark:text-zinc-100">
        Now
      </h2>
      <div className="mt-6 space-y-5">
        {focusItems.map((item) => (
          <div key={item.title}>
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Aditya Giri</title>
        <meta
          name="description"
          content="Aditya Giri is a software engineer focused on systems, startups, and product infrastructure."
        />
      </Head>

      <Container className="mt-16 sm:mt-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Software engineer, builder, and systems-minded operator.
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">{homeIntro}</p>
          <div className="mt-6 flex gap-6">
            {socialLinks.map((link) => {
              const icon =
                link.platform === "github"
                  ? GitHubIcon
                  : link.platform === "linkedin"
                  ? LinkedInIcon
                  : link.platform === "x"
                  ? XIcon
                  : MailIcon;

              return (
                <SocialLink key={link.href} href={link.href} icon={icon}>
                  {link.label}
                </SocialLink>
              );
            })}
          </div>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col gap-16">
            <section>
              <div className="mb-8">
                <h2 className="font-pixel text-[0.72rem] uppercase leading-none tracking-[0.04em] text-zinc-900 sm:text-[0.78rem] dark:text-zinc-100">
                  Writing
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Notes on engineering, systems, and the things I&apos;m learning along the way.
                </p>
              </div>
              <RecentBlogPosts posts={posts.slice(0, 4)} basePath="/articles" />
            </section>

            <Card>
              <Card.Title href="/articles">Browse all articles</Card.Title>
              <Card.Description>
                The existing blog archive is preserved and now sits under the new Spotlight-style articles section.
              </Card.Description>
              <Card.Cta>See all writing</Card.Cta>
            </Card>
          </div>

          <div className="space-y-8 lg:pl-4">
            <WorkSummary />
            <NowSummary />
          </div>
        </div>
      </Container>
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
