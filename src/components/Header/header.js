import PropTypes from "prop-types"
import React from "react"

import Logo from "../Logo/Logo"
import LanguageMenu from '../languageMenu'
import Navigation from "../Navigation"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="global-container">
      <div className="header_inner">
        <Logo />
        <Navigation />
        <LanguageMenu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
