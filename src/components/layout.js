/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from '../i18n/withTrans'

import Header from "./header"
import Footer from "./Footer/footer"

import "./layout.scss"

const Layout = ({ children, t, i18n }) => {
  console.log('LAyout')
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const translatedTitle = t(`site.${data.site.siteMetadata.title}`)
  return (
    <>
      <Header siteTitle={translatedTitle} />
      { children }
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
