import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import LanguageMenu from "./languageMenu"
import i18n from "./../i18n/config";

const Navigation = () => {
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {

  })

  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            <Link
              to={i18n.language === "ru" ? "/istoriya-domino" : "/history-of-dominoes"}>{t("header.header-about")}
            </Link>
          </li>
          <li
            onMouseOver={(event) => setOpenMenu(true)}
            onMouseLeave={(event) => setOpenMenu(false)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span className="item_title">
              {t("header.header-types")}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path></svg>
            </span>
            <div className="item_menu">
              <div className="menu_item">
                <Link
                  to={i18n.language === 'ru' ? "/domino-online" : "/dominoes-online"}>
                  {t("header.header-types-domino-online")}
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  to={i18n.language === 'ru' ? "/domino-klassicheskoe" : "/dominoes-rules"}>
                  {t("header.header-types-domino-klassicheskoe")}
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  to={i18n.language === 'ru' ? "/domino-5" : "/all-fives-dominoes"}>{t("header.header-types-domino-5")}
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  to={i18n.language === "ru" ? "/domino-blok" : "/blocks-dominoes"}>{t("header.header-types-domino-blok")}
                </Link>
              </div>
            </div>
          </li>
          <li className="list_item">
            <Link
              to={i18n.language === "ru" ? "/strategiya-v-domino" : "/how-to-play-dominoes"}>
              {t("header.header-strategy")}
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageMenu />
    </div>
  )
}

export default Navigation
