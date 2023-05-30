import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About: React.FC = () => {
  return (
    <div className="bg-navy h-screen w-screen flex flex-col align-center content-center p-4 mt-24 pb-24">
      <div className="flex flex-col flex-wrap m-auto align-center content-center justify-start">
        <p className="text-lg text-gold mb-2">Hi, my name is</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-5 hover:text-gold ease-in duration-300">Daniel Park.</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-lslate mb-2 md:mb-5">I'm a full-stack developer.</h1>
        <div className="text-m md:text-lg text-lslate w-11/12 md:w-4/5 lg:w-3/5 2xl:w-1/2 break-words">
          I'm an undergraduate at Princeton University interested in
          <span className="text-white hover:text-gold ease-in duration-300"> full-stack web development </span> and
          <span className="text-white hover:text-gold ease-in duration-300"> machine learning. </span>
          I'm graduating in May 2024 and am looking for full-time software engineering roles.
          Let's connect!
        </div>
      </div>
      <div className="relative bottom-16 flex justify-center">
          <StaticImage className="animate-bounce w-16 h-16 fill-white" src="../images/scroll-down.svg" alt='Scroll down' placeholder="none"></StaticImage>
        </div>
    </div>
  );
};

export default About;