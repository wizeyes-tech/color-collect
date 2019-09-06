import React, { Fragment } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./downloads.module.css"

const Downloads = () => {
  const data = useStaticQuery(graphql`
    query {
      iosMobile: file(relativePath: { eq: "button/download-ios.png" }) {
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
      
      androidMobile: file(relativePath: { eq: "button/download-android.png" }) {
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
      
      iosDesktop: file(relativePath: { eq: "button/download-ios.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      androidDesktop: file(relativePath: { eq: "button/download-android.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
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
    <Fragment>
      <a href="https://apps.apple.com/cn/app/id1439521846"
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
        <Img fixed={data.iosMobile.childImageSharp.fixed}
             title={`Download Color Collect for iOS`}
             alt={`Download Color Collect for iOS`}
        />
        </span>
        <span className={styles.downloadDesktop}>
        <Img fixed={data.iosDesktop.childImageSharp.fixed}
             title={`Download Color Collect for iOS`}
             alt={`Download Color Collect for iOS`}
        />
        </span>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture"
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
        <Img fixed={data.androidMobile.childImageSharp.fixed}
             title={`Download Color Collect for Android`}
             alt={`Download Color Collect for Android`}
        />
        </span>
        <span className={styles.downloadDesktop}>
        <Img fixed={data.androidDesktop.childImageSharp.fixed}
             title={`Download Color Collect for Android`}
             alt={`Download Color Collect for Android`}
        />
        </span>
      </a>
    </Fragment>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads