import Head from "next/head";
import RecentBlogPosts from "../components/Home/RecentBlogPosts";
import NeonCard from "../components/ui/NeonCard";
import Typewriter from "../components/ui/Typewriter";
import { cn } from "../utils/cn";
import fs from "fs";
import matter from "gray-matter";

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
    };
  }[];
}

const techStack = [
    "Next.js", "React", "TypeScript", "TailwindRef", "Node.js", "Go", "Rust", "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL"
];

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Aditya Giri // Orbital Terminal</title>
        <meta
          name="description"
          content="Aditya Giri - Developer & Polyglot Engineer."
        />
      </Head>

      <div className="flex flex-col items-center justify-center w-full relative min-h-[80vh]">
        
        <div className="flex flex-col items-center justify-center z-10 w-full pt-20 pb-20">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-widest">
                SYSTEM_READY
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-center tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              ADITYA GIRI
            </h1>
            
            <div className="text-lg md:text-2xl font-mono text-neon-purple mt-2 mb-8 h-8">
                <span className="text-zinc-500 mr-2">&gt;</span>
                <Typewriter text="Developer_ " delay={100} />
            </div>

            <p className="mt-4 font-normal text-base text-zinc-400 max-w-lg text-center mx-auto leading-relaxed">
              Constructing digital infrastructure for the next frontier. 
              Polyglot engineer passionate about systems, startups, and stellar interfaces.
              Currently deploying code at <span className="text-zinc-200 font-bold">Classcard</span>.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-12">
                {techStack.map((tech) => (
                    <div key={tech} className="px-3 py-2 rounded border border-zinc-800 bg-space-900/50 text-xs text-zinc-400 font-mono text-center hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors cursor-crosshair">
                        {tech}
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 mt-12 mb-20">
           <div className="flex items-center mb-8">
               <div className="h-px bg-zinc-800 flex-grow"></div>
               <span className="px-4 font-mono text-zinc-500 text-sm">TRANSMISSIONS</span>
               <div className="h-px bg-zinc-800 flex-grow"></div>
           </div>
           
           <RecentBlogPosts posts={props.posts} />
        </div>
      </div>
    </>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName, index) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  return {
    props: {
      posts,
    },
  };
}
