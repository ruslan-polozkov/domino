import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const SecondPage = () => {
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

  return(
    <Layout>
      <SEO title="Types game" />
      <div className="wrapper">
        <BackgroundImage
          fluid={data.desktop.childImageSharp.fluid}
        >
          <article className="main types">
            <div className="global-container">
              <div className="main_content">
                <div className="content_title">
                  <h2>{t('types.content_title')}</h2>
                </div>
                <div className="content_img"></div>
                <div className="content_text">{t('types.content_text')}</div>
              </div>
            </div>
          </article>
        </BackgroundImage>
      </div>
    </Layout>
  )
}
export default SecondPage
