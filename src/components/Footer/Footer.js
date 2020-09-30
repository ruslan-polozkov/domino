import React from "react"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"
import "./footer.scss";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="shadow"></div>
      <div className="global-container">
        <div className="footer_inner">
          <div className="inner_column">
            <div className="column_inner">
              <div className="inner_logo">
                <Link to="/">{t('page2.link')}</Link>
              </div>
              <div className="inner_desc">{t('footer.footer-logo-desc')}</div>
            </div>
          </div>
          <div className="inner_column">
            <div className="column_inner">
            </div>
          </div>
          <div className="inner_column">
            <div className="column_inner">
              <Link to="/about">{t('footer.footer-about-game')}</Link>
              <Link to="/advantages">{t('footer.footer-advantages-game')}</Link>
              <Link to="/types">{t('footer.footer-types-game')}</Link>
              <Link to="/strategy">{t('footer.footer-strategy-game')}</Link>
            </div>
          </div>
          <div className="inner_column">
            <div className="column_inner">
              <Link to="/">{t('footer.footer-cookie')}</Link>
              <Link to="/">{t('footer.footer-privacy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
