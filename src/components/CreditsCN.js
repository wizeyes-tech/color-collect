import React from "react"
import Credit from "./credit"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./credit.module.css"

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
      xiaozhong: file(relativePath: { eq: "credit/xiao-zhong.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appso: file(relativePath: { eq: "credit/appso.png" }) {
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
      <h2 className="type--h3">特别鸣谢</h2>

      <div className={styles.credits}>
        <Credit icon={imageQuery.priceTag.childImageSharp.fixed}
                name={`Price Tag`}
                link={`https://www.weibo.com/u/6087949803?ref=色采ColorCollect`}
        />
        <Credit icon={imageQuery.zuimei.childImageSharp.fixed}
                name={`最美应用`}
                link={`http://zuimeia.com/?ref=色采ColorCollect`}
        />
        <Credit icon={imageQuery.sspai.childImageSharp.fixed}
                name={`少数派`}
                link={`https://sspai.com/?ref=色采ColorCollect`}
        />
        <Credit icon={imageQuery.xiaozhong.childImageSharp.fixed}
                name={`小众软件`}
                link={`https://www.appinn.com/color-collect/?ref=色采ColorCollect`}
        />
        <Credit icon={imageQuery.appso.childImageSharp.fixed}
                name={`appso`}
                link={`https://www.ifanr.com/app/1268650?ref=色采ColorCollect`}
        />
      </div>
    </div>
  )
}


export default CreditsCN