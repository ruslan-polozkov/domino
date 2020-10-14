import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"
import BackgroundImage from "gatsby-background-image"

import gifTravolta from "images/dominoes/second-pages/travolta-1.gif"

const NotFoundPage = ({ path, children }) => {
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
  return (
    <Layout>
      <SEO title="Domino game" />
      <div className="wrapper">
        <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
          <article className={"main " + 'error'}>
            <div className="global-container">
              <div className="main_content">
                <div className="content_title">
                  <h2>{t(`error.content_title`)}</h2>
                  <Link to={'/'}>
                    {t(`error.content_link`)}
                  </Link>
                </div>
                <div className="content_img">
                  <img src={gifTravolta} alt="Dominoes" />
                </div>
              </div>
            </div>
          </article>
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default NotFoundPage
