import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { jobs } from "../data";

export default function Jobs() {
    return (
        <section id="jobs" className="dark:text-gray-400 dark:bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
                        Professional Jobs History
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        An information about where i've been working at
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">More at my <a href="https://www.linkedin.com/in/ragillio-aji-ab110a145/">Linkedin</a></p>
                </div>
                <div className="flex flex-wrap -m-4 card dark:card-dark">
                    <ul role="list" className="divide-y divide-gray-100 mx-auto">
                        {jobs.map((job) => (
                            <li key={job.duration} className="flex justify-between gap-x-6 py-5">
                                <div className="flex gap-x-4">
                                    <img className="w-20 flex-none p-1 rounded-full border-2 border-gray-500 dark:border-white bg-gray-50" src={job.imageUrl} alt="Jobs Image" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-8 text-gray-900 dark:text-white">{job.name}</p>
                                        <p className="mt-1 truncate text-xs leading-8 text-gray-500">{job.duration}</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-8 text-gray-900 dark:text-white">{job.role}</p>
                                    {job.isCurrent ? (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <p className="text-xs leading-8 text-gray-500">Currently</p>
                                        </div>

                                    ) : (
                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            {/* <time dateTime={job.isCurrentDateTime}>{job.isCurrent}</time> */}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
