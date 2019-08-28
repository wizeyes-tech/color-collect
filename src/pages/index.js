import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import Hero from "../components/hero"

import './index.css'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
      <Hero language={`en`} />
      <Features language={`en`} />
    </Layout>
  )
}

export default IndexPage
