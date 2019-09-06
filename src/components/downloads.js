import React, { Fragment } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./downloads.module.css"

const Downloads = ({ iosTitle, iosLink, androidTitle, androidLink, size = `m` }) => {

  function IosImageDesktop() {
    if (size === "s") {
      return <Img fixed={data.iosSmall.childImageSharp.fixed}
                  title={iosTitle}
                  alt={iosTitle}
      />
    } else {
      return <Img fixed={data.iosMedium.childImageSharp.fixed}
                  title={iosTitle}
                  alt={iosTitle}
      />
    }
  }

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
      iosSmall: file(relativePath: { eq: "button/download-ios.png" }) {
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
      
      iosMedium: file(relativePath: { eq: "button/download-ios.png" }) {
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
    <Fragment>
      <a href={iosLink}
         className={styles.downloadItem}
      >
        <span className={styles.downloadMobile}>
          <Img fixed={data.iosSmall.childImageSharp.fixed}
               title={iosTitle}
               alt={iosTitle}
          />
        </span>
        <span className={styles.downloadDesktop}>
          <IosImageDesktop/>
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
    </Fragment>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads