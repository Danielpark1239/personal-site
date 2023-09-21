import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const resumeLink="https://drive.google.com/file/d/1_DoICNEHUWFPdVpemkkMlgnw5ZjC1w3e/view?usp=sharing"
    return (
      <nav className="fixed top-0 bg-navy w-full px-2 sm:px-8 md:px-16 shadow-lg shadow-gray-400 hover:shadow-gold ease-in duration-300 z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <AnchorLink
              href="#about"
              className="p-1 text-gold text-2xl font-semibold hover:text-gold hover:scale-110 ease-in duration-300"
            >
              DP
            </AnchorLink>
          </div>
          <div className="flex md:hidden flex-row items-center gap-4 sm:gap-8">
            <a
              href="https://www.linkedin.com/in/danieljungpark/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link relative"
            >
              <i
                className="fab fa-linkedin text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300"
                title="LinkedIn"
              ></i>
              <span className="nav-link-hover"></span>
            </a>
            <a
              href={"https://github.com/Danielpark1239/"}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link relative"
            >
              <i
                className="fab fa-github text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300"
                title="GitHub"
              ></i>
              <span className="nav-link-hover"></span>
            </a>
            <a
              href="mailto:danielpark1239@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link relative"
            >
              <i
                className="fas fa-envelope text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300"
                title="Email"
              ></i>
              <span className="nav-link-hover"></span>
            </a>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="p-1 text-gold text-2xl cursor-pointer md:hidden flex items-center"
          >
            {open ? (
              <i className="fa-solid fa-times" title="Open Menu"></i>
            ) : (
              <i className="fa-solid fa-bars" title="Close Menu"></i>
            )}
          </div>
          <div className="hidden md:flex bg-navy items-center space-x-4 justify-between h-16">
            <AnchorLink
              href="#about"
              className="p-1 nav-link text-white hover:text-gold relative"
            >
              About
              <span className="nav-link-hover"></span>
            </AnchorLink>
            <AnchorLink
              href="#experience"
              offset="120"
              className="p-1 nav-link text-white hover:text-gold relative"
            >
              Experience
              <span className="nav-link-hover"></span>
            </AnchorLink>
            <AnchorLink
              href="#projects"
              offset="120"
              className="p-1 nav-link text-white hover:text-gold relative"
            >
              Projects
              <span className="nav-link-hover"></span>
            </AnchorLink>
            <AnchorLink
              href="#skills"
              offset="20"
              className="p-1 nav-link text-white hover:text-gold relative"
            >
              Skills
              <span className="nav-link-hover"></span>
            </AnchorLink>
            <AnchorLink
              href="#contact"
              offset="120"
              className="p-1 nav-link text-white hover:text-gold relative"
            >
              Contact
              <span className="nav-link-hover"></span>
            </AnchorLink>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link rounded border-solid border-2 p-1 z-1 border-gold text-gold hover:bg-gold hover:text-navy transition relative"
            >
              Resume
            </a>
          </div>
          {open && (
            <div className="md:hidden bg-navy flex flex-col items-center w-full mt-4 gap-4 z-auto h-auto transition duration-500 ease-in">
              <AnchorLink
                href="#about"
                className="p-1 nav-link text-white hover:text-gold relative"
                onClick={() => setOpen(!open)}
              >
                About
                <span className="nav-link-hover"></span>
              </AnchorLink>
              <AnchorLink
                href="#experience"
                offset="100"
                className="p-1 nav-link text-white hover:text-gold relative"
                onClick={() => setOpen(!open)}
              >
                Experience
                <span className="nav-link-hover"></span>
              </AnchorLink>
              <AnchorLink
                href="#projects"
                offset="100"
                className="p-1 nav-link text-white hover:text-gold relative"
                onClick={() => setOpen(!open)}
              >
                Projects
                <span className="nav-link-hover"></span>
              </AnchorLink>
              <AnchorLink
                href="#skills"
                offset="100"
                className="p-1 nav-link text-white hover:text-gold relative"
                onClick={() => setOpen(!open)}
              >
                Skills
                <span className="nav-link-hover"></span>
              </AnchorLink>
              <AnchorLink
                href="#contact"
                offset="100"
                className="p-1 nav-link text-white hover:text-gold relative"
                onClick={() => setOpen(!open)}
              >
                Contact
                <span className="nav-link-hover"></span>
              </AnchorLink>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link rounded border-solid border-2 p-1 z-1 border-gold text-gold hover:bg-gold hover:text-navy transition relative"
                onClick={() => setOpen(!open)}
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>
    )
}

export default Navbar