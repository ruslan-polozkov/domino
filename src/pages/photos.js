import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "dominoes" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image: file(relativePath: { eq: "dominoes/logo.png" }) {
        id
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("data ===========>", data)
  return (
    <Layout>
      <Img fixed={data.image.childImageSharp.fixed} />
      <Img fluid={data.image.childImageSharp.fluid} />
      <div className="gallery">
        {data.images.nodes.map(image => (
          <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}
      </div>
      <h1>Photos</h1>
    </Layout>
  )
}
