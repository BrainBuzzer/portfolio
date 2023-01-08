import { faGithub, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import VSCode from "./Sidebar/VSCode";
import Spotify from "./Sidebar/Spotify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OnlineCheck from "./Sidebar/OnlineCheck";

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function SideBar() {
  const size = useWindowSize();
  const router = useRouter();
  return (
    <aside
      className={`mt-3 py-3 w-full md:sticky md:right-0 md:top-20 md:col-span-1 md:border-r-2 md:border-gray-400 md:dark:border-gray-700 ${
        size.width < 768 && router.pathname !== "/" ? "hidden md:block" : ""
      } sidebar`}
    >
      <div className="flex flex-col items-center w-3/4 mx-auto justify-between sidebar-div">
        <div>
          <Image src={profilePic} alt="Profile Picture" placeholder="blur" className="profile-pic" />
          <h1 className="text-4xl font-bold pt-8 w-full text-center">Aditya Giri</h1>
          <div className="w-full flex justify-center items-center">
            <OnlineCheck />
          </div>
          <h2 className="text-gray-900 dark:text-gray-300 text-center text-lg pt-6">
            Programmer. Polyglot. YouTuber. Entrepreneur.
          </h2>
          <h2 className="text-gray-900 dark:text-gray-300 text-center text-lg pt-6">
            Developing side projects for fun.
          </h2>

          <div className="border-t-2 w-full border-gray-400 dark:border-gray-800 mt-10"></div>

          <Spotify />

          <div className="border-t-2 border-gray-400 dark:border-gray-800 mt-4 w-full"></div>

          <VSCode />
        </div>

        <div className="flex w-full flex-row justify-around py-6">
          <a href="https://www.youtube.com/@BrainBuzzer">
            <FontAwesomeIcon icon={faYoutube} height="30" />
          </a>
          <a href="https://www.github.com/BrainBuzzer">
            <FontAwesomeIcon icon={faGithub} height="30" />
          </a>
          <a href="https://www.linkedin.com/in/giriaditya">
            <FontAwesomeIcon icon={faLinkedinIn} height="30" />
          </a>
        </div>
      </div>
    </aside>
  );
}
