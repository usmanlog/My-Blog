import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer className="w-full font-poppins bg-black text-white h-[200px] min-w-[280px] py-3">
      <p className="text-3xl ml-8">Contact me</p>
      <IconContext.Provider value={{ size: "2em", className: "hover:text-gray-300" }}>
        <div className="flex w-[80px] mx-auto justify-between mt-6">
          <a
            href="https://github.com/usmanlog"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/usmaanLog"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </IconContext.Provider>

      <p className="text-center mt-8">
        Made with <span className="text-red-700">❤</span> by Usman.
      </p>
      <p className="text-center text-md">
        &copy;{new Date().getFullYear()} - usmaan.dev - All rights reserved
      </p>
    </footer>
  );
}
