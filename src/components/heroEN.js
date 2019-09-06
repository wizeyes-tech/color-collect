import React from "react"
import Downloads from "./downloads"
import { graphql, Link, useStaticQuery } from "gatsby"
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

      <div className={styles.downloads}>
        <Downloads/>
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

