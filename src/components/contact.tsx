import React from 'react'

const Contact: React.FC = () => {
  return (
    <div id='contact' className='w-full pt-24 bg-navy text-white h-auto'>
    <div className='max-w-[1240px] mx-32 py-16 w-full '>
      <p className='text-lg tracking-widest uppercase text-gold'>
        Contact
      </p>
      <div className="container mx-auto mt-2 text-lg text-lslate">
          <h3>
            I'm graduating in May 2024 and I'm searching for full-time SWE roles. Feel free to contact me
          </h3>
          <h3>
            via email at <span className="text-white">danielpark1239@gmail.com</span> or use any of the links on the
            <span className="text-white"> right side of the screen</span>!
          </h3>
        </div>
    </div>
  </div>
  );
};

export default Contact;