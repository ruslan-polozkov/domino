import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import ruLogo from "images/dominoes/ru.png"
import enLogo from "images/dominoes/us.png"

const LanguageMenu = props => {
  const intl = useIntl()
  const { t, i18n } = useTranslation()
  const currentPathName = window.location.pathname;

  const [language, setValues] = useState({
    language: "ru",
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  function handleChange(event) {
    console.log('intl')
    debugger
    i18n.changeLanguage(event.target.closest(".menu_item").dataset.value)

    setValues({ language: event.target.closest(".menu_item").dataset.value })
  }

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (isOpen && !event.target.closest('.language_menu.open')) {
        setIsOpen(!isOpen)
      }
    })
  })

  return (
    <div
      className={isOpen ? "language_menu open" : "language_menu"}
      data-name={language.language}
      onClick={toggleOpen}
    >
      <div className="menu_active">
        <div
          className={
            language.language === "en" ? "active_item active" : "active_item"
          }
        >
          <img src={enLogo} alt="EN" />
          <span>
            English
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
            </svg>
          </span>
        </div>
        <div
          className={
            language.language === "ru" ? "active_item active" : "active_item"
          }
        >
          <img src={ruLogo} alt="RU" />
          <span>
            Русский
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="menu_list">
        <Link
          className={language.language === "ru" ? "menu_item" : "menu_item dnone"}
          data-value={"en"}
          onClick={e => handleChange(e)}
          to={'/en'}
          // to={window.location.href.replace('en', 'ru')}
        >
          <img src={enLogo} alt="EN" />
          <span>English</span>
        </Link>
        <Link
          className={language.language === "en" ? "menu_item" : "menu_item dnone"}
          data-value={"ru"}
          onClick={e => handleChange(e)}
          to={'/ru'}
          // to={window.location.href.replace('ru', 'en')}
        >
          <img src={ruLogo} alt="RU" />
          <span>Русский</span>
        </Link>
      </div>
    </div>
  )
}

export default LanguageMenu
