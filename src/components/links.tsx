import React from "react"

const Links: React.FC = () => {
    const email = 'danieljhnpark@gmail.com'
    return (
        <nav>
        <div className="bg-navy hidden md:block relative">
            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-10 pr-8">
                <div className="flex flex-col items-center space-y-6">
                    <a href="https://www.linkedin.com/in/danieljungpark/" target="_blank" rel="noopener noreferrer" className="nav-link relative">
                        <i className="fab fa-linkedin text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300" title="LinkedIn"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                    <a href="https://github.com/Danielpark1239/" target="_blank" rel="noopener noreferrer" className="nav-link relative">
                        <i className="fab fa-github text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300" title="GitHub"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                    <a href={'mailto:' + email} target="_blank" rel="noopener noreferrer" className="nav-link relative">
                        <i className="fas fa-envelope text-3xl text-white hover:text-gold hover:scale-110 ease-in duration-300" title="Email"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Links