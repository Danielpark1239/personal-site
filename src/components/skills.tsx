import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const Skills: React.FC = () => {
  return (
    <div className="bg-navy text-white py-16">
      <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-32 flex flex-col justify-center h-full'>
          <p className='text-lg -mx-2 tracking-widest uppercase text-gold'>
            Skills
          </p>
          <h2 className='py-4 -mx-2 text-lslate'>Languages</h2>
          <div className='-mx-2 grid grid-cols-2 lg:grid-cols-5 gap-6'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/python.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/java.webp' width={64} height={64} alt='/'backgroundColor='#0A2647' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Java</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/javascript.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                 <StaticImage src='../../public/static/go.png' width={256} height={256} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Go</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/c.png' width={512} height={512} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>C</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/html.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/css.svg' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <h2 className='-mx-2 py-4 text-lslate'>Frameworks</h2>
          <div className='-mx-2 grid grid-cols-2 lg:grid-cols-5 gap-6'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/flask.png' width={48} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Flask</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/django.png' width={64} height={64} alt='/'backgroundColor='#0A2647' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Django</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/node.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                 <StaticImage src='../../public/static/express.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Express</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/spring.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Java Spring</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/react.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/next.webp' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/gatsby.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Gatsby</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/tailwind.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>TailwindCSS</h3>
                </div>
              </div>
            </div>
          </div>
          <h2 className='-mx-2 py-4 text-lslate'>Other</h2>
          <div className='-mx-2 grid grid-cols-2 lg:grid-cols-5 gap-6'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/postgres.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>PostgreSQL</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/mongo.jpeg' width={64} height={64} alt='/'backgroundColor='#0A2647' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/git.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Git</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                 <StaticImage src='../../public/static/heroku.png' width={256} height={256} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Heroku</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/aws.png' width={512} height={512} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>AWS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <StaticImage src='../../public/static/netlify.png' width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Netlify</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Skills;