import React from "react"
import Downloads from "./downloads"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./heroEN.module.css"


const HeroEN = () => {
  const data = useStaticQuery(graphql`
    query {
      mockupMobile: file(relativePath: { eq: "mockups/faceEN.png" }) {
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
      mockupDesktop: file(relativePath: { eq: "mockups/faceEN.png" }) {
        childImageSharp {
          fixed(width: 320) {
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
    <div style={{
      position: "relative",
      paddingBottom: 215,
    }}>

      <div className={styles.note}>INTRODUCING</div>
      <h1 className={styles.title}>Color Collect</h1>
      <p className={styles.subtitle}>A color app for everyone.</p>

      <div className={styles.productHunt}>
        <a
          href="https://www.producthunt.com/posts/color-collect?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-color-collect"
          target="_blank" rel="noreferrer">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=165523&theme=light"
               alt="Color Collect - A color app for every one. | Product Hunt Embed"/>
        </a>
      </div>

      <div className={styles.downloads}>
        <Downloads iosTitle={`Download Color Collect for iOS`}
                   iosLink={`https://apps.apple.com/app/id1439521846`}
                   androidTitle={`Download Color Collect for Android`}
                   androidLink={`https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture`}
        />
      </div>

      {/*<Link to={"/"}*/}
      {/*      className={styles.paletteLink}*/}
      {/*>*/}
      {/*  Explore palettes →*/}
      {/*</Link>*/}

      <div className={styles.mockup}>
        <div className={styles.mockupMobile}>
          <Img fixed={data.mockupMobile.childImageSharp.fixed}/>
        </div>
        <div className={styles.mockupDesktop}>
          <Img fixed={data.mockupDesktop.childImageSharp.fixed}/>
        </div>
      </div>
    </div>
  )
}


HeroEN.propType = {}

HeroEN.defaultProp = {}

export default HeroEN

