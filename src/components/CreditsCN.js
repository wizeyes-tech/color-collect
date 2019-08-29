import React from "react"
import Credit from "./credit"
import { graphql, useStaticQuery } from "gatsby"
import styles from './credit.module.css'

const CreditsCN = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      priceTag: file(relativePath: { eq: "credit/price-tag.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sspai: file(relativePath: { eq: "credit/sspai.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      zuimei: file(relativePath: { eq: "credit/zuimei.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.creditsWrapper}>
      <h2 className="type--h3" style={{ fontWeight: 600 }}>特别鸣谢</h2>

      <div className={styles.credits}>
        <Credit icon={imageQuery.priceTag.childImageSharp.fixed}
                name={`Price Tag`}
                link={`/`}
        />
        <Credit icon={imageQuery.sspai.childImageSharp.fixed}
                name={`少数派`}
                link={`https://sspai.com/`}
        />
        <Credit icon={imageQuery.zuimei.childImageSharp.fixed}
                name={`最美应用`}
                link={`http://zuimeia.com/`}
        />
      </div>
    </div>
  )
}


export default CreditsCN