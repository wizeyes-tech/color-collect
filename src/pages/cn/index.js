import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Features from "../../components/features"
import Hero from "../../components/hero"
import PartnersCN from "../../components/partnersCN"
import CreditsCN from "../../components/CreditsCN"

import '../index.css'

const IndexPage = () => {
  return (
    <Layout language={`cn`}>
      <SEO title="Home"/>
      <Hero language={`cn`} />
      <Features language={`cn`} />
      <PartnersCN />
      <CreditsCN />
    </Layout>
  )
}

export default IndexPage
