import styles from "../styles/Home.module.css";

import { logo } from "../public/logo-placeholder.png";

const scrollTo = (id) => {
  if (typeof window !== "undefined") {
    let e = document.getElementById(id);
    if (e !== null) {
      e.scrollTo({ behavior: "smooth" });
    }
  }
};

export default function Home() {
  return (
    <div id="top">
      <nav className="bg-gray-800">
        <div className="max-w-7xl">
          <div className="flex items-center justify-start">
            <img
              className="bg-gray-100 h-8 w-40 mx-4 rounded-sm"
              src={logo}
              alt="Jordan Vastag logo"
              id="nav-logo"
              onClick={scrollTo("top")}
            />
            <div className="flex items-center h-16 space-x-4">
              <a
                href="#about"
                className="text-gray-300 focus:text-gray-700 bg-gray-700 focus:bg-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={scrollTo("about")}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 focus:text-gray-700 bg-gray-700 focus:bg-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={scrollTo("projects")}
              >
                Projects
              </a>
              <a
                href="#resume"
                className="text-gray-300 focus:text-gray-700 bg-gray-700 focus:bg-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={scrollTo("resume")}
              >
                Resumé
              </a>
              <a
                href="#contact"
                className="text-gray-300 focus:text-gray-700 bg-gray-700 focus:bg-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={scrollTo("contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="splash">
        
      </div>
      <div id="about">

      </div>
      <div id="projects">

      </div>
      <div id="resume">

      </div>
      <div id="about">

      </div>
    </div>
  );
}
