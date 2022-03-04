import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav flex flex-wrap items-center justify-between bg-gray-800 rounded md:sticky top p-5 top-0 z-10">
            <div className="flex flex-no-shrink items-center mr-6 py-3 text-white">
                <span className="font-semibold text-xl tracking-tight">Ragillio Aji</span>
            </div>

            <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto">
                <li className="mr-3">
                    <a href="#projects" className="block md:inline-block py-3 no-underline text-base hover:text-white hover:bg-gray-700 rounded py-1 md:px-3">Projects</a>
                </li>

                <li className="mr-3">
                    <a href="#skills" className="block md:inline-block py-3 no-underline text-base hover:text-white hover:bg-gray-700 rounded py-1 md:px-3">Skills</a>
                </li>

                <li className="mr-3">
                    <a href="#certifications" className="block md:inline-block py-3 no-underline text-base hover:text-white hover:bg-gray-700 rounded py-1 md:px-3">Certifications</a>
                </li>

                <li className="mr-3">
                    <a href="#contact" className="block md:inline-block py-3 no-underline text-base hover:text-white hover:bg-gray-700 rounded py-1 md:px-3">Contact</a>
                </li>

            </ul>
        </nav>
    );
}