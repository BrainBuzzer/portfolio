import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faBullhorn, faScaleBalanced, faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../components/Card";
import SimpleLayout from "../components/SimpleLayout";
import { projectStubs, projectsIntro } from "../utils/siteData";

function ProjectIcon({ kind }: { kind: "mqtt" | "php" | "campaign" | "policy" }) {
  const wrapperClass = "relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 shadow-sm";

  if (kind === "mqtt") {
    return (
      <div
        className={`${wrapperClass} bg-cyan-100 text-cyan-700 ring-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:ring-cyan-500/25`}
      >
        <FontAwesomeIcon icon={faSatelliteDish as any} className="h-6 w-6" />
      </div>
    );
  }

  if (kind === "php") {
    return (
      <div
        className={`${wrapperClass} bg-indigo-100 text-indigo-700 ring-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:ring-indigo-500/25`}
      >
        <FontAwesomeIcon icon={faPhp as any} className="h-7 w-7" />
      </div>
    );
  }

  if (kind === "campaign") {
    return (
      <div
        className={`${wrapperClass} bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/25`}
      >
        <FontAwesomeIcon icon={faBullhorn as any} className="h-6 w-6" />
      </div>
    );
  }

  return (
    <div
      className={`${wrapperClass} bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/25`}
    >
      <FontAwesomeIcon icon={faScaleBalanced as any} className="h-6 w-6" />
    </div>
  );
}

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Aditya Giri</title>
        <meta name="description" content="Projects by Aditya Giri." />
      </Head>

      <SimpleLayout title="Projects, tools, and public work I’ve put out into the world." intro={projectsIntro}>
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projectStubs.map((project) => (
            <Card as="li" key={project.name}>
              <ProjectIcon kind={project.icon} />
              <Card.Eyebrow decorate className="mt-6">
                {project.tag}
              </Card.Eyebrow>
              <h2 className="mt-6 font-display text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                <Card.Link href={project.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex font-mono text-[0.72rem] tracking-[0.12em] text-zinc-400 transition group-hover:text-teal-600 dark:text-zinc-300 dark:group-hover:text-teal-400">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
