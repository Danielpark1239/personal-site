import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar: React.FC = () => {
  return (
    <nav className='fixed top-0 bg-navy w-full shadow-lg'>
        <div className="container mx-auto">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <a href="#about" className="p-1 text-gold font-semibold text-lg hover:text-gold">
                    DanPark
                    </a>
                </div>
                <div className="flex space-x-4">
                    <AnchorLink href="#about" className="p-1 nav-link text-white hover:text-gold relative">
                        About
                        <span className="nav-link-hover"></span>
                    </AnchorLink>
                    <AnchorLink href="#experience" offset="50" className="p-1 nav-link text-white hover:text-gold relative">
                        Experience
                        <span className="nav-link-hover"></span>
                    </AnchorLink>
                    <AnchorLink href="#projects" className="p-1 nav-link text-white hover:text-gold relative">
                        Projects
                        <span className="nav-link-hover"></span>
                    </AnchorLink>
                    <AnchorLink href="#skills" className="p-1 nav-link text-white hover:text-gold relative">
                        Skills
                        <span className="nav-link-hover"></span>
                    </AnchorLink>
                    <AnchorLink href="#contact" className="p-1 nav-link text-white hover:text-gold relative">
                        Contact
                        <span className="nav-link-hover"></span>
                    </AnchorLink>
                    <a href="#resume" className="nav-link rounded border-solid border-2 p-1 z-1 border-gold text-gold hover:bg-gold hover:text-navy transition relative">
                        Resume
                    </a>
                </div>
            </div>
        </div>
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
    </nav>
  )
}

export default Navbar