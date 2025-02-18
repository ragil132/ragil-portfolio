import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="typing title-font w-80 md:w-99 lg:w-99 md:text-3xl text-base md:text-2xl my-0 mx-auto md:mx-0 font-medium dark:text-white">
            Hello folks! My name is Ragillio
          </h1>
          <h1 className="typing title-font w-80 md:w-99 lg:w-99 md:text-3xl text-base md:text-2xl my-0 mx-auto md:mx-0 mb-4 font-medium dark:text-white">
            I'm a Software Engineer<span className="ketik">|</span>
          </h1>
          <p className="leading-relaxed">
            With lines of code as my artistic ink,
          </p>
          <p className="mb-8 leading-relaxed">
            Let's create unimaginable things.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/ragillio-aji"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Hire me
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1U1Xg8nZUO8npg1hcg7FtdcvVGxxJmS-V/view?usp=sharing"
              className="ml-4 inline-flex text-white dark:text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4">
          <img
            className="object-cover object-center rounded-full border-2 dark:border-black border-gray"
            alt="hero"
            src="./ragil.png"
          />
        </div>
      </div>
    </section>
  );
}
