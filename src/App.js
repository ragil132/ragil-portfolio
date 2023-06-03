/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Jobs from './components/Jobs';

function App() {
  return (

    <main className="dark:text-gray-400 dark:bg-gray-900 body-font">
      <Navbar />
      <About />
      <Jobs />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>

  );
}

export default App;
