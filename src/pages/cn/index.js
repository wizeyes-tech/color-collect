import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Features from "../../components/features"
import Hero from "../../components/hero"
import PartnersCN from "../../components/partnersCN"

import '../index.css'

const IndexPage = () => {
  return (
    <Layout language={`cn`}>
      <SEO title="Home"/>
      <Hero language={`cn`} />
      <Features language={`cn`} />
      <PartnersCN />
    </Layout>
  )
}

export default IndexPage
