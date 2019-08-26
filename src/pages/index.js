import React from "react"
// import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import iOSDownload from "../images/button/download-ios.png"
import androidDownload from "../images/button/download-android.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div>INTRODUCING</div>
    <h1>Color Collect</h1>
    <p>A color app for everyone.</p>
    <img src={iOSDownload} alt="Download Color Collect for iOS"/>
    <img src={androidDownload} alt="Download Color Collect for Android"/>
  </Layout>
)

export default IndexPage
