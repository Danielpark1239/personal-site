import React from 'react'
import ExperienceListing from './experienceListing'

const Experience: React.FC = () => {
  return (
    <div className="w-screen bg-navy flex flex-col flex-wrap align-center content-center justify-start text-lslate pb-8 mb-16">
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-3/5">
        <h1 className="text-lg text-gold uppercase tracking-widest">Experience </h1>
        <ExperienceListing
          dates='Sep 2022 - Present'
          role='Software Engineer Intern'
          orgName='JPMorgan Chase & Co.'
          orgLink='https://www.jpmorganchase.com/'
          description='Consumer & Community Banking, Operations Technology'
          bullets={[
            'TBD'
          ]}
          skills={['TypeScript', 'React', 'Sass', 'Java', 'Node.js', 'Spring Boot', 'Moneta Boot', 'Maven', 'Jenkins']}
          hr
        />
        <ExperienceListing
          dates='Nov 2022 - Present'
          role='Co-President, Senior Developer'
          orgName='TigerApps'
          orgLink='https://www.tigerapps.org'
          bullets={[
            'Maintain and upgrade a suite of 15 campus applications that serve 5k+ students with 300k+ page views/month.',
            'Leading efforts to onboard new applications and recruit junior developers, targeting a team size of 2x.',
            'Collaborate with the Office of the Dean of Undergraduate Students (ODUS) to secure club funding.'
          ]}
          skills={['Flask', 'Django', 'Node.js', 'React', 'JavaScript', 'HTML/CSS', 'Heroku', 'PostgreSQL', 'MongoDB']}
          hr
        />
        <ExperienceListing
          dates='Sep 2022 - Present'
          role='Software Developer'
          orgName='Hoagie Club'
          orgLink='https://hoagie.io/'
          bullets={[
            'Develop a system of integrated campus applications utilizing shared UI elements and APIs, serving 5k+ students.',
            'Spearheaded and shipped a scheduled send function for Hoagie Mail, impacting over 100 daily emails.',
            'Implemented local development user mocking on top of auth0, streamlining the development process.'
          ]}
          skills={['Next.js', 'TypeScript', 'Evergreen UI', 'Go', 'MongoDB', 'Netlify', 'Heroku']}
        />
      </div>
    </div>
  );
};

export default Experience;