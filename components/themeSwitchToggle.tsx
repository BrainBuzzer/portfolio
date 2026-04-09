import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const iconAnimation = useMemo(
    () => ({
      initial: shouldReduceMotion ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -90, scale: 0.5 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
      exit: shouldReduceMotion ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: 90, scale: 0.5 },
      transition: shouldReduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 200, damping: 20 },
    }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    const nextIsDark = getPreferredTheme();
    setIsDark(nextIsDark);
    setMounted(true);
    document.documentElement.classList.toggle("dark", nextIsDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleTheme}
    >
      <span className="flex h-6 w-6 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.svg
              key="moon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:group-hover:stroke-zinc-400"
              initial={iconAnimation.initial}
              animate={iconAnimation.animate}
              exit={iconAnimation.exit}
              transition={iconAnimation.transition}
            >
              <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700"
              initial={iconAnimation.initial}
              animate={iconAnimation.animate}
              exit={iconAnimation.exit}
              transition={iconAnimation.transition}
            >
              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
              <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
