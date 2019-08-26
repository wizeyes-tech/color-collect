import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      ios: file(relativePath: { eq: "button/download-ios.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      android: file(relativePath: { eq: "button/download-android.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `,
  )
  return (
    <Layout>
      <SEO title="Home"/>
      <div className="type--note">INTRODUCING</div>
      <h1 className="type--h2" style={{ margin: 0 }}>Color Collect</h1>
      <p>A color app for everyone.</p>
      <Link to={`https://apps.apple.com/cn/app/id1439521846`}>
        <Img fixed={data.ios.childImageSharp.fixed}
             title={`Download Color Collect for iOS`}
             alt={`Download Color Collect for iOS`}
        />
      </Link>
      <Link to={`https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture`}>
        <Img fixed={data.android.childImageSharp.fixed}
             title={`Download Color Collect for Android`}
             alt={`Download Color Collect for Android`}
        />
      </Link>
    </Layout>
  )
}

export default IndexPage
