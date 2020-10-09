import React, { Component, useEffect } from "react"
import Slider from "react-slick"
import { useTranslation } from "react-i18next"

import { Link } from "gatsby"

const SliderMy = () => {
  const { t } = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_01")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_01")}</div>
            <div className="inner_link">
              <Link to={"/dyenesh-blocks"} target="_blank">{t("slider.slider_item_more")}</Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_02")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_02")}</div>
            <div className="inner_link">
              <Link to="/classic-game">{t("slider.slider_item_more")}</Link>
            </div>
          </div>
        </div>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_03")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_03")}</div>
            <div className="inner_link">
              <Link to="/domino-5">{t("slider.slider_item_more")}</Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_04")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_04")}</div>
            <div className="inner_link">
              <Link to="/domino-online">{t("slider.slider_item_more")}</Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderMy
