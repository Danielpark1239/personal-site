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
              thumbnail {
                childImageSharp {
                  normal:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                    height: 270
                    width: 480
                  )
                }
              }
              image {
                childImageSharp {
                  normal:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                    height: 270
                    width: 480
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
        pos={node.frontmatter.pos}
        github_url={node.frontmatter.github_url}
        site_url={node.frontmatter.site_url}
        poster_url={node.frontmatter.poster_url}
        paper_url={node.frontmatter.paper_url}
        key={node.id}
      />
    )
  })

  return (
    <div className="w-full bg-navy text-lslate py-8">
      <h1 className="text-lg text-gold uppercase mx-32 tracking-widest">Personal Projects </h1>
      <div className='flex flex-col gap-36 mx-32 max-w-[1240px] py-4'>
        { projects }
      </div>
    </div>

  );
};

export default Projects;