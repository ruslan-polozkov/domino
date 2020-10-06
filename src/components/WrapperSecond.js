import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"

const Wrapper = path => {
  const { t } = useTranslation()
  const pathRoute = path.props.replace(/\//g, '');
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
    <div className="wrapper">
      <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
        <article className={"main " + pathRoute}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>{t(`${pathRoute}.content_title`)}</h2>
              </div>
              <div className="content_img"></div>
              <div className="content_text">{t(`${pathRoute}.content_text`)}</div>
            </div>
          </div>
        </article>
      </BackgroundImage>
    </div>
  )
}

export default Wrapper
