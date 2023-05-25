import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, GatsbyImageProps, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

interface ProjectListingProps {
    title: string
    description: string
    thumbnail: IGatsbyImageData
    image: IGatsbyImageData
    skills: string[]
}

const ProjectListing: React.FC<ProjectListingProps> = ({ title, description, thumbnail, image, skills }) => {
    return (
        <>
            {/* <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-lslate rounded-xl group hover:bg-gradient-to-r from-[#7D7D7D] to-lslate'>
                <GatsbyImage className='rounded-xl group-hover:opacity-10' image={image} alt='/' /> 
                <div className='hidden group-hover:block absolåute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{ title }</h3>
                { skills && skills.map((skillName: string) => (
                    <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold">
                        { skillName }
                    </button>
                    ))
                }
                <a href={""}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </a>
                </div>
            </div>
            <div>
                { description }
            </div> */}
        </>
    )
}

export default ProjectListing