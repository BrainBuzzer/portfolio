import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "../utils/cn";

const navItems = [
  { name: "[ HOME ]", path: "/" },
  { name: "[ ABOUT ]", path: "/about" },
  { name: "[ BLOG ]", path: "/blog" },
  { name: "[ NOW ]", path: "/now" },
  { name: "[ CONTACT ]", path: "/contact" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex justify-between items-center bg-space-950/80 backdrop-blur-md border border-neon-cyan/30 rounded-full px-6 py-3 pointer-events-auto shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <Link href="/" className="font-bold text-xl tracking-tighter hover:text-neon-cyan transition-colors font-mono">
                    ADITYA<span className="text-neon-cyan">.GIRI</span>
                </Link>

                <div className="hidden md:flex space-x-1">
                    {navItems.map((item) => {
                        const isActive = router.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "px-4 py-2 text-sm font-mono transition-all duration-200 rounded-md hover:bg-neon-cyan/10 hover:text-neon-cyan",
                                    isActive ? "text-neon-cyan bg-neon-cyan/5 shadow-[0_0_10px_rgba(0,243,255,0.2)]" : "text-zinc-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    </nav>
  );
}
