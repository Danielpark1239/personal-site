import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { motion, useMotionTemplate } from "framer-motion"
import About from "../components/about"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Navbar from "../components/navbar"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Links from "../components/links"

const IndexPage: React.FC<PageProps> = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const handleMouseMove = (event: any) => {
    const { pageX, pageY } = event
    setMouseX(pageX)
    setMouseY(pageY)
    console.log(pageX, pageY)
  }
  useEffect(() => {
    window.addEventListener('mousemove', e => handleMouseMove(e))
  }, [])

  return (
    <div className='group/1 relative bg-navy w-screen font-inter mx-auto shadow-lg'>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/1:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }} 
      />
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
    <script src="https://kit.fontawesome.com/4d1a165625.js" crossOrigin="anonymous"></script>
  </>
)
