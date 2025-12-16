import Head from "next/head";
import Image from "next/image";
import React from "react";
import NeonCard from "../components/ui/NeonCard";
import WakaTimeChart from "../components/ui/WakaTimeChart";

export default function About() {
  return (
    <>
      <Head>
        <title>Mission Profile // Aditya Giri</title>
        <meta name="description" content="About Aditya Giri - Engineer." />
      </Head>
      <div className="max-w-4xl mx-auto text-zinc-300">
        <h1 className="text-4xl font-bold text-white mb-2 font-mono tracking-tighter">
          MISSION<span className="text-neon-cyan">.PROFILE</span>
        </h1>
        <div className="h-1 w-20 bg-neon-cyan mb-10 shadow-[0_0_10px_#00f3ff]"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                        src="/profile-pic.png"
                        alt="Aditya Giri"
                        width={400}
                        height={400}
                        className="relative rounded-full w-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
            </div>
            <div className="md:col-span-2">
                <NeonCard className="h-full">
                    <p className="font-mono text-neon-cyan mb-4 text-xs">/IDENTITY/BIO</p>
                    <p className="mb-4">
                        I am a software engineer with a deep passion for building scalable systems and intuitive interfaces. My journey began with a curiosity for how things work, leading me to explore everything from full-stack web development to low-level systems programming.
                    </p>
                    <p>
                        Currently, I engineer backend solutions at <strong className="text-white">Classcard</strong>, ensuring reliability and performance for users worldwide.
                    </p>
                </NeonCard>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
            <span className="text-neon-purple mr-2">&gt;</span> LOGS.EXPERIENCE
        </h2>

        <div className="space-y-6 md:border-l border-zinc-800 md:pl-8 relative">
            
            {[
                { title: "Co-Founder", company: "Terrafloww", date: "2025 - Present", desc: "Building Terrafloww." },
                { title: "Technical Consultant", company: "Edgescale", date: "Jun 2023 - Present", desc: "Built scalable systems handling 100,000+ requests per minute." },
                { title: "Software Engineer", company: "Classcard", date: "Dec 2022 - Jun 2023", desc: "Building backend systems with Laravel." },
                { title: "Founder", company: "Hyperlog", date: "March 2018 - 2022", desc: "Built a developer intelligence platform." },
                { title: "Consultant", company: "Kawa Space", date: "Dec 2020 - Dec 2021", desc: "Frontend and Backend engineering for space data." }
            ].map((job, i) => (
                <div key={i} className="relative">
                    <div className="hidden md:block absolute -left-[37px] top-6 w-4 h-4 rounded-full bg-space-950 border-2 border-neon-cyan shadow-[0_0_10px_#00f3ff]"></div>
                    <NeonCard glowColor="cyan" className="relative">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                             <h3 className="text-xl font-bold text-white">{job.title}</h3>
                             <span className="font-mono text-xs text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded border border-neon-cyan/20">{job.date}</span>
                        </div>
                        <p className="text-zinc-400 font-mono text-sm mb-2 text-neon-purple">@{job.company}</p>
                        <p className="text-sm">{job.desc}</p>
                    </NeonCard>
                </div>
            ))}
        </div>
        
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
                <span className="text-neon-green mr-2">&gt;</span> METRICS.ACTIVITY
            </h2>
            <NeonCard className="p-0 overflow-hidden bg-white/5">
                <WakaTimeChart />
            </NeonCard>
        </div>
      </div>
    </>
  );
}
