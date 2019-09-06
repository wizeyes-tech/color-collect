import React from "react"
import Partner from "./partner"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./partner.module.css"

const PartnersCN = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      memoryHelper: file(relativePath: { eq: "partners/memory-helper.png" }) {
        childImageSharp {
          fixed(width: 88, height: 88) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fanqieqingdan: file(relativePath: { eq: "partners/fanqieqingdan.png" }) {
        childImageSharp {
          fixed(width: 88, height: 88) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.partnersWrapper}>
      <h2 className="type--h3" style={{ fontWeight: 600 }}>合作伙伴</h2>
      <div className={styles.partners}>
        <Partner icon={imageQuery.memoryHelper.childImageSharp.fixed}
                 name={`Memory Helper`}
                 link={`/cn/integration/memory-helper`}
        />
        <Partner icon={imageQuery.fanqieqingdan.childImageSharp.fixed}
                 name={`番茄清单`}
                 link={`/cn/integration/just-list`}
        />
      </div>
    </div>
  )
}


export default PartnersCN