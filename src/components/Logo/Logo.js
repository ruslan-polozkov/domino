import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Logo = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      logo: file(relativePath: { eq: "/dominoes/logo.png" }) {
        id
        childImageSharp {
          fixed (
            width: 100
            height: 100
           ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log('=============================================' ,data)
  return (
    <Link to="/">
      <Img
        fixed={data.logo.childImageSharp.fixed}
        alt="Domino"
      />
      <span>Dominoes</span>
    </Link>
  )
}

export default Logo;
