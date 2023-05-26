import React from 'react'
import { GatsbyGraphQLType, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'

interface ProjectListingProps {
    title: string
    description: string
    thumbnail: IGatsbyImageData
    image: IGatsbyImageData
    skills: string[]
    pos: string
    github_url?: string
    site_url?: string
    poster_url?: string
    paper_url?: string
}

const ProjectListing: React.FC<ProjectListingProps> = ({ title, description, thumbnail, image, skills, pos, github_url, site_url, poster_url, paper_url }) => {
    if (pos === 'left') {
        if (github_url || site_url || poster_url || paper_url) {
            return (
                <div className='flex -mb-4'>
                    <div className='flex flex-col items-start justify-start relative px-4 w-2/5 rounded-xl'>
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-0 absolute top-0 left-0 opacity-100 transition-opacity duration-300 ease-in-out' image={thumbnail} alt='/' /> 
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out' image={image} alt='/' /> 
                    </div>
                    <div className='flex flex-col justify-center items-center px-4 w-3/5'>
                        <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
                        <p className='pb-4 pt-2 text-white'>{description}</p>
                        <div className='flex'>
                            { github_url && <a href={github_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fab fa-github text-3xl text-white hover:text-gold" title="GitHub Repo"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { site_url && <a href={site_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fas fa-globe text-3xl text-white hover:text-gold" title="Site Link"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { poster_url && <a href={poster_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fas fa-globe text-3xl text-white hover:text-gold" title="Download Poster"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { paper_url && <a href={paper_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fa fa-file-pdf-o text-3xl text-white hover:text-gold" title="Download Paper"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                        </div>
                        <div className='flex py-2'>
                            { skills && skills.map((skillName: string, index: number) => (
                                <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                                    { skillName }
                                </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flex mb-4'>
                    <div className='flex flex-col items-start justify-start relative px-4 w-2/5 rounded-xl'>
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-0 absolute top-0 left-0 opacity-100 transition-opacity duration-300 ease-in-out' image={thumbnail} alt='/' /> 
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out' image={image} alt='/' /> 
                    </div>
                    <div className='flex flex-col justify-center items-center px-4 w-3/5'>
                        <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
                        <p className='pb-4 pt-2 text-white'>{description}</p>
                        <div className='flex'>
                            { skills && skills.map((skillName: string, index: number) => (
                                <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                                    { skillName }
                                </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        if (github_url || site_url || poster_url || paper_url) {
            return (
                <div className='flex -ml-32'>
                    <div className='flex flex-col justify-center items-center px-4 w-3/5'>
                        <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
                        <p className='pb-4 pt-2 text-white'>{description}</p>
                        <div className='flex'>
                            { github_url && <a href={github_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fab fa-github text-3xl text-white hover:text-gold" title="GitHub Repo"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { site_url && <a href={site_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fas fa-globe text-3xl text-white hover:text-gold" title="Site Link"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { poster_url && <a href={poster_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fas fa-folder text-3xl text-white hover:text-gold" title="Poster"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                            { paper_url && <a href={paper_url} target="_blank" rel="noopener noreferrer" className="nav-link relative px-2">
                                <i className="fa fa-folder text-3xl text-white hover:text-gold" title="Paper"></i>
                                <span className="nav-link-hover"></span>
                            </a> }
                        </div>
                        <div className='flex py-2'>
                            { skills && skills.map((skillName: string, index: number) => (
                                <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                                    { skillName }
                                </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start relative px-4 w-2/5 rounded-xl'>
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-0 absolute top-0 left-0 opacity-100 transition-opacity duration-300 ease-in-out' image={thumbnail} alt='/' /> 
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out' image={image} alt='/' /> 
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flex -ml-32 mb-4'>
                    <div className='flex flex-col justify-center items-center px-4 w-3/5'>
                        <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
                        <p className='pb-4 pt-2 text-white'>{description}</p>
                        <div className='flex'>
                        </div>
                        <div className='flex py-2'>
                            { skills && skills.map((skillName: string, index: number) => (
                                <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                                    { skillName }
                                </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start relative px-4 w-2/5 rounded-xl'>
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-0 absolute top-0 left-0 opacity-100 transition-opacity duration-300 ease-in-out' image={thumbnail} alt='/' /> 
                        <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold hover:opacity-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out' image={image} alt='/' /> 
                    </div>
                </div>
            )
        }
    }
}

export default ProjectListing