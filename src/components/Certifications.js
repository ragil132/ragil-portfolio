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
          <a href="https://www.linkedin.com/in/ragillio-aji-ab110a145/">
            Linkedin
          </a>
        </p>
        <div className="flex flex-wrap m-4">
          <div className="md:p-4 p-0 md:w-1/2 w-full">
            <div className="h-full bg-gray-500 dark:bg-gray-800 bg-opacity-40 md:p-8 p-0 rounded">
              <div className="inline-flex items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.credly.com/badges/122b3471-897c-48a5-928d-969ab44a80b9/public_url"
                >
                  <img
                    alt="certification"
                    src="./WebDevelopmentFundamentals_Badge20241222-23-mmhdad.png"
                    className="inset-0 w-full h-full object-cover object-center border-2 border-black rounded"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="md:p-4 p-0 md:w-1/2 w-full">
            <div className="h-full bg-gray-500 dark:bg-gray-800 bg-opacity-40 md:p-8 p-0 rounded">
              <div className="inline-flex items-center">
                <img
                  alt="certification"
                  src="./backend.jpg"
                  className="inset-0 w-full h-full object-cover object-center border-2 border-black rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
