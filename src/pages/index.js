import React from "react"

import Layout from "../components/layout"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"

const IndexPage = (props) => {
  console.log('props', props);
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper {...props} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "main-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
