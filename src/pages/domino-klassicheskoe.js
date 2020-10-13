import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import WrapperSecond from "../components/WrapperSecond"

const SecondPage = ({ path, children }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Правила игры в классическое домино" />
      <WrapperSecond props={path} />
    </Layout>
  )
}
export default SecondPage
