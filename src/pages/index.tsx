import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import About from "../components/about"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Navbar from "../components/navbar"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Links from "../components/links"

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
  <>
    <title>Home Page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </>
)
