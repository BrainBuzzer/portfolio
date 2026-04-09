import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/Container";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/SocialIcons";
import { aboutHeadline, aboutParagraphs, socialLinks } from "../utils/siteData";
import { cn } from "../utils/cn";

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
  className,
  href,
  icon: Icon,
  children,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <li className={cn("flex", className)}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-400"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-600 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Aditya Giri</title>
        <meta name="description" content="About Aditya Giri." />
      </Head>

      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="group max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/profile-pic.png"
                alt="Aditya Giri"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-0 group-hover:scale-[1.02] dark:bg-zinc-800"
                priority
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {aboutHeadline}
            </h1>
            <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {socialLinks.map((link, index) => {
                const icon =
                  link.platform === "github"
                    ? GitHubIcon
                    : link.platform === "linkedin"
                      ? LinkedInIcon
                      : link.platform === "x"
                        ? XIcon
                        : MailIcon;

                return (
                  <SocialLink
                    key={link.href}
                    href={link.href}
                    icon={icon}
                    className={
                      index === socialLinks.length - 1
                        ? "mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-700/40"
                        : index > 0
                          ? "mt-4"
                          : undefined
                    }
                  >
                    {link.label}
                  </SocialLink>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
