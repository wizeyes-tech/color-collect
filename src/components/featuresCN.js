import React from "react"
import Feature from "./feature"
import { graphql, useStaticQuery } from "gatsby"

const FeaturesCN = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      cameraEn: file(relativePath: { eq: "features/camera-cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      photosEn: file(relativePath: { eq: "features/photos-cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      previewEn: file(relativePath: { eq: "features/preview-cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <div>
      <Feature title={`相机实时配色`}
               desc={`通过相机，捕捉下眼前的美景和心仪的色彩，将眼前的美景收录为你的专属色卡。`}
               image={imageQuery.cameraEn.childImageSharp.fluid}
               titleBold={true}
      />

      <Feature title={`灵感探索配色`}
               desc={`从中西经典艺术作品、自然风光、电影动画等提取的600多种原创配色。`}
               image={imageQuery.previewEn.childImageSharp.fluid}
               titleBold={true}
      />

      <Feature title={`照片智能配色`}
               desc={`更精准的颜色识别算法，从自己的相片中发现配色灵感。`}
               image={imageQuery.photosEn.childImageSharp.fluid}
               titleBold={true}
      />
    </div>
  )
}

FeaturesCN.propType = {}

FeaturesCN.defaultProp = {}

export default FeaturesCN