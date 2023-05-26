import React from 'react'

interface ExperienceListingProps {
    dates: string
    role: string
    orgName: string
    orgLink: string
    description?: string
    bullets?: string[]
    skills?: string[]
}

const ExperienceListing: React.FC<ExperienceListingProps>  = ({ dates, role, orgName, orgLink, description, bullets, skills }) => {
  return (
    <>
        <div className="container mx-32 grid grid-cols-6 ">
            <div className="items-center justify-start col-span-1 my-4">
                <p className="text-sm w-fit">{ dates }</p>
            </div>
            <div className="w-fit col-span-5 p-4">
                <h3 className="text-md text-white font-bold mb-1">{ role + " "}
                <a href={ orgLink } target="_blank" rel="noopener noreferrer" className="nav-link hover:text-gold relative">
                    { '@' + orgName }
                    <span className="nav-link-hover"></span>
                </a>
                <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                </h3>
                { description &&
                    <p className="text-sm mb-1">{ description }</p>
                }

                { bullets && 
                    <ul className="list-disc ml-6 text-sm">
                        { bullets.map((bullet:string, index: number) => (
                            <li key={index}>{ bullet }</li>
                        ))
                        }
                    </ul>
                }
                { skills && skills.map((skillName: string, index: number) => (
                        <button disabled className="m-2 p-1.5 text-sm text-white rounded-full bg-navy border-2 border-gold" key={index}>
                            { skillName }
                        </button>
                    ))
                }
            </div>
        </div>
        <hr className="h-px v-px border-0 bg-gray-400 ml-32 mr-96"/>
    </>
  )
}

export default ExperienceListing