import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import WrapperSecond from "../components/WrapperSecond"

const NotFoundPage = ({ path, children }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Domino game" />
      <WrapperSecond props={path} />
    </Layout>
  )
}

export default NotFoundPage
