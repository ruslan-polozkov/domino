import React, { useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import fives from "images/dominoes/second-pages/all-fives-dominoes.jpeg"
import blockDominoes from "images/dominoes/second-pages/blocks-dominoes.jpg"
import online from "images/dominoes/second-pages/dominoes-online.jpg"
import rules from "images/dominoes/second-pages/dominoes-rules.jpg"
import history from "images/dominoes/second-pages/history-of-dominoes.jpg"
import strategy from "images/dominoes/second-pages/strategiya-v-domino.jpg"

const Wrapper = path => {
  let heroImage;
  // const intl = useIntl()
  // console.log('wrapper second intl', intl)
  const { t } = useTranslation()
  const pathRoute = path.props ? path.props.replace(/\//g, '') : path.replace(/\//g, '');
  // const pathRoute = path.props.replace(`/${intl.locale}/`, '').replace(/\//g, '')
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

  // useEffect(() => {
  //   let htmlText = JSON.stringify(t(`${pathRoute}.content_text`))
  //   document.querySelector('.content_test').append(htmlText);
  // })

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
              <div className="content_text">{t(`${pathRoute}.content_text`)}</div>
            </div>
          </div>
        </article>
      </BackgroundImage>
    </div>
  )
}

export default Wrapper
