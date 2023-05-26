import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectListing from './projectListing'

const Projects: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { order: ASC }} filter: {internal: { contentFilePath: {regex: "/projects/"}}})  {
        edges {
          node {
            id
            frontmatter {
              title
              description
              order
              skills
              thumbnail {
                childImageSharp {
                  normal:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                    height: 100
                    width: 100
                  )
                }
              }
              image {
                childImageSharp {
                  normal:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                    height:100
                    width:100
                  )
                }
              }
            }
          }
        }
      }
    }`
  )
  const projects = data.allMdx.edges.map(({node}: any) => {
    return (
      <ProjectListing 
        title={node.frontmatter.title} 
        description={node.frontmatter.description} 
        image={node.frontmatter.image.childImageSharp.normal}
        thumbnail={node.frontmatter.thumbnail.childImageSharp.normal}
        skills={node.frontmatter.skills}
        id={node.id}
        key={node.id}
      />
    )
  })

  return (
    <div className="w-full bg-navy text-lslate pb-8">
      <h1 className="text-lg text-gold uppercase mx-32 tracking-widest">Personal Projects </h1>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='mx-32 grid grid-cols-2'>
          { projects }
        </div>
      </div>
    </div>

  );
};

export default Projects;