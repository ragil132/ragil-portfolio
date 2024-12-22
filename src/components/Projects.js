import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="dark:text-gray-400 dark:bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I built this after what i've learnt from various online course and
            my fulltime job
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            More at my <a href="https://github.com/ragil132">Github</a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex-none w-full lg:h-80 md:relative grid grid-cols-1">
                <img
                  alt="gallery"
                  className="object-fill md:absolute md:inset-0 w-full md:h-full lg:h-full md:object-cover md:object-center border-2 border-gray dark:border-black rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 md:relative md:z-10 lg:relative lg:z-10 w-full border-4 border-gray dark:border-gray-800 bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 firefox:bg-opacity-90 dark:bg-gray-900 md:opacity-0 lg:opacity-0 opacity-90 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed dark:text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
