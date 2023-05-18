import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Experience from "../components/experience"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className='bg-navy w-screen h-screen font-inter' >
       <nav>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="" className="text-white font-semibold text-lg hover:text-lgreen">
                Daniel Park
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#about" className="text-white hover:text-lgreen">
                About
              </a>
              <a href="#experience" className="text-white hover:text-lgreen">
                Experience
              </a>
              <a href="#projects" className="text-white hover:text-lgreen">
                Projects
              </a>
              <a href="#skills" className="text-white hover:text-lgreen">
                Skills
              </a>
              <a href="#contact" className="text-white hover:text-lgreen">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="about">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        skills
      </section>     
      <section id="contact">
        contact
      </section>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
