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
                      quality: 100
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
                      quality: 100
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
                      quality: 100
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
    <div  id='skills' className='w-screen grid grid-cols-11 md:grid-cols-8 xl:grid-cols-7 2xl:grid-cols-11 bg-navy text-white p-2 py-24 flex-col justify-center'>
      <div className="col-span-9 col-start-2 md:col-span-6 md:col-start-2 xl:col-start-2 xl:col-span-5 2xl:col-start-3 2xl:col-span-7">
        <p className='text-lg -mx-2 tracking-widest uppercase text-gold'>
          Skills
        </p>
        { skills }
      </div>
    </div>
    );
  };

export default Skills;