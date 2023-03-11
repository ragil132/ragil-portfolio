/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Switcher from './Switcher'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav flex flex-wrap items-center justify-between bg-gray-200 dark:bg-gray-800 border-b border-gray-200 dark:border-0 rounded sticky top p-5 top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 firefox:bg-opacity-90">
            <div className="flex flex-no-shrink items-center mr-6 py-3 dark:text-white">
                <a className='md:ml-7 ml-1 p-1 border-2 border-black dark:border-white rounded-lg mr-2'>
                    <img className="fill-current w-6 dark:invert" src="logo.png" alt="logo" />
                </a>
                <span className="font-semibold text-xl tracking-tight">Ragillio Aji</span>
            </div>

            <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto">
                <li className="mr-3">
                    <a href="#projects" className="block md:inline-block py-3 no-underline text-base dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded py-1 md:px-3">Projects</a>
                </li>

                <li className="mr-3">
                    <a href="#skills" className="block md:inline-block py-3 no-underline text-base dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded py-1 md:px-3">Skills</a>
                </li>

                <li className="mr-3">
                    <a href="#certifications" className="block md:inline-block py-3 no-underline text-base dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded py-1 md:px-3">Certifications</a>
                </li>

                <li className="mr-3">
                    <a href="#contact" className="block md:inline-block py-3 no-underline text-base dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded py-1 md:px-3">Contact</a>
                </li>

                <li className="mr-3">
                    <a href="https://rverse.vercel.app/" className="block md:inline-block py-3 no-underline text-base dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded py-1 md:px-3">Blog</a>
                </li>
                <li className='mr-3'>
                    <Switcher />
                </li>

            </ul>
        </nav>
    );
}
