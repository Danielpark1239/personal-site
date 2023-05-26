import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, GatsbyImageProps, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

interface ProjectListingProps {
    title: string
    description: string
    thumbnail: IGatsbyImageData
    image: IGatsbyImageData
    skills: string[]
    id: number
}

const ProjectListing: React.FC<ProjectListingProps> = ({ title, description, thumbnail, image, skills, id }) => {
    return (
        <div className='flex col-2' key={id}>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-lslate rounded-xl group'>
                <GatsbyImage className='rounded-xl hover:opacity-0 absolute top-0 left-0 opacity-100 transition-opacity duration-300 ease-in-out' image={thumbnail} alt='/' /> 
                <GatsbyImage className='rounded-xl hover:opacity-100 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out' image={image} alt='/' /> 
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                </div>
            </div>
            <div>
                { title }
                { description }
                { skills && skills.map((skillName: string, index: number) => (
                    <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                        { skillName }
                    </button>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectListing