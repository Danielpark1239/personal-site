import React from 'react'
import ExperienceListing from './experienceListing'

const Experience: React.FC = () => {
  return (
    <div className="w-screen bg-navy flex flex-col flex-wrap align-center content-center justify-start text-lslate pb-8 mb-16">
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-3/5">
        <h1 className="text-lg text-gold uppercase tracking-widest">Experience </h1>
        <ExperienceListing
          dates='Jun 2023 - Aug 2023'
          role='Software Engineer Intern'
          orgName='JPMorgan Chase & Co.'
          orgLink='https://www.jpmorganchase.com/'
          description='Consumer & Community Banking, Operations Technology'
          bullets={[
            'Delivered an internal tool using Java Spring and React to streamline monolith refactoring efforts, saving 100 developer hours per module with an estimated 300 modules to be created over the next five years.',
            'Standardized cross-cutting logging functionality for 350 engineers by launching a Java logging library.',
            'Ensured seamless CI/CD integration by debugging the Jenkins build pipeline and expanding test suites, achieving 100% unit test coverage of the logging library using JUnit/Mockito and the React frontend using Jest/RTL.',
            'Collaborated with five interns in an agile team, providing guidance on various technologies and developer tools.'
          ]}
          skills={['TypeScript', 'React', 'Sass', 'Java', 'Node.js', 'Spring Boot', 'Maven', 'AWS', 'Jenkins']}
          hr
        />
        <ExperienceListing
          dates='Nov 2022 - Present'
          role='Co-President, Senior Developer'
          orgName='TigerApps'
          orgLink='https://www.tigerapps.org'
          bullets={[
            'Maintain and upgrade a suite of 16 campus applications, serving 20K unique users with 10M requests monthly',
            'Led efforts to onboard new applications for the fall and recruit junior developers, increasing team size by 150%.',
            'Collaborate with the Office of the Dean of Undergraduate Students (ODUS) to secure funding for hosting costs.'
          ]}
          skills={['Flask', 'Django', 'Node.js', 'React', 'JavaScript', 'HTML/CSS', 'Heroku', 'PostgreSQL', 'MongoDB', 'AWS']}
          hr
        />
        <ExperienceListing
          dates='Sep 2022 - Present'
          role='Software Engineer'
          orgName='Hoagie.io'
          orgLink='https://hoagie.io/'
          bullets={[
            'Develop a system of integrated campus applications utilizing shared UI elements and APIs, serving 5,000+ students.',
            'Spearheaded and shipped a scheduled send function for Hoagie Mail, impacting thousands of monthly emails.',
            'Implemented local development user mocking on top of Auth0, streamlining the development and testing process.'
          ]}
          skills={['Next.js', 'TypeScript', 'Evergreen UI', 'Go', 'MongoDB', 'Netlify', 'Heroku']}
          hr
        />
        <ExperienceListing
          dates='Jan 2022 - Jun 2023'
          role='Undergraduate Grader'
          orgName='Princeton University Department of Computer Science'
          orgLink='https://www.cs.princeton.edu/'
          bullets={[
            'Graded and revised student assignments for Intro to Programming Systems, reviewing ~1,000 lines of C code weekly.',
            'Engaged in weekly meetings with the course staff and coordinated with grading managers and preceptors.'
          ]}
          skills={['C', 'GDB', 'Emacs', 'Unix', 'Bash']}
        />
      </div>
    </div>
  );
};

export default Experience;