import React from "react"
import { Link } from "gatsby"
import Image from "./image"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"

const Wrapper = (props) => {
  const { t } = useTranslation()
  console.log('PROPS ====>', props)
  return (
    <div className="wrapper">
      <BackgroundImage
        Tag={`section`}
        id={`test`}
        className={'LIVERPOOL'}
        fluid={props.data.desktop.childImageSharp.fluid}
      >
      <article className="hero">
        <div className="global-container">
          <div className="hero_inner">
            <div className="inner_content">
              <h1 className="content_title">{t("home.hero-title")}</h1>
              <p className="content_text">{t("home.hero-text")}</p>
            </div>
            <div className="inner_img">
              Картинка
            </div>
          </div>
        </div>
      </article>
      </BackgroundImage>
      <article className="about">
        <div className="global-container">
          <div className="about_inner">
            <div className="inner_img">Какая то картинка</div>
            <div className="inner_content">
              <h2 className="content_title">{t("about.about-title")}</h2>
              <p className="content_text">{t("about.about-text")}</p>
              <Link to="/about">{t("about.about-anchor")}</Link>
            </div>
          </div>
        </div>
      </article>
      <article className="banner">
        <div className="global-container">
          <div className="banner_inner">
            <div className="inner_title">{t("banner.banner-title")}</div>
            <div className="inner_img">Какая то картинка</div>
          </div>
        </div>
      </article>
      <article className="game-list">
        <div className="global-container">
          <div className="list_inner">
            <div className="inner_item"></div>
            <div className="inner_item"></div>
            <div className="inner_item"></div>
            <div className="inner_item"></div>
          </div>
        </div>
      </article>
      <BackgroundImage
        fluid={props.data.desktop.childImageSharp.fluid}
      >
      <article className="strategy">
        <div className="global-container">
          <div className="strategy_inner">
            <div className="inner_img">Какая то картинка</div>
            <div className="inner_content">
              <h2 className="content_title">{t("strategy.strategy-title")}</h2>
              <p className="content_text">{t("strategy.strategy-text")}</p>
              <Link to="/strategy">{t("strategy.strategy-anchor")}</Link>
            </div>
          </div>
        </div>
      </article>
      </BackgroundImage>
    </div>
  )
}

export default Wrapper
