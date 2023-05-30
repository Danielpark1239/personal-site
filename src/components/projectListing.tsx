import React from 'react'
import { GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'

interface ProjectListingProps {
    title: string
    description: string
    thumbnail: any
    skills: string[]
    pos: string
    github_url?: string
    site_url?: string
    poster_url?: string
    paper_url?: string
}

const ProjectListing: React.FC<ProjectListingProps> = ({ title, description, thumbnail, skills, pos, github_url, site_url, poster_url, paper_url }) => {
    if (pos === 'left') {
        return (
            <div className='grid grid-cols-1 lg:grid-cols-9'>
                <div className='hidden lg:flex lg:col-span-4 lg:col-start-1 2xl:col-span-3 2xl:col-start-2 items-start justify-start relative px-4 rounded-xl'>
                    <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold absolute top-1/2  transform -translate-y-1/2 hover:scale-105 ease-in-out duration-300' objectFit="fill" image={thumbnail.bigger} alt='/' /> 
                </div>
                <div className='relative col-span-1 lg:col-span-5 lg:col-start-5 2xl:col-span-4 flex justify-center items-center px-4 h-auto'>
                    <div className="grid grid-rows-4 s:grid-rows-3 sm:grid-rows-2 lg:grid-rows-none">
                        <div className='row-span-1 flex lg:hidden relative px-4 rounded-xl my-16 md:my-0 -mx-40 xs:-mt-24 mb-6'>
                            <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 ease-in-out duration-300' image={thumbnail.smaller} objectFit="fill" alt='/' />  
                        </div>
                        <div className="row-span-3 s:row-span-2 sm:row-span-1 flex flex-col justify-center items-center">
                            <h3 className='text-2xl text-white tracking-wider hover:text-gold'>
                                {title}
                                <span className="pl-2">
                                    { github_url && <a href={github_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fab fa-github text-3xl text-white group-hover:text-gold hover:scale-110 ease-in duration-300" title="GitHub Repo"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { site_url && <a href={site_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fas fa-globe text-3xl text-white hover:text-gold group-hover:scale-110 ease-in duration-300" title="Site Link"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { poster_url && <a href={poster_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fa fa-file-pdf-o text-3xl text-white hover:text-gold group-hover:scale-110 ease-in duration-300" title="Poster"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { paper_url && <a href={paper_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fa fa-file-pdf-o text-3xl text-white group-hover:text-gold hover:scale-110 ease-in duration-300" title="Paper"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                </span>
                            </h3>
                            <p className='pb-4 pt-2 text-lslate md:px-8 lg:px-12 xl:px-16 2xl:px-24'>{description}</p>
                            <div className='flex flex-wrap py-2'>
                                { skills && skills.map((skillName: string, index: number) => (
                                    <button disabled className="m-2 p-1.5 text-sm text-lgreen rounded-xl font-medium bg-teal-400/10" key={index}>
                                        { skillName }
                                    </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='grid grid-cols-1 lg:grid-cols-9'>
                <div className='relative col-span-1 lg:col-span-5 lg:col-start-1 2xl:col-span-4 2xl:col-start-2 flex flex-col justify-center items-center px-4 h-auto'>
                    <div className="grid grid-rows-4 s:grid-rows-3 sm:grid-rows-2 lg:grid-rows-none">
                        <div className='row-span-1 flex lg:hidden relative px-4 rounded-xl my-16 md:my-0 -mx-40 xs:-mt-24 mb-6'>
                            <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 ease-in-out duration-300' image={thumbnail.smaller} alt='/' />
                        </div>
                        <div className="row-span-3 s:row-span-2 sm:row-span-1 flex flex-col justify-center items-center">
                            <h3 className='text-2xl text-white tracking-wider hover:text-gold'>
                                {title}
                                <span className="pl-2">
                                    { github_url && <a href={github_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fab fa-github text-3xl text-white group-hover:text-gold hover:scale-110 ease-in duration-300" title="GitHub Repo"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { site_url && <a href={site_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fas fa-globe text-3xl text-white hover:text-gold group-hover:scale-110 ease-in duration-300" title="Site Link"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { poster_url && <a href={poster_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fa fa-file-pdf-o text-3xl text-white hover:text-gold group-hover:scale-110 ease-in duration-300" title="Poster"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                    { paper_url && <a href={paper_url} target="_blank" rel="noopener noreferrer" className="nav-link relative mx-2 group-hover:text-gold group">
                                        <i className="fa fa-file-pdf-o text-3xl text-white group-hover:text-gold hover:scale-110 ease-in duration-300" title="Paper"></i>
                                        <span className="nav-link-hover group-hover"></span>
                                    </a> }
                                </span>
                            </h3>
                            <p className='pb-4 pt-2 text-lslate md:px-8 lg:px-12 xl:px-16 2xl:px-24'>{description}</p>
                            <div className='flex flex-wrap py-2'>
                                { skills && skills.map((skillName: string, index: number) => (
                                    <button disabled className="m-2 p-1.5 text-sm text-lgreen rounded-xl font-medium bg-teal-400/10" key={index}>
                                        { skillName }
                                    </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex lg:col-span-4 lg:col-start-6 2xl:col-span-3 items-start justify-start relative px-4 rounded-xl'>
                    <GatsbyImage className='rounded-xl shadow-lg shadow-gray-400 hover:shadow-gold absolute top-1/2  transform -translate-y-1/2 hover:scale-105 ease-in-out duration-300' image={thumbnail.bigger} alt='/' /> 
                </div>
            </div>
        )
    }
}

export default ProjectListing