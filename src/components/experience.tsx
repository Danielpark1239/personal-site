import React from 'react'
import ExperienceListing from './experienceListing'

const Experience: React.FC = () => {
  return (
    <div className="bg-navy text-lslate pb-8">
      <h1 className="text-lg text-gold uppercase mx-32 tracking-widest">Experience </h1>
      <ExperienceListing
        dates='Sep 2022 - Present'
        role='Software Engineer Intern'
        orgName='JPMorgan Chase & Co.'
        orgLink='https://www.jpmorganchase.com/'
        description='Consumer & Community Banking, Operations Technology'
        bullets={[
          'bullet 1',
          'Bullet 2',
          'Bullet 3'
        ]}
        skills={['React', 'Java Spring']}
      />
      <ExperienceListing
        dates='Nov 2022 - Present'
        role='Co-President, Senior Developer'
        orgName='TigerApps'
        orgLink='https://www.tigerapps.org'
        bullets={[
          'bullet 1',
          'Bullet 2',
          'Bullet 3'
        ]}
        skills={['Flask', 'Django', 'React', 'JavaScript', 'HTML/CSS', 'Heroku', 'PostgreSQL']}
      />
      <ExperienceListing
        dates='Sep 2022 - Present'
        role='Software Developer'
        orgName='Hoagie Club'
        orgLink='https://hoagie.io/'
        bullets={[
          'bullet 1',
          'Bullet 2',
          'Bullet 3'
        ]}
        skills={['TypeScript', 'Evergreen UI', 'NextJS', 'Go', 'MongoDB', 'Netlify', 'Heroku']}
      />
      </div>
  );
};

export default Experience;