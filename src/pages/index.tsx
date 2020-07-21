import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      <p>{t('home.subline')}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">{t('home.backToHome')}</Link>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
