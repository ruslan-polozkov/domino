import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import ruLogo from "images/dominoes/ru.png"
import enLogo from "images/dominoes/us.png"

const LanguageMenu = (data) => {
  const { t, i18n } = useTranslation()

  const [language, setValues] = useState({
    language: (i18n.language === 'en' || !i18n.language) ? "en" : "ru",
  })

  console.log(language.language)

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  function handleChange(event) {
    i18n.changeLanguage(event.target.closest(".menu_item").dataset.value)
    setValues({ language: event.target.closest(".menu_item").dataset.value })

    if (event.target.closest(".menu_item").dataset.value === 'en') {
      switch (window.location.pathname.replace(/\//g, '')) {
        case "istoriya-domino":
          window.location.href = window.location.origin + '/' + 'history-of-dominoes'
          return;
        case "domino-online":
          window.location.href = window.location.origin + '/' + 'dominoes-online'
          return;
        case "domino-klassicheskoe":
          window.location.href = window.location.origin + '/' + 'dominoes-rules'
          return;
        case "domino-5":
          window.location.href = window.location.origin + '/' + 'all-fives-dominoes'
          return;
        case "domino-blok":
          window.location.href = window.location.origin + '/' + 'blocks-dominoes'
          return;
      }
    } else {
      switch (window.location.pathname.replace(/\//g, '')) {
        case "history-of-dominoes":
          window.location.href = window.location.origin + '/' + 'istoriya-domino'
          return;
        case "dominoes-online":
          window.location.href = window.location.origin + '/' + 'domino-online'
          return;
        case "dominoes-rules":
          window.location.href = window.location.origin + '/' + 'domino-klassicheskoe'
          return;
        case "all-fives-dominoes":
          window.location.href = window.location.origin + '/' + 'domino-5'
          return;
        case "blocks-dominoes":
          window.location.href = window.location.origin + '/' + 'domino-blok'
          return;
      }
    }
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
        <div
          className={language.language === "ru" ? "menu_item" : "menu_item dnone"}
          data-value={"en"}
          onClick={e => handleChange(e)}
        >
          <img src={enLogo} alt="EN" />
          <span>English</span>
        </div>
        <div
          className={language.language === "en" ? "menu_item" : "menu_item dnone"}
          data-value={"ru"}
          onClick={e => handleChange(e)}
        >
          <img src={ruLogo} alt="RU" />
          <span>Русский</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu
