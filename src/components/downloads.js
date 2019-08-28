import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Downloads = () => {
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
  `)

  return (
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
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads