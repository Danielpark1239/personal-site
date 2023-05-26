import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SkillListing from './skillListing';

const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {internal: { contentFilePath: {regex: "/skills/"}}}) {
        edges {
          node {
            id
            frontmatter {
              languages {
                name
                image {
                  childImageSharp {
                    normal:gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      quality: 50
                      height: 64
                      width: 64
                    )
                  }
                }
              }
              frameworks {
                name
                image {
                  childImageSharp {
                    normal:gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      quality: 50
                      height: 64
                      width: 64
                    )
                  }
                }
              }
              other {
                name
                image {
                  childImageSharp {
                    normal:gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      quality: 50
                      height: 64
                      width: 64
                    )
                  }
                }
              }
            }
          }
        }
      }
    }`)

    const skills = data.allMdx.edges.map(
      ({node}: any) => {
        return (
          <SkillListing 
            languages={ node.frontmatter.languages }
            frameworks={ node.frontmatter.frameworks }
            other={ node.frontmatter.other }
            key={ node.id }
          />
        )
      }
    )
  return (
    <div className="bg-navy text-white py-24">
      <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-32 flex-col justify-center h-full'>
          <p className='text-lg -mx-2 tracking-widest uppercase text-gold'>
            Skills
          </p>
          { skills }
        </div>
      </div>
    </div>
    );
  };

export default Skills;