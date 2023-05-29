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
    <div  id='skills' className='bg-navy text-white p-2 py-24 px-32 w-full max-w-[1240px] flex-col justify-center'>
      <p className='text-lg -mx-2 tracking-widest uppercase text-gold'>
        Skills
      </p>
      { skills }
    </div>
    );
  };

export default Skills;