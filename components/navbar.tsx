import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "../utils/cn";
import { Container } from "./Container";
import ThemeSwitcher from "./themeSwitchToggle";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Articles", path: "/articles" },
  { name: "Projects", path: "/projects" },
  { name: "Uses", path: "/uses" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname.startsWith("/articles") ? "/articles" : router.pathname;

  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <Container className="pt-6">
        <div className="top-0 z-10">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Link href="/" aria-label="Home" className="pointer-events-auto rounded-full">
                <Image
                  src="/profile-pic.png"
                  alt="Aditya Giri"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full bg-zinc-100 object-cover ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
                  priority
                />
              </Link>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className={cn(
                            "relative block px-3 py-2 transition",
                            isActive
                              ? "text-teal-600 dark:text-teal-400"
                              : "hover:text-teal-600 dark:hover:text-teal-400",
                          )}
                        >
                          {item.name}
                          {isActive ? (
                            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-600/0 via-teal-600/40 to-teal-600/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav className="pointer-events-auto md:hidden">
                <ul className="flex flex-wrap justify-end gap-2 rounded-2xl bg-white/90 p-2 text-sm font-medium text-zinc-700 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className={cn(
                            "block rounded-full px-3 py-1.5 transition",
                            isActive
                              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                              : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700/60 dark:hover:bg-zinc-700",
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="pointer-events-auto">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
