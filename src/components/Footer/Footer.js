import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useIntl } from "gatsby-plugin-intl"
import { useTranslation } from "react-i18next"
import Logo from "../Logo/Logo"
import "./footer.scss"

import apple from "images/dominoes/logo-app-store.png"
import google from "images/dominoes/logo-gplay.png"

const Footer = () => {
  // const intl = useIntl()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "dominoes/main-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
      <footer className="footer">
        <div className="shadow"></div>
        <div className="global-container">
          <div className="footer_inner">
            <div className="inner_column logotype">
              <div className="column_inner">
                <div className="inner_logo">
                  <Logo />
                </div>
                <div className="inner_desc">{t("footer.footer-logo-desc")}</div>
              </div>
            </div>
            <div className="inner_column btns">
              <div className="column_inner">
                <div className="inner_img">
                  <div className="img img_apple">
                    <Link to="https://apps.apple.com/us/app/dominoes-classic-edition/id1434957889" target="_blank">
                      <img src={apple} alt="Dominoes" />
                    </Link>
                  </div>
                  <div className="img img_google">
                    <Link to="https://play.google.com/store/apps/details?id=com.LoopGames.Domino&hl=en_US&gl=US" target="_blank">
                      <img src={google} alt="Dominoes" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner_column navi">
              <div className="column_inner">
                <ul>
                  <li>
                    <Link to="/istoriya-domino">{t("footer.footer-about-game")}</Link>
                  </li>
                  <li>
                    <Link to="/advantages">
                      {t("footer.footer-advantages-game")}
                    </Link>
                  </li>


                  <li>
                    <Link to="/domino-online">{t("header.header-types-domino-online")}</Link>
                  </li>
                  <li>
                    <Link to="/domino-klassicheskoe">{t("header.header-types-domino-klassicheskoe")}</Link>
                  </li>
                  <li>
                    <Link to="/domino-5">{t("header.header-types-domino-5")}</Link>
                  </li>
                  <li>
                    <Link to="/domino-blok">{t("header.header-types-domino-blok")}</Link>
                  </li>

                  <li>
                    <Link to="/strategiya-v-domino">
                      {t("footer.footer-strategy-game")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column_inner">
                <ul>
                  <li>
                    <Link to="http://loppipoppi.com/privacy-policy" target="_blank">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="http://loppipoppi.com/terms-of-use" target="_blank">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BackgroundImage>
  )
}

export default Footer
