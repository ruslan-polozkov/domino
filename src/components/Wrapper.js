import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useTranslation } from "react-i18next"
import SliderMy from "./Slider"
import Slider from "react-slick"

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import phone from "images/dominoes/phone-domino.png"
import box from "images/dominoes/domino-box.jpg"
import strategy from "images/dominoes/domino-strategy.jpg"
import apple from "images/dominoes/logo-app-store.png"
import apptest from "images/dominoes/apptest.svg"
import google from "images/dominoes/logo-gplay.png"
import googleEn from "images/dominoes/google-play-badge.png"
import advantage01 from "images/dominoes/advantage-1.jpg"
import advantage02 from "images/dominoes/advantage-2.jpg"
import advantage03 from "images/dominoes/advantage-3.jpg"
import advantage04 from "images/dominoes/advantage-4.jpg"
import arrowRight from "images/dominoes/right-arrow.png"
import i18n from "../i18n/config"
// import AppBanner from "smart-app-banner-react"

const Wrapper = props => {
  const { t } = useTranslation()
  const [accordionState, accordionSetState] = useState("01")
  // const appInfo = {
  //   imageUrl:
  //     "https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw",
  //   name: "Dominoes",
  //   publisher: "Dominoes",
  //   infoText: "Dominoes best game",
  //   linkButtonText: "VIEW",
  //   linkUrl:
  //     "https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en",
  // }
  const settingsSlider = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  }

  function accordionStateChange(event) {
    accordionSetState(event.target.closest(".list_item").dataset.advantagesItem)

    const slidersArr = document.querySelectorAll(".inner_slides .list_item")
    const menuArr = document.querySelectorAll(".context_list .list_item")

    menuArr.forEach(item => item.classList.remove("active"))
    slidersArr.forEach(item => {
      if (item.getAttribute("data-slider-item") === accordionState) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })

    event.target.closest(".list_item").classList.add("active")
  }

  function highLight () {
    const menuArr = document.querySelectorAll(".advantages .context_list .list_item")

    if (!menuArr.length || menuArr.length === 15) return;

    const slideArr = document.querySelectorAll('.advantages .inner_slides .list_item')
    const active = [...menuArr].find(item => item.classList.contains('active'))
    const activeIndex = +active.getAttribute('data-advantages-item')
    const nextElem = [...menuArr].find(item => (+item.getAttribute('data-advantages-item') - 1) === activeIndex)

    slideArr.forEach(item => item.classList.remove('active'))

    if (menuArr.length === +active.getAttribute('data-advantages-item')) {
      menuArr[0].classList.add('active')
      slideArr[0].classList.add('active')
    } else {
      nextElem.classList.add('active')
      slideArr[activeIndex].classList.add('active')
    }

    active.classList.remove('active')
  }

  useEffect(() => {
    if (props.path === '/' && window.innerWidth >= 721) {
      setInterval(highLight, 5000)
    }
  }, [props.path])

  return (
    <div className="wrapper">
      {/*<AppBanner*/}
      {/*  appInfo={appInfo}*/}
      {/*  position="top"*/}
      {/*  onClose={() => {*/}
      {/*    console.log('onClose called');*/}
      {/*  }}*/}
      {/*  hidden={false}*/}
      {/*  style={{*/}
      {/*    zIndex: 10,*/}
      {/*  }}*/}
      {/*/>*/}
      <BackgroundImage fluid={props.desktop.childImageSharp.fluid}>
        <article className="hero">
          <div className="shadow"></div>
          <div className="global-container">
            <div className="hero_inner">
              <div className="inner_content">
                <h1 className="content_title">{t("home.hero-title")}</h1>
                <p className="content_text">{t("home.hero-text")}</p>
                <div className="content_img">
                  <div className="img img_apple">
                    <Link to="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                      <img src={i18n.language === 'ru' ? apple : apptest} alt="Dominoes" />
                    </Link>
                  </div>
                  <div className="img img_google">
                    <Link to="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
                      <img src={i18n.language === 'ru' ? google : googleEn} alt="Dominoes" />
                    </Link>
                  </div>
                </div>
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
                <span>{t("istoriya-domino.about-title")}</span>
              </h2>
              <p className="content_text">{t("istoriya-domino.about-text")}</p>
              <div className="content_link">
                <Link to={i18n.language === "ru" ? "/istoriya-domino" : "/history-of-dominoes"}>{t("istoriya-domino.about-anchor")}</Link>
                <img src={arrowRight} alt="Dominoes" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <BackgroundImage fluid={props.desktop.childImageSharp.fluid}>
        <article className="banner">
          <div className="shadow"></div>
          <div className="global-container">
            <div className="banner_inner">
              <div className="inner_title">{t("banner.banner-title")}</div>
              <div className="inner_img">
                <div className="img img_apple">
                  <Link to="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                    <img src={i18n.language === 'ru' ? apple : apptest} alt="Dominoes" />
                  </Link>
                </div>
                <div className="img img_google">
                  <Link to="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
                    <img src={i18n.language === 'ru' ? google : googleEn} alt="Dominoes" />
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
            <SliderMy />
          </div>
        </div>
      </article>
      <article className="strategy" style={{ backgroundColor: "#fafafa" }}>
        <div className="global-container">
          <div className="strategy_inner">
            <div className="inner_img">
              <img src={strategy} alt="Domino" />
            </div>
            <div className="inner_content">
              <h2 className="content_title">
                <span>{t("strategiya-v-domino.strategy-title")}</span>
              </h2>
              <p className="content_text">{t("strategiya-v-domino.strategy-text")}</p>
              <div className="content_link">
                <Link to={i18n.language === "ru" ? "/strategiya-v-domino" : "/how-to-play-dominoes"}>{t("strategiya-v-domino.strategy-anchor")}</Link>
                <img src={arrowRight} alt="Dominoes" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="advantages">
        <div className="global-container">
          <div className="advantages_inner">
            <div className="inner_context">
              <div className="context_title">
                <span>{t("advantages.context_title")}</span>
              </div>
              <div className="context_text">{t("advantages.context_text")}</div>
              <ul className="context_list slick-center-wrap">
                <Slider {...settingsSlider}>
                  <li
                    className="list_item active"
                    data-advantages-item="01"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src={advantage01}
                      alt={t("advantages.context_list_item_txt_01")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_01")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="02"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src={advantage02}
                      alt={t("advantages.context_list_item_txt_02")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_02")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="03"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src={advantage03}
                      alt={t("advantages.context_list_item_txt_03")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_03")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="04"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src={advantage04}
                      alt={t("advantages.context_list_item_txt_04")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_04")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="05"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src={advantage01}
                      alt={t("advantages.context_list_item_txt_05")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_05")}
                    </span>
                  </li>
                </Slider>
              </ul>
            </div>

            <div className="inner_slides">
              <ul className={"slides_list "}>
                <li className="list_item active" data-slider-item="01">
                  <img
                    src={advantage01}
                    alt={t("advantages.context_list_item_txt_01")}
                  />
                </li>
                <li className="list_item" data-slider-item="02">
                  <img
                    src={advantage02}
                    alt={t("advantages.context_list_item_txt_02")}
                  />
                </li>
                <li className="list_item" data-slider-item="03">
                  <img
                    src={advantage03}
                    alt={t("advantages.context_list_item_txt_03")}
                  />
                </li>
                <li className="list_item" data-slider-item="04">
                  <img
                    src={advantage04}
                    alt={t("advantages.context_list_item_txt_04")}
                  />
                </li>
                <li className="list_item" data-slider-item="05">
                  <img
                    src={advantage01}
                    alt={t("advantages.context_list_item_txt_05")}
                  />
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
