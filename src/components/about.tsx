import React from 'react'

const About: React.FC = () => {
  return (
    <div className="h-screen bg-navy flex items-center justify-start">
      <div className="container mx-auto ml-32">
          <p className="text-lg text-gold mb-2 ml-1">Hi, my name is</p>
          <h1 className="text-7xl font-bold text-white mb-5">Daniel Park.</h1>
          <div className="text-lg text-lslate w-1/2">
              I'm an undergraduate at Princeton University interested in
              <span className="text-white"> full-stack web development </span> and
              <span className="text-white"> machine learning. </span>
              I'm graduating in May 2024 and am looking for full-time software engineering roles.
              Let's connect!
        </div>
      </div>
      <i className="animate-bounce w-6 h-6">
        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"/>
      </i>
    </div>
  );
};

export default About;