import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font dark:text-white mb-12">
          Certifications
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I also take some certifications. I can't show it all here, but, here
          are...
        </p>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          More at my{" "}
          <a
            href="https://www.linkedin.com/in/ragillio-aji-ab110a145/"
            className="text-green-400"
          >
            Linkedin
          </a>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-500 dark:bg-gray-800 bg-opacity-40 p-4 rounded flex justify-center items-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.credly.com/badges/122b3471-897c-48a5-928d-969ab44a80b9/public_url"
            >
              <img
                alt="certification"
                src="./WebDevelopmentFundamentals_Badge20241222-23-mmhdad.png"
                className="w-full h-60 sm:h-80 lg:h-96 object-cover border-2 border-black rounded"
              />
            </a>
          </div>
          <div className="bg-gray-500 dark:bg-gray-800 bg-opacity-40 p-4 rounded flex justify-center items-center">
            <img
              alt="certification"
              src="./backend.jpg"
              className="w-full h-60 sm:h-80 lg:h-96 object-cover border-2 border-black rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
