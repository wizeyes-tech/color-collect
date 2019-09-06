import React from "react"
import Downloads from "./downloads"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./heroCN.module.css"


const HeroCN = () => {
  const data = useStaticQuery(graphql`
    query {
      mockupMobile: file(relativePath: { eq: "mockups/faceCN.png" }) {
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
      mockupDesktop: file(relativePath: { eq: "mockups/faceCN.png" }) {
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
    <div>

      <div className={styles.contentWrapper}>

        <div className={styles.mockup}>
          <div className={styles.mockupMobile}>
            <Img fixed={data.mockupMobile.childImageSharp.fixed}/>
          </div>
          <div className={styles.mockupDesktop}>
            <Img fixed={data.mockupDesktop.childImageSharp.fixed}/>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className="type--h4-cn">色采</h1>
          <p>写给大家用的配色应用。</p>
          <p>寻找配色灵感，</p>
          <p>轻松搭配出好色彩。</p>
        </div>

        <Link to={"/"} className={styles.cta}>
          探索色卡 <span style={{ writingMode: "lr" }}>→</span>
        </Link>
      </div>


      <div className={styles.downloadsWrapper}>
        <Downloads/>
      </div>

    </div>
  )
}


HeroCN.propType = {}

HeroCN.defaultProp = {}

export default HeroCN

