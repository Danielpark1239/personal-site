import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About: React.FC = () => {
  return (
    <div className="h-screen bg-navy flex">
      <div className="flex items-center justify-start">
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
        </div>
        <div className="justify-center items-center">
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full mb-12 flex items-end justify-center">
        <StaticImage className="animate-bounce w-16 h-16 fill-white" src="../../public/static/scroll-down.svg" alt='Scroll down'></StaticImage>
      </div>
    </div>
  );
};

export default About;