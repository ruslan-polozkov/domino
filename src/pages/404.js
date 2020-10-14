import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import BackgroundImage from "gatsby-background-image"

import gifTravolta from "images/dominoes/second-pages/travolta-1.gif"

const NotFoundPage = ({ path, children }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Domino game" />
      <div className="wrapper">
        <article className={"main " + 'error'}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>{t(`404.content_title`)}</h2>
                <Link to={'/'}>
                  {t(`404.content_link`)}
                </Link>
              </div>
              <div className="content_img">
                <img src={gifTravolta} alt="Dominoes" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default NotFoundPage
