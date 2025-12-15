import Head from "next/head";
import React from "react";
import NeonCard from "../components/ui/NeonCard";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Comms Uplink // Aditya Giri</title>
        <meta name="description" content="Contact Aditya Giri." />
      </Head>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 text-zinc-300">
        
        <div className="md:w-1/2">
             <h1 className="text-4xl font-bold text-white mb-2 font-mono tracking-tighter">
              COMMS<span className="text-neon-cyan">.UPLINK</span>
            </h1>
            <div className="h-1 w-20 bg-neon-cyan mb-8 shadow-[0_0_10px_#00f3ff]"></div>
            
            <p className="text-lg mb-8 leading-relaxed">
                Open to transmissions regarding: <br/>
                <span className="text-neon-green font-mono">&gt; Collaboration</span><br/>
                <span className="text-neon-cyan font-mono">&gt; Freelance Ops</span><br/>
                <span className="text-neon-purple font-mono">&gt; Tech Discussions</span>
            </p>

            <div className="space-y-4">
                 <NeonCard className="flex items-center space-x-4 cursor-pointer hover:bg-space-900 group" glowColor="cyan">
                    <div className="w-10 h-10 rounded bg-space-950 flex items-center justify-center border border-zinc-800 text-neon-cyan group-hover:border-neon-cyan transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono">EMAIL_PROTOCOL</p>
                        <p className="text-white group-hover:text-neon-cyan transition-colors">aditya@example.com</p>
                    </div>
                 </NeonCard>

                 <NeonCard className="flex items-center space-x-4 cursor-pointer hover:bg-space-900 group" glowColor="purple">
                     <div className="w-10 h-10 rounded bg-space-950 flex items-center justify-center border border-zinc-800 text-neon-purple group-hover:border-neon-purple transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono">CODE_REPOSITORY</p>
                        <a href="https://github.com/BrainBuzzer" target="_blank" rel="noreferrer" className="text-white group-hover:text-neon-purple transition-colors">github.com/BrainBuzzer</a>
                    </div>
                 </NeonCard>
                 
                 <NeonCard className="flex items-center space-x-4 cursor-pointer hover:bg-space-900 group" glowColor="green">
                     <div className="w-10 h-10 rounded bg-space-950 flex items-center justify-center border border-zinc-800 text-neon-green group-hover:border-neon-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono">SHORT_MESSAGE_SVC</p>
                        <a href="https://x.com/BrainBuzzerMe" target="_blank" rel="noreferrer" className="text-white group-hover:text-neon-green transition-colors">x.com/BrainBuzzerMe</a>
                    </div>
                 </NeonCard>
            </div>
        </div>

        <div className="md:w-1/2">
             <NeonCard className="h-full">
                <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-zinc-800 pb-2">
                    SEND_TRANSMISSION
                </h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-xs font-mono text-neon-cyan mb-2">IDENTIFIER</label>
                        <input type="text" id="name" className="w-full bg-space-950 border border-zinc-800 rounded p-3 text-zinc-100 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-mono" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-mono text-neon-cyan mb-2">RETURN_PATH</label>
                        <input type="email" id="email" className="w-full bg-space-950 border border-zinc-800 rounded p-3 text-zinc-100 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-mono" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xs font-mono text-neon-cyan mb-2">PAYLOAD</label>
                        <textarea id="message" rows={5} className="w-full bg-space-950 border border-zinc-800 rounded p-3 text-zinc-100 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-mono" placeholder="Message content..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-bold font-mono py-3 rounded hover:bg-neon-cyan hover:text-space-950 transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                        INITIATE_UPLINK
                    </button>
                </form>
             </NeonCard>
        </div>

      </div>
    </>
  );
}
