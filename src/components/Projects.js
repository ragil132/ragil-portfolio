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
            I built this after what I've learned from various online courses and
            my full-time job.
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            More at my{" "}
            <a href="https://github.com/ragil132" className="text-green-400">
              Github
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="relative group overflow-hidden rounded-lg border border-gray-300 dark:border-gray-800"
            >
              <img
                alt="gallery"
                className="object-cover w-full h-80 sm:h-80 md:h-80 lg:h-80 transition-transform duration-300 group-hover:scale-105"
                src={project.image}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-sm font-medium text-green-400">
                  {project.subtitle}
                </h2>
                <h1 className="text-lg font-medium dark:text-white">
                  {project.title}
                </h1>
                <p className="text-sm dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
