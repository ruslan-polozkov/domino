import React from "react"

import Layout from "../components/layout"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
// import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = ({ path, children }) => {
  // const intl = useIntl()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "dominoes/main-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  // console.log('intl ====>', intl)
  // console.log('intl ====>', intl.messages)
  data.path = path

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper {...data} />
    </Layout>
  )
}

export default IndexPage
