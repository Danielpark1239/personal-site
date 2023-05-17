import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-start">
          <h1 className="text-4xl font-bold mr-8">Hi, I'm Daniel.</h1>
          <p className="text-lg">
            I'm an undergraduate at Princeton University interested in
            full-stack web development and machine learning.
          </p>
          <button>
            I'm graduating in May 2024 and am looking for full-time software engineering roles.
            Feel free to get in touch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;