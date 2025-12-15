import StarField from "./ui/StarField";
import Navbar from "./navbar";
import Head from "next/head";
import { cn } from "../utils/cn";

interface LayoutProps {
  children: React.ReactNode;
  className?: string; // Allow passing classNames to the main container
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col relative overflow-hidden bg-space-950 text-zinc-100 selection:bg-neon-cyan selection:text-space-950", className)}>
      <Head>
        <title>Aditya Giri // Orbital Terminal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarField />
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 z-10 relative">
        {children}
      </main>
      <footer className="w-full py-6 text-center text-zinc-500 text-sm z-10 font-mono">
        <span className="text-neon-cyan">SYSTEM.STATUS:</span> ONLINE // © {new Date().getFullYear()} Aditya Giri
      </footer>
    </div>
  );
}
