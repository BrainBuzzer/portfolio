import Head from "next/head";

interface ExperienceProps {
  company: string;
  position: string;
  date: string;
  shortDescription: string;
  description: string;
  longDescription: string[];
  techStack: string[];
}

const experience: ExperienceProps[] = [
  {
    company: "Angkas",
    position: "Senior Software Engineer",
    date: "Jun 2023 - Present",
    shortDescription: "Worked as software engineer at Angkas helping rewrite the backend systems.",
    description:
      "Worked as a software engineer at Angkas helping rewrite the backend systems. The systems handle about 100,000+ requests per minute. I was responsible for working on core trip management and matchmaking.",
    longDescription: [
      "Built scalable systems that handle 100,000+ requests per minute",
      "Architected and implemented core trip management and matchmaking",
      "Refactored the codebase to improve performance and maintainability",
      "Added telemetry and monitoring to the backend systems",
    ],
    techStack: ["Golang", "Kafka", "AlloyDB", "Redis", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    company: "Classcard",
    position: "Software Engineer",
    date: "Dec 2022 - Jun 2024",
    shortDescription: "Worked as a software engineer at Classcard helping build backend systems.",
    description:
      "Worked as a software engineer at Classcard helping build backend systems. I worked on the backend of the web application, which is built with Laravel. I also worked on the database, which is built with MySQL.",
    longDescription: [
      "Worked on the backend of the web application, which is built with Laravel",
      "Refined development and production workflows to improve the efficiency of the team",
      "Made web reports over 100x faster by optimizing the database queries and the backend",
    ],
    techStack: ["DigitalOcean", "Laravel"],
  },
  {
    company: "Hyperlog",
    position: "Founder",
    date: "March 2018 - Present",
    shortDescription: "Founded Hyperlog which helped companies hire students more effectively.",
    description:
      "Founded Hyperlog which helped companies hire engineering students. I worked on all aspects related to engineering, product, and marketing. Built bullet-proof algorithm that helped companies hire students more effectively.",
    longDescription: [
      "At Hyperlog, over the years, I have developed a behavioral developer intelligence platform that delves into code to extract data such as Code Maintainability, Readability, Complexity, and many more attributes that define the Codebase",
      "Conducted pilots with large enterprises and Fortune 500 companies, working end-to-end in the entire sales process",
      "Developed and deployed the required systems on-premise",
      "Marketed the product to the target audience and generated leads",
    ],
    techStack: ["AWS", "Ruby", "Rust", "PHP", "Python", "Kubernetes", "NodeJS", "PostgreSQL", "Clickhouse", "Airflow"],
  },
  {
    company: "Kawa Space",
    position: "Consultant",
    date: "Dec 2020 - Dec 2021",
    shortDescription: "Worked as a consultant for Kawa Space, a startup that is democratizing space data.",
    description:
      "Worked as a consultant for Kawa Space, a startup that is democratizing space data. I worked on the frontend of the web application, which is built with React. I also worked on the backend, which is built with Rails and Golang. I also worked on the database, which is built with PostgreSQL.",
    longDescription: [
      "Started with Frontend engineering and eventually shifted to the Backend and Data Engineering side",
      "Assisted the team in developing and deploying several ML models",
      "Worked with departments across the company, including marketing and project management, in developing new ideas, initiatives, products, and services.",
      "Worked on the SSO Authentication system for enterprises",
      "Improved CI/CD systems for seamless product delivery.",
    ],
    techStack: ["GCP", "Ruby on Rails", "Golang", "Python", "React", "Airflow", "Kubernetes", "PostgreSQL", "BigQuery"],
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Aditya Giri</title>
        <meta
          name="description"
          content="Portfolio for Aditya Giri. Programmer, Polyglot, and YouTuber who builds tons of side projects and is very passionate about startups and engineering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl mt-8 text-center font-bold">About</h1>
      <figure>
        <embed src="https://wakatime.com/share/@cbfef042-6778-4ec5-b8b3-d0bec476af37/65573729-452b-4545-9f28-f6711161e8a5.svg"></embed>
      </figure>
      <h2 className="text-2xl mt-4 text-center font-semibold">Experience</h2>
      <div className="flex flex-col items-center justify-center">
        {experience.map((exp, key) => (
          <div key={key} className="flex flex-col items-center justify-center w-3/4 mt-8">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <h4 className="text-lg dark:text-gray-300">{exp.position}</h4>
                <h5 className="text-md font-light text-gray-600 dark:text-gray-400">{exp.date}</h5>

                <p className="text-md mt-3 text-gray-700 dark:text-gray-200">tldr; {exp.description}</p>

                <div className="mt-3 text-gray-700 dark:text-gray-200">
                  <ul className="list-disc">
                    {exp.longDescription.map((desc, longKey) => (
                      <li key={longKey} className="text-lg">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <ul className="inline-flex gap-4 mt-2 text-gray-600 dark:text-gray-300">
                    {/* add , and show tech stack */}
                    {exp.techStack.map((tech, techKey) => (
                      <li key={techKey} className="text-md font-light">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
