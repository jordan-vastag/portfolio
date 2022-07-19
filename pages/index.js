import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center h-16">
            <div class="flex space-x-4">
              <img src="%PUBLIC_URL%/logo-placeholder.png" alt="logo"/>
              <a
                href="#about"
                class="text-gray-300 focus:bg-gray-700 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                About
              </a>

              <a
                href="#resume"
                class="text-gray-300 focus:bg-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                Resumé
              </a>

              <a
                href="#projects"
                class="text-gray-300 focus:bg-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>

              <a
                href="#contact"
                class="text-gray-300 focus:bg-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <span className="max-w text-3xl font-bold align-center" style={styles}>
        Welcome
      </span>
    </>
  );
}
