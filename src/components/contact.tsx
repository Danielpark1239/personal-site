import React from 'react'

const Contact: React.FC = () => {
  const email = 'danieljhnpark@gmail.com'
  return (
    <div id='contact' className='w-screen grid grid-cols-11 md:grid-cols-8 xl:grid-cols-7 2xl:grid-cols-11 mb-16 bg-navy text-white h-auto '>
      <div className="col-span-9 col-start-2 md:col-span-6 md:col-start-2 xl:col-start-2 xl:col-span-5 2xl:col-start-3 2xl:col-span-7 container mt-2 text-lg text-lslate">
        <p className='text-lg tracking-widest uppercase text-gold'>
          Contact
        </p>
        <h3>
          <div className="hidden md:block">
            I'm graduating in May 2024 and searching for full-time Software Engineer roles, preferably in Full Stack Development. You can reach me
            via email at <span className="text-white hover:text-gold ease-in duration-300">{email}</span> or through the links provided on the
            <span className="text-white hover:text-gold ease-in duration-300"> right of the screen</span>.
          </div>
          <div className="block md:hidden">
            I'm graduating in May 2024 and searching for full-time Software Engineer roles, preferably in Full Stack Development. You can reach me
            via email at <span className="text-white hover:text-gold ease-in duration-300">{email}</span> or through the links provided on the
            <span className="text-white hover:text-gold ease-in duration-300"> top of the screen</span>.
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Contact;