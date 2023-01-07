import { faGithub, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import VSCode from "./Sidebar/VSCode";
import Spotify from "./Sidebar/Spotify";

export default function SideBar() {
  return (
    <aside
      className="mt-3 py-3 w-full sticky right-0 top-20 col-span-1 border-r-2 border-gray-400"
      style={{ height: "91vh" }}
    >
      <div className="flex flex-col items-center w-3/4 mx-auto justify-between" style={{ height: "90vh" }}>
        <div>
          <Image src={profilePic} alt="Profile Picture" placeholder="blur" className="profile-pic" />
          <h1 className="text-4xl font-bold pt-8 w-full text-center">Aditya Giri</h1>
          <div className="w-full flex justify-center items-center">
            <span className="mt-3 inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
              <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={4} cy={4} r={3} />
              </svg>
              Online
            </span>
          </div>
          <h2 className="text-gray-900 text-center text-lg pt-6">Programmer. Polyglot. YouTuber. Entrepreneur.</h2>
          <h2 className="text-gray-900 text-center text-lg pt-6">Developing side projects for fun.</h2>

          <div className="border-t-2 w-full border-gray-400 mt-10"></div>

          <Spotify />

          <div className="border-t-2 border-gray-400 mt-4 w-full"></div>

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
