import Head from "next/head";
import React from "react";
import NeonCard from "../components/ui/NeonCard";

export default function Now() {
  return (
    <>
      <Head>
        <title>Status Update // Aditya Giri</title>
        <meta name="description" content="What I'm doing now." />
      </Head>
      <div className="max-w-3xl mx-auto text-zinc-300">
        <h1 className="text-4xl font-bold text-white mb-2 font-mono tracking-tighter">
          STATUS<span className="text-neon-cyan">.NOW</span>
        </h1>
        <div className="h-1 w-20 bg-neon-cyan mb-10 shadow-[0_0_10px_#00f3ff]"></div>
        
        <NeonCard className="font-mono text-sm leading-relaxed mb-6" glowColor="cyan">
            <p className="mb-4">
                <span className="text-neon-purple">LOCATION:</span> Bangalore, India<br/>
                <span className="text-neon-green">STATUS:</span> Building & Scaling
            </p>
            <p>
                This is a <strong>now</strong> page. It serves as a public update of what I&apos;m currently focused on.
                Inspired by <a href="https://nownownow.com/about" className="text-neon-cyan hover:underline">Derek Sivers</a>.
            </p>
        </NeonCard>

        <div className="grid gap-6">
            <NeonCard glowColor="purple">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                    &gt; PROJECT: Terrafloww
                </h3>
                <p>
                    I am currently working heavily on the Terrafloww Marketplace, building out features for data ingestion, semantic search, and refining the overall user experience.
                </p>
            </NeonCard>

            <NeonCard glowColor="green">
                 <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                    &gt; MODULE: Content Creation
                </h3>
                <p>
                    Continuing to create content for YouTube. I&apos;m trying to be more consistent with my uploads and focus on high-quality engineering content.
                </p>
            </NeonCard>

             <NeonCard>
                 <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                    &gt; SKILL_ACQUISITION
                </h3>
                <p>
                     Diving deep into Rust and Agentic Workflows. I believe these are the future of software engineering and I want to be at the forefront of this wave.
                </p>
            </NeonCard>
        </div>
        
        <div className="mt-12 text-xs font-mono text-zinc-600 text-center">
            LAST_UPDATED: {new Date().toLocaleDateString()}
        </div>
      </div>
    </>
  );
}
