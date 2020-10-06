import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./logo.scss"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query Logotype {
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

  return (
    <div className="logo">
      <Link to="/">
        <Img fixed={data.image.childImageSharp.fixed} alt="Domino" />
        <span>Dominoes</span>
      </Link>
    </div>
  )
}

export default Logo
