import React, { useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"

import fives from "images/dominoes/second-pages/all-fives-dominoes.jpeg"
import blockDominoes from "images/dominoes/second-pages/blocks-dominoes.jpg"
import online from "images/dominoes/second-pages/dominoes-online.jpg"
import rules from "images/dominoes/second-pages/dominoes-rules.jpg"
import history from "images/dominoes/second-pages/history-of-dominoes.jpg"
import strategy from "images/dominoes/second-pages/strategiya-v-domino.jpg"

const Wrapper = path => {
  let heroImage;
  const { t, i18n } = useTranslation()
  const pathRoute = path.props ? path.props.replace(/\//g, '') : path.replace(/\//g, '');
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

  if (pathRoute === 'history-of-dominoes' || pathRoute === 'istoriya-domino') {
    heroImage = history;
  } else if (pathRoute === 'how-to-play-dominoes' || pathRoute === 'strategiya-v-domino') {
    heroImage = strategy;
  } else if (pathRoute === 'dominoes-online' || pathRoute === 'domino-online') {
    heroImage = online;
  } else if (pathRoute === 'dominoes-rules' || pathRoute === 'domino-klassicheskoe') {
    heroImage = rules;
  } else if (pathRoute === 'all-fives-dominoes' || pathRoute === 'domino-5') {
    heroImage = fives;
  } else {
    heroImage = blockDominoes;
  }

  if (!i18n.language) {
    if (
      pathRoute === 'istoriya-domino' ||
      pathRoute === 'strategiya-v-domino' ||
      pathRoute === 'domino-online' ||
      pathRoute === 'domino-klassicheskoe' ||
      pathRoute === 'domino-5'
    ) {
      i18n.changeLanguage('ru')
    }
  }

  return (
    <div className="wrapper">
      <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
        <article className={"main " + pathRoute}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>{t(`${pathRoute}.content_title`)}</h2>
              </div>
              <div className="content_img">
                <img src={heroImage} alt="Dominoes" />
              </div>
              <div className="content_text">
                {Object.values(t(`${pathRoute}.p`)[0]).map((keyName, i) => (
                  <p className="text_paragraph" key={i}>
                    {keyName}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </BackgroundImage>
    </div>
  )
}

export default Wrapper
