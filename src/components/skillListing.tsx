
import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface SkillsProps {
    languages: SkillListingProps[]
    frameworks: SkillListingProps[]
    other: SkillListingProps[]
}

interface SkillListingProps {
    name: string
    image: any
}

const SkillListing:React.FC<SkillsProps> = ({ languages, frameworks, other }) => {
  return (
    <>
        <h2 className='py-4 -mx-2 text-lslate'>Languages</h2>
        <div className='-mx-2 mb-4 grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {languages.map(
                ({name, image}: SkillListingProps, index: number) => (
                    <div className='p-6 shadow-lg shadow-gray-400 hover:shadow-gold rounded-xl group group-hover:scale-105 ease-in duration-300' key={index}>
                        <div className='grid grid-cols-2 xl:grid-cols-8 gap-4 justify-center items-center'>
                            <div className='col-span-1 xl:col-span-3 m-auto'>
                                <GatsbyImage image={ image.childImageSharp.normal } alt='/'/>
                            </div>
                            <div className='col-span-1 xl:col-span-5 flex flex-col items-center justify-center group-hover:text-gold ease-in duration-300'>
                                <h3>{ name }</h3>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
        <h2 className='py-4 -mx-2 text-lslate'>Frameworks</h2>
        <div className='-mx-2 mb-4 grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {frameworks.map(
                ({name, image}: SkillListingProps, index: number) => (
                    <div className='p-6 shadow-lg shadow-gray-400 hover:shadow-gold rounded-xl group group-hover:scale-105 ease-in duration-300' key={index}>
                        <div className='grid grid-cols-2 xl:grid-cols-8 gap-4 justify-center items-center'>
                            <div className='col-span-1 xl:col-span-3 m-auto'>
                                <GatsbyImage image={ image.childImageSharp.normal } alt='/'/>
                            </div>
                            <div className='col-span-1 xl:col-span-5 flex flex-col items-center justify-center group-hover:text-gold ease-in duration-300'>
                                <h3>{ name }</h3>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
        <h2 className='py-4 -mx-2 text-lslate'>Other</h2>
        <div className='-mx-2 mb-4 grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {other.map(
                ({name, image}: SkillListingProps, index: number) => (
                    <div className='p-6 shadow-lg shadow-gray-400 hover:shadow-gold rounded-xl group group-hover:scale-105 ease-in duration-300' key={index}>
                        <div className='grid grid-cols-2 xl:grid-cols-8 gap-4 justify-center items-center'>
                            <div className='col-span-1 xl:col-span-3 m-auto'>
                                <GatsbyImage image={ image.childImageSharp.normal } alt='/'/>
                            </div>
                            <div className='col-span-1 xl:col-span-5 flex flex-col items-center justify-center group-hover:text-gold ease-in duration-300'>
                                <h3>{ name }</h3>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    </>
  )
}

export default SkillListing