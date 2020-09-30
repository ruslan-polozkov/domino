import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const SecondPage = () => {
  const { t } = useTranslation()

  return(
    <Layout>
      <SEO title="About game" />
      <div className="wrapper">

      </div>
    </Layout>
  )
}
export default SecondPage
