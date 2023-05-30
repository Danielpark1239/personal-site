import React from 'react'

interface ExperienceListingProps {
    dates: string
    role: string
    orgName: string
    orgLink: string
    description?: string
    bullets?: string[]
    skills?: string[]
    hr?: boolean
}

const ExperienceListing: React.FC<ExperienceListingProps>  = ({ dates, role, orgName, orgLink, description, bullets, skills, hr }) => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-8">
            <div className="hidden md:block md:col-span-1 lg:col-span-2 items-center justify-start my-4">
                <p className="text-sm">{ dates }</p>
            </div>
            <div className="col-span-1 md:col-span-7 lg:col-span-6 justify-start p-4">
                <p className="block md:hidden text-sm">{ dates }</p>
                <h3 className="text-md text-white font-bold mb-1">{ role + " "}
                <a href={ orgLink } target="_blank" rel="noopener noreferrer" className="nav-link group-hover:text-gold relative group">
                    <span className='group-hover:text-gold'>{ '@' + orgName + '   '}</span>
                    <i className="fa-solid fa-external-link text-md text-white group-hover:text-gold" />
                    <span className="nav-link-hover group-hover:text-gold"></span>
                </a>
                </h3>
                { description &&
                    <p className="text-sm mb-1">{ description }</p>
                }

                { bullets && 
                    <ul className="list-disc ml-6 text-sm m">
                        { bullets.map((bullet:string, index: number) => (
                            <li key={index} className="p-1">{ bullet }</li>
                        ))
                        }
                    </ul>
                }
                { skills && skills.map((skillName: string, index: number) => (
                        <button disabled className="m-2 p-1.5 text-sm font-medium text-lgreen rounded-xl bg-teal-400/10" key={index}>
                            { skillName }
                        </button>
                    ))
                }
                </div>
            </div>
        { hr && 
            <hr className="h-px v-px border-0 bg-gray-400 flex m-auto items-center my-4"/>
        }
    </>
  )
}

export default ExperienceListing