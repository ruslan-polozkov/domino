import React from "react"
import { BrowserRouter } from "react-router-dom"
import Layout from "../components/layout"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import i18n from "./../i18n/config"
import AppBanner from "smart-app-banner-react"

const IndexPage = ({ path, children }) => {
  const { t } = useTranslation()
  const appInfo = {
    imageUrl:
      "https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw",
    name: "Dominoes",
    publisher: "Dominoes",
    infoText: "Dominoes best game",
    linkButtonText: "VIEW",
    linkUrl:
      "https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en",
  }
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
  data.path = path

  return (
      <BrowserRouter>
        <Layout path={path}>
          <SEO title="Home" />
          <Wrapper {...data} />
        </Layout>
      </BrowserRouter>
  )
}

export default IndexPage
