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
      
      mockup: file(relativePath: { eq: "mockups/face.png" }) {
        childImageSharp {
          fixed(width: 203, height: 319) {
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
      <div style={{
        position: 'relative',
        paddingBottom: 215,
      }}>

        <div className="type--note">INTRODUCING</div>
        <h1 className="type--h2" style={{ margin: "0 0 10px 0" }}>Color Collect</h1>
        <p>A color app for everyone.</p>

        <div>
          <a href="https://apps.apple.com/cn/app/id1439521846"
             target="_blank"
             style={{
               margin: "0 12px 0 0",
             }}
          >
            <Img fixed={data.ios.childImageSharp.fixed}
                 title={`Download Color Collect for iOS`}
                 alt={`Download Color Collect for iOS`}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture"
             target="_blank"
          >
            <Img fixed={data.android.childImageSharp.fixed}
                 title={`Download Color Collect for Android`}
                 alt={`Download Color Collect for Android`}
            />
          </a>
        </div>

        <Link to={"/"}
              className={"type--link"}
              style={{
                margin: "42px 0 0 0",
                display: "block",
              }}
        >
          Explore palettes →
        </Link>

        <Img fixed={data.mockup.childImageSharp.fixed}
             style={{
               position: 'absolute',
               right: -72,
               top: 125,
             }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
