import React from "react"
import Downloads from "./downloads"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./heroCN.module.css"


const HeroCN = () => {
  const data = useStaticQuery(graphql`
    query {
      mockup: file(relativePath: { eq: "mockups/faceCN.png" }) {
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
  `)

  return (
    <div>

      <div className={styles.contentWrapper}>
        <Img fixed={data.mockup.childImageSharp.fixed} style={{ marginLeft: -15 }}/>

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

