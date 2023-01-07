import React from "react";

type DarkModeState = "dark" | "light";
type SetDarkModeState = React.Dispatch<React.SetStateAction<DarkModeState>>;

function useDarkMode() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = React.useState<DarkModeState>(() => {
    if (typeof window !== "undefined") {
      const lsVal = window.localStorage.getItem("colorMode");
      if (lsVal) {
        return lsVal === "dark" ? "dark" : "light";
      } else {
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
      }
    }
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      setMode(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode] as const;
}

export default useDarkMode;
