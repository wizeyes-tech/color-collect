import React from "react"
import Partner from "./partner"
import { graphql, useStaticQuery } from "gatsby"


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
    <div style={{ margin: '64px 0' }}>
      <h2 className="type--h3" style={{ fontWeight: 600 }}>合作伙伴</h2>
      <Partner icon={imageQuery.memoryHelper.childImageSharp.fixed}
               name={`Memory Helper`}
               link={`/`}
      />
      <Partner icon={imageQuery.fanqieqingdan.childImageSharp.fixed}
               name={`番茄清单`}
               link={`/`}
      />
    </div>
  )
}


export default PartnersCN