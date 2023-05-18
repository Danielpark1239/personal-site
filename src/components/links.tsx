import React from "react"

const Links: React.FC = () => {
    return (
        <nav>
        <div className="relative">
            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-10 mr-7">
                <div className="flex flex-col items-center space-y-6">
                    <a href="https://github.com/Danielpark1239/" target="_blank" rel="noopener noreferrer" className="nav-link relative">
                        <i className="fab fa-github text-3xl text-white hover:text-gold"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/danieljungpark/" target="_blank" rel="noopener noreferrer" className="nav-link relative">
                        <i className="fab fa-linkedin text-3xl text-white hover:text-gold"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                    <a href="mailto:danielpark1239@gmail.com" className="nav-link relative">
                        <i className="fas fa-envelope text-3xl text-white hover:text-gold"></i>
                        <span className="nav-link-hover"></span>
                    </a>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Links