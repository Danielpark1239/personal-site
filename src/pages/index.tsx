import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import About from "../pageComponents/about"
import Projects from "../pageComponents/projects"
import Experience from "../pageComponents/experience"
import Navbar from "../pageComponents/navbar"
import Skills from "../pageComponents/skills"
import Contact from "../pageComponents/contact"
import Links from "../pageComponents/links"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className='bg-navy w-screen h-screen font-inter mx-auto shadow-lg' >
      <Navbar />
      <Links />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>     
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <div>
    <title>Home Page</title>
  </div>
)
