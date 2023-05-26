import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About: React.FC = () => {
  return (
    <div className="h-screen md:h-screen bg-navy flex items-center pt-64 p-2 py-16">
        <div className="container mx-auto ml-32">
          <p className="text-lg text-gold mb-2 ml-1">Hi, my name is</p>
          <h1 className="text-7xl font-bold text-white mb-5">Daniel Park.</h1>
          <h1 className="text-7xl font-bold text-lslate mb-5">I'm a full-stack developer.</h1>
          <div className="text-lg text-lslate w-1/2">
            I'm an undergraduate at Princeton University interested in
            <span className="text-white"> full-stack web development </span> and
            <span className="text-white"> machine learning. </span>
            I'm graduating in May 2024 and am looking for full-time software engineering roles.
            Let's connect!
          </div>
          <div className="mt-32 w-full -ml-16 flex justify-center">
            <StaticImage className="animate-bounce w-16 h-16 fill-white" src="../images/scroll-down.svg" alt='Scroll down' placeholder="none"></StaticImage>
          </div>
        </div>
    </div>
  );
};

export default About;