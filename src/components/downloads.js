import React, { Fragment } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./downloads.module.css"

const Downloads = ({iosTitle, iosLink, androidTitle, androidLink}) => {
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
      <a href={iosLink}
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
        <Img fixed={data.iosMobile.childImageSharp.fixed}
             title={iosTitle}
             alt={iosTitle}
        />
        </span>
        <span className={styles.downloadDesktop}>
        <Img fixed={data.iosDesktop.childImageSharp.fixed}
             title={iosTitle}
             alt={iosTitle}
        />
        </span>
      </a>
      <a href={androidLink}
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
        <Img fixed={data.androidMobile.childImageSharp.fixed}
             title={androidTitle}
             alt={androidTitle}
        />
        </span>
        <span className={styles.downloadDesktop}>
        <Img fixed={data.androidDesktop.childImageSharp.fixed}
             title={androidTitle}
             alt={androidTitle}
        />
        </span>
      </a>
    </Fragment>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads