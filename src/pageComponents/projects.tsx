import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectListing from '../components/ProjectListing';

const Projects: React.FC = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMdx  {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             description
  //             order
  //             skills
  //             thumbnail {
  //               childImageSharp {
  //                 normal:gatsbyImageData(
  //                   layout: CONSTRAINED
  //                   placeholder: BLURRED
  //                   quality: 50
  //                 )
  //               }
  //             }
  //             image {
  //               childImageSharp {
  //                 normal:gatsbyImageData(
  //                   layout: CONSTRAINED
  //                   placeholder: BLURRED
  //                   quality: 50
  //                 )
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`)

  //   const projects = data.allMdx.edges.map( ({node}: any) => 
  //     <ProjectListing 
  //       title={node.frontmatter.title} 
  //       description={node.frontmatter.description} 
  //       image={node.frontmatter.image.childImageSharp.normal}
  //       thumbnail={node.frontmatter.thumbnail.childImageSharp.normal}
  //       skills={node.frontmatter.skills}
  //     />)

  return (
    <div className="w-full bg-navy text-lslate pb-8">
      <h1 className="text-lg text-gold uppercase mx-32 tracking-widest">Personal Projects </h1>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* { projects } */}
        </div>
      </div>
    </div>
    
  );
};

export default Projects;