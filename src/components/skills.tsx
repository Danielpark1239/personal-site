import React from 'react'

const Skills: React.FC = () => {
  return (
    <div className="bg-navy text-white py-16">
      <div className="container mx-auto">
        <div className="items-center justify-start">
          <h1 className="text-4xl font-bold mr-8">Skills</h1>
          <p> Languages: Python, Java, Go, C, JavScript, HTML, CSS</p>
          <p> Frameworks: Flask, Django, Node, Express, Java Spring, React, NextJS, Gatsby, TailwindCSS</p>
          <p> Other: Git, AWS, Heroku, Netlify </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;