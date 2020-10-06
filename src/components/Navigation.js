import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import LanguageMenu from "./languageMenu"

const Navigation = () => {
  const { t } = useTranslation()

  return (
    <div className="header_menu">
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>{t("header.header-about")}</Link>
          </li>
          <li>
            <Link to={"/advantages"}>{t("header.header-advantages")}</Link>
          </li>
          <li>
            <Link to={"/types"}>{t("header.header-types")}</Link>
          </li>
          <li>
            <Link to={"/strategy"}>{t("header.header-strategy")}</Link>
          </li>
        </ul>
      </nav>
      <LanguageMenu />
    </div>
  )
}

export default Navigation
