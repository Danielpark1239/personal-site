import React from 'react'

const Contact: React.FC = () => {
  return (
    <div id='contact' className='px-32 max-w-[1240px] mb-16 bg-navy text-white h-auto '>
      <p className='text-lg tracking-widest uppercase text-gold'>
        Contact
      </p>
      <div className="container mt-2 text-lg text-lslate">
        <h3>
          I'm graduating in May 2024 and I'm searching for full-time SWE roles. Feel free to contact me
          via email at <span className="text-white hover:text-gold ease-in duration-300">danielpark1239@gmail.com</span> or at any of the links on the
          <span className="text-white"> right side of the screen</span>!
        </h3>
      </div>
    </div>
  );
};

export default Contact;