import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectListing from './projectListing';

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
              pos
              github_url
              site_url
              poster_url
              paper_url
              picture_url
              thumbnail {
                childImageSharp {
                  smaller:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 100
                    width: 368
                    height: 207
                  )
                  bigger:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 100
                    width: 480
                    height: 270
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
        thumbnail={node.frontmatter.thumbnail.childImageSharp}
        skills={node.frontmatter.skills}
        pos={node.frontmatter.pos}
        github_url={node.frontmatter.github_url}
        site_url={node.frontmatter.site_url}
        poster_url={node.frontmatter.poster_url}
        paper_url={node.frontmatter.paper_url}
        picture_url={node.frontmatter.picture_url}
        key={node.id}
      />
    )
  })

  return (
    <div className="w-screen bg-navy text-lslate">
      <div className="flex flex-wrap flex-col align-center content-center justify-start">
        <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-3/5 mb-12 sm:mb-0">
          <h1 className="text-lg text-gold uppercase tracking-widest -pb-4 lg:pb-2">Personal Projects</h1>
        </div>
      </div>
      <div className='p-8 xl:px-24 flex flex-col xs:mt-12 s:mt-20 lg:mt-0 xs:gap-28 sm:gap-20 md:gap-24 align-center content-center justify-start py-4'>
        { projects }
      </div>
    </div>

  );
};

export default Projects;