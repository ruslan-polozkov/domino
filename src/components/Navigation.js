import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import LanguageMenu from "./languageMenu"

const Navigation = () => {
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (openMenu && !event.target.closest('.list_item.open')) {
        setOpenMenu(!openMenu)
      }
    })
  })

  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            <Link to={"/istoriya-domino"}>{t("header.header-about")}</Link>
          </li>
          <li className="list_item">
            <Link to={"/advantages"}>{t("header.header-advantages")}</Link>
          </li>
          <li
            onClick={() => setOpenMenu(!openMenu)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span className="item_title">{t("header.header-types")}</span>
            <div className="item_menu">
              <div className="menu_item">
                <Link to={"/domino-online"}>{t("header.header-types-domino-online")}</Link>
              </div>
              <div className="menu_item">
                <Link to={"/domino-klassicheskoe"}>{t("header.header-types-domino-klassicheskoe")}</Link>
              </div>
              <div className="menu_item">
                <Link to={"/domino-5"}>{t("header.header-types-domino-5")}</Link>
              </div>
              <div className="menu_item">
                <Link to={"/domino-blok"}>{t("header.header-types-domino-blok")}</Link>
              </div>
            </div>
          </li>
          <li className="list_item">
            <Link to={"/strategiya-v-domino"}>{t("header.header-strategy")}</Link>
          </li>
        </ul>
      </nav>
      <LanguageMenu />
    </div>
  )
}

export default Navigation
