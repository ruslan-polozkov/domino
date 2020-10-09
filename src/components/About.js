import BackgroundImage from "gatsby-background-image"
import React from "react"

const About = () => (
  <div className="wrapper">
    <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
      <article className="main about">
        <div className="global-container">
          <div className="main_content">
            <div className="content_title">
              <h2>{t("istoriya-domino.content_title")}</h2>
            </div>
            <div className="content_img"></div>
            <div className="content_text">{t("istoriya-domino.content_text")}</div>
          </div>
        </div>
      </article>
    </BackgroundImage>
  </div>
)

export default About

