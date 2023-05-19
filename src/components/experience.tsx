import React from 'react'

const Experience: React.FC = () => {
  return (
    <div className="bg-navy text-lslate pb-8">
      <h1 className="text-lg text-gold uppercase mx-32 tracking-widest">Experience </h1>
      <div className="container mx-32 grid grid-cols-4 ">
        <div className="items-center justify-start col-span-1 my-8">
          <p className="text-sm w-fit">Jun 2023 - Aug 2023</p>
        </div>
        <div className="w-fit col-span-3 shadow-xl p-8 -ml-6">
            <h3 className="text-md text-white font-bold mb-1">{"Software Engineer Intern "}
            <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-gold relative">
               @JPMorgan Chase & Co.
               <span className="nav-link-hover"></span>
            </a>
            <i className="fas fa-arrow-up-right-from-square text-sm"></i>
            </h3>
            <p className="text-sm mb-1">Consumer & Community Banking, Operations Technology</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Bullet 1</li>
              <li>Bullet 2</li>
              <li>Bullet 3</li>
            </ul>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              React
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              Java Spring
            </button>
          </div>
        <div className="items-center justify-start col-span-1 my-8">
          <p className="text-sm w-fit">Nov 2022 - Present</p>
        </div>
        <div className="w-fit col-span-3 shadow-xl p-8 -ml-6">
          <h3 className="text-md text-white font-bold mb-1">{"Co-President, Senior Developer "}
            <a href="https://www.tigerapps.org" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-gold relative">
              @TigerApps
              <span className="nav-link-hover"></span>
            </a>
          </h3>
          <ul className="list-disc ml-6 text-sm">
            <li>Bullet 1</li>
            <li>Bullet 2</li>
            <li>Bullet 3</li>
          </ul>
          <button disabled className="m-2 p-1.5 text-sm font-semibold text-white rounded-full bg-navy border-2 border-gold">
              Django
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              Flask
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              React
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              JavaScript
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              HTML/CSS
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              Heroku
            </button>
            <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
              PostgreSQL
            </button>
        </div>
        <div className="items-center justify-start col-span-1 my-8">
          <p className="text-sm w-fit">Sep 2022 - Present</p>
        </div>
        <div className="w-fit col-span-3 shadow-xl p-8 -ml-6">
          <h3 className="text-md text-white font-bold mb-1">{"Software Developer "}
          <a href="https://hoagie.io/" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-gold relative">
              @Hoagie Club
              <span className="nav-link-hover"></span>
            </a>
          </h3>
          <ul className="list-disc ml-6 text-sm">
            <li>Bullet 1</li>
            <li>Bullet 2</li>
            <li>Bullet 3</li>
          </ul>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            TypeScript
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            Evergreen UI
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            NextJS
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-2xl bg-navy border-2 border-gold">
            Go
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            MongoDB
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            Netlify
          </button>
          <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
            Heroku
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;