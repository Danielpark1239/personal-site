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
                    <ul className="list-disc ml-6 text-sm">
                        { bullets.map((bullet:string, index: number) => (
                            <li key={index}>{ bullet }</li>
                        ))
                        }
                    </ul>
                }
                { skills && skills.map((skillName: string, index: number) => (
                        <button disabled className="m-2 p-1.5 text-sm font-medium text-lblack rounded-xl bg-lslate hover:bg-gold hover:scale-105 ease-in duration-300" key={index}>
                            { skillName }
                        </button>
                    ))
                }
            </div>
        </div>
        <hr className="h-px v-px border-0 bg-gray-400 ml-32 mr-96 my-4"/>
    </>
  )
}

export default ExperienceListing