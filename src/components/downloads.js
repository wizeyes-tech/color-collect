import React, { Fragment } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./downloads.module.css"
import iosBadge from "../images/button/ios-app-store-badge.svg"

const Downloads = ({ iosTitle, iosLink, androidTitle, androidLink, size = `m` }) => {

  function AndroidImageDesktop() {
    if (size === "s") {
      return <Img fixed={data.androidSmail.childImageSharp.fixed}
                  title={iosTitle}
                  alt={iosTitle}
      />
    } else {
      return <Img fixed={data.androidMedium.childImageSharp.fixed}
                  title={iosTitle}
                  alt={iosTitle}
      />
    }
  }

  const data = useStaticQuery(graphql`
    query {
      iosSmall: file(relativePath: { eq: "button/ios-app-store-badge.svg" }) {
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
      
      androidSmail: file(relativePath: { eq: "button/download-android.png" }) {
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
      
      iosMedium: file(relativePath: { eq: "button/ios-app-store-badge.svg" }) {
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
      
      androidMedium: file(relativePath: { eq: "button/download-android.png" }) {
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
    <div className={styles.downloadWrapper}>
      <a href={iosLink}
         className={styles.downloadItem}
      >
        <span>
          <img src={iosBadge}
               title={iosTitle}
               alt={iosTitle}
          />
        </span>
      </a>
      <a href={androidLink}
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
          <Img fixed={data.androidSmail.childImageSharp.fixed}
               title={androidTitle}
               alt={androidTitle}
          />
        </span>
        <span className={styles.downloadDesktop}>
          <AndroidImageDesktop/>
        </span>
      </a>
    </div>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads
