import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import ruLogo from "images/dominoes/flag-rus.png"
import enLogo from "images/dominoes/flag-gb.png"

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()

  const [language, setValues] = useState({
    language: "en",
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  function handleChange(event) {
    i18n.changeLanguage(event.target.closest(".menu_item").dataset.value)

    setValues({ language: event.target.closest(".menu_item").dataset.value })
  }

  return (
    <div
      className={isOpen ? "language_menu open" : "language_menu"}
      data-name={language.language}
      onClick={toggleOpen}
    >
      <div className="menu_active">
        <div className={language.language === "en" ? "active_item active" : "active_item"}>
          <img src={enLogo} alt="EN" />
          <span>English</span>
        </div>
        <div className={language.language === "ru" ? "active_item active" : "active_item"}>
          <img src={ruLogo} alt="RU" />
          <span>Русский</span>
        </div>
      </div>
      <div className="menu_list">
        <div className="menu_item"
             data-value={"en"}
             onClick={(e) => handleChange(e)}>
          <img src={enLogo} alt="EN" />
          <span>English</span>
        </div>
        <div className="menu_item"
             data-value={"ru"}
             onClick={(e) => handleChange(e)}>
          <img src={ruLogo} alt="RU" />
          <span>Русский</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu
