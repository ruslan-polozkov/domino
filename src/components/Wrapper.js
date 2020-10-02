import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
// import Image from "./image"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"
import Slider from "./Slider"

import phone from "images/dominoes/phone-domino.png";
import box from "images/dominoes/domino-box.jpg";
import strategy from "images/dominoes/domino-strategy.jpg";
import apple from "images/dominoes/logo-app-store.png";
import google from "images/dominoes/logo-gplay.png";
import advantage01 from "images/dominoes/advantage-1.jpg";
import advantage02 from "images/dominoes/advantage-2.jpg";
import advantage03 from "images/dominoes/advantage-3.jpg";
import advantage04 from "images/dominoes/advantage-4.jpg";

const Wrapper = (props) => {
  const { t } = useTranslation()
  console.log('PROPS ====>', props)

  const heroImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "dominoes/phone-domino.png" }) {
        id
        childImageSharp {
          fixed (
            width: 379
            height: 606
           ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <BackgroundImage
        fluid={props.desktop.childImageSharp.fluid}
      >
        <article className="hero">
        <div className="shadow"></div>
        <div className="global-container">
          <div className="hero_inner">
            <div className="inner_content">
              <h1 className="content_title">{t("home.hero-title")}</h1>
              <p className="content_text">{t("home.hero-text")}</p>
            </div>
            <div className="inner_img">
              <img src={phone} alt="Domino" />
            </div>
          </div>
        </div>
      </article>
      </BackgroundImage>
      <article className="about">
        <div className="global-container">
          <div className="about_inner">
            <div className="inner_img">
              <img src={box} alt="Domino" />
            </div>
            <div className="inner_content">
              <h2 className="content_title">
                <span>{t("about.about-title")}</span>
              </h2>
              <p className="content_text">{t("about.about-text")}</p>
              <div className="content_link">
                <Link to="/about">{t("about.about-anchor")}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <BackgroundImage
        fluid={props.desktop.childImageSharp.fluid}
      >
        <article className="banner">
          <div className="shadow"></div>
          <div className="global-container">
            <div className="banner_inner">
              <div className="inner_title">{t("banner.banner-title")}</div>
              <div className="inner_img">
                <div className="img img_apple">
                  <Link to='/'>
                    <img src={apple} alt="" />
                  </Link>
                </div>
                <div className="img img_google">
                  <Link to='/'>
                    <img src={google} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </BackgroundImage>

      <article className="game-list">
        <div className="global-container">
          <div className="list_inner">
            <Slider />
          </div>
        </div>
      </article>
      <article className="strategy">
        <div className="global-container">
          <div className="strategy_inner">
            <div className="inner_img">
              <img src={strategy} alt="Domino" />
            </div>
            <div className="inner_content">
              <h2 className="content_title">
                <span>{t("strategy.strategy-title")}</span>
              </h2>
              <p className="content_text">{t("strategy.strategy-text")}</p>
              <div className="content_link">
                <Link to="/strategy">{t("strategy.strategy-anchor")}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="advantages">
        <div className="global-container">
          <div className="advantages_inner">
            <div className="inner_context">
              <div className="context_title">{t('advantages.context_title')}</div>
              <div className="context_text">{t('advantages.context_text')}</div>
              <ul className="context_list">
                <li className="list_item">
                  <span className="item_txt" data-advantages-item='01'>{t('advantages.context_list_item_txt_01')}</span>
                </li>
                <li className="list_item">
                  <span className="item_txt" data-advantages-item='02'>{t('advantages.context_list_item_txt_02')}</span>
                </li>
                <li className="list_item">
                  <span className="item_txt" data-advantages-item='03'>{t('advantages.context_list_item_txt_03')}</span>
                </li>
                <li className="list_item">
                  <span className="item_txt" data-advantages-item='04'>{t('advantages.context_list_item_txt_04')}</span>
                </li>
                <li className="list_item">
                  <span className="item_txt" data-advantages-item='05'>{t('advantages.context_list_item_txt_05')}</span>
                </li>
              </ul>
            </div>

            <div className="inner_slides">
              <ul className="slides_list">
                <li className="list_item">
                  <img src={advantage01} alt={t('advantages.context_list_item_txt_01')} />
                </li>
                <li className="list_item">
                  <img src={advantage02} alt={t('advantages.context_list_item_txt_02')} />
                </li>
                <li className="list_item">
                  <img src={advantage03} alt={t('advantages.context_list_item_txt_03')} />
                </li>
                <li className="list_item">
                  <img src={advantage04} alt={t('advantages.context_list_item_txt_04')} />
                </li>
                <li className="list_item">
                  <img src={advantage01} alt={t('advantages.context_list_item_txt_05')} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Wrapper
